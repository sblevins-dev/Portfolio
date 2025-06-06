import { Box, Button, Container, Typography } from '@mui/material'
import { useContext } from 'react';
import { MyContext } from './MyContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HomePage = () => {

    const { sectionRefs, scrollTo } = useContext(MyContext);

    return (
        <Container
            ref={sectionRefs[0]}
            sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: { sm: 'center', lg: 'space-between' },
                minHeight: '100vh',
            }}
        >
            <Box sx={{ height: '100%', maxHeight: '100vh' }}>
                <Typography variant='h3'
                    sx={{
                        textDecoration: '1px underline rgb(0, 119, 255)',
                        textUnderlineOffset: '12px',
                        paddingBottom: '15px'
                    }}>
                    Stephen Blevins
                </Typography>
                <Typography variant='h6'>
                    SOFTWARE DEVELOPER
                </Typography>
                <Button variant='contained'
                    onClick={() => scrollTo(2)}
                    sx={{
                        marginY: 2,
                        bgcolor: '#272727',
                        '&:hover': {
                            bgcolor: '#ffffff',
                            color: 'rgb(0, 119, 255)'
                        }
                    }}
                >
                    CONTACT
                </Button>
                <Box display={'flex'} alignItems={'center'} gap={3}>
                    <a href='https://github.com/sblevins-dev' target="_blank" rel="noreferrer">
                        <GitHubIcon fontSize='large'
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    color: 'rgb(0, 119, 255)'
                                }
                            }} />
                    </a>
                    <a href="https://www.linkedin.com/in/sblevins-dev/" target='_blank' rel="noreferrer">
                        <LinkedInIcon fontSize='large'
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    color: 'rgb(0, 119, 255)'
                                }
                            }} />
                    </a>

                </Box>

            </Box>
            <Box
                sx={{
                    maxWidth: '500px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '2px',
                    padding: '30px',
                    backdropFilter: "blur(5px) saturate(100%)",
                    display: { xs: 'none', sm: 'flex' },
                    flexDirection: 'column'
                }}>
                <Typography variant='h6'
                    sx={{
                        textDecoration: '1px underline rgb(0, 119, 255)',
                        textUnderlineOffset: '5px',
                        paddingBottom: '15px'
                    }}>
                    ABOUT
                </Typography>
                <Typography variant='body1'>
                    &emsp; As a dedicated professional with over a decade of experience in 
                    customer service and retail management, complemented by a bachelor of science 
                    in Computer Information Systems specializing in software programming, I offer a 
                    strong foundation for software development. Proficient in JavaScript, 
                    Java, related technologies, and adept in various development tools, I excel in crafting 
                    user-friendly software solutions by leveraging my understanding of end-user 
                    perspectives. I am eager to transition into a junior software engineering role to 
                    further expand my knowledge and skills while actively contributing to innovative 
                    projects.
                </Typography>

            </Box>
        </Container>
    )
}

export default HomePage