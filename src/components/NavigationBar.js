import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import { useContext, useState } from 'react'
import { MyContext } from './MyContext'
import { useLocation, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const glassCard = {
  backdropFilter: 'blur(18px)',
  background: `
    linear-gradient(
      180deg,
      rgba(22,22,22,0.72) 0%,
      rgba(12,12,12,0.68) 100%
    )
  `,
  boxShadow: `
    0 10px 30px rgba(0,0,0,0.25),
    0 1px 0 rgba(255,255,255,0.04) inset
  `,
}


const pages = ["HOME", "PROJECTS", "CONTACT"]
const NavButton = styled(Button)({
    color: 'white',
    '&:hover': {
        color: 'rgb(0, 119, 255)'
    }
})

const NavigationBar = () => {

    const { sectionRefs, scrollTo } = useContext(MyContext);

    const [anchorElHam, setAnchorElHam] = useState(null)

    const navigate = useNavigate()
    const location = useLocation();
    const currentPath = location.pathname;

    const handleNavClick = (index) => {
        if (currentPath !== "/") {
            navigate("/");
            setTimeout(() => {
                scrollTo(index)
            }, 500);
        } else {
            scrollTo(index)
        }
    }

    const handleOpenHam = (e) => {
        
        setAnchorElHam(e.currentTarget);
    };

    const handleCloseHam = (e, buttonClicked) => {
        if (buttonClicked) handleNavClick(pages.indexOf(e.target.textContent));

        setAnchorElHam(null);
    };

    return (
        <AppBar position='fixed'
            sx={{...glassCard}}
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography>
                            STEPHEN BLEVINS
                        </Typography>
                        <Box>
                            <NavButton onClick={() => handleNavClick(0)}>HOME</NavButton>
                            <NavButton onClick={() => handleNavClick(1)}>PROJECTS</NavButton>
                            <NavButton onClick={() => handleNavClick(2)}>CONTACT</NavButton>
                        </Box>

                    </Box>

                    {/* Mobile */}
                    <Box
                        sx={{
                            width: '100%',
                            display: { xs: 'flex', sm: 'none' },
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                        <Typography>
                            SB
                        </Typography>
                        <IconButton sx={{ color: 'white' }} onClick={handleOpenHam} >
                            <MenuIcon />
                        </IconButton>
                        <Menu open={Boolean(anchorElHam)}
                            onClose={(e) => handleCloseHam(e, false)}
                            sx={{
                                marginTop: '30px', color: 'black',
                                "& .MuiPaper-root": {
                                    color: 'white', bgcolor: 'rgba(0, 0, 0, 0.7)',
                                    backdropFilter: "blur(5px) saturate(100%)"
                                }
                            }}
                            anchorEl={anchorElHam}
                            keepMounted
                            transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        >
                            {pages.map((page, i) => (
                                <MenuItem key={i} onClick={(e) => handleCloseHam(e, true)}>
                                    <Typography textAlign='center'>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavigationBar