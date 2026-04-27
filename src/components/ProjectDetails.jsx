import { Box, Container, IconButton, Typography, styled } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import hero from "../images/hero.jpg"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GitHubIcon from '@mui/icons-material/GitHub';
import image from '../images/image.png'

const TechnologiesSection = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
    gap: 5,
    color: 'white',
})

const SectionItem = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    gap: 15,
    zIndex: '1'
})

const Image = styled('img')({
    maxWidth: '100%'
})



const ProjectDetails = () => {

    const location = useLocation();
    const { cardId } = useParams();
    const { card } = location.state;

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: '100vh', // 👈 change from height
                backgroundAttachment: 'fixed', // 👈 THIS is what you meant
                overflowY: 'scroll',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                py: { xs: 8, md: 10 },
                height: '100vh',
                position: 'relative',
            }}
        >
            <Box>
                <Container
                    sx={{
                        color: 'white',
                        paddingTop: '100px',
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10
                        }}
                    >
                        <IconButton
                            onClick={() => navigate(-1)}
                            sx={{
                                width: 'max-content',
                                color: 'white',
                                transition: 'all 0.3s ease-in-out',
                                "&:hover": {
                                    color: 'rgb(0, 119, 255)'
                                }
                            }}
                        >
                            <ArrowCircleLeftIcon fontSize='large' sx={{ cursor: 'pointer', marginRight: 2 }} />
                            <Typography>Back</Typography>
                        </IconButton>

                        <Typography variant="h3">{card.projectTitle}</Typography>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignItems: 'center',
                            gap: 10
                        }}>
                            <Typography variant="body1" sx={{ maxWidth: '500px' }}>{card.details}</Typography>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            }}>
                                <Typography variant="h5" paddingBottom={2} sx={{
                                    textDecoration: '1px underline rgb(0, 119, 255)',
                                    textUnderlineOffset: '12px',
                                    paddingBottom: '15px'
                                }}>
                                    Technologies
                                </Typography>
                                <TechnologiesSection>
                                    {card.technologies.map(tech => (
                                        <SectionItem key={tech}>
                                            {/* <SvgIcon viewBox="0 0 128 128">
                                            </SvgIcon> */}
                                            <Typography variant='subtitle1'>
                                                {tech}
                                            </Typography>
                                        </SectionItem>
                                    ))}
                                </TechnologiesSection>
                                <Box sx={{ display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    {card.demoLink != null && <IconButton
                                        component="a"
                                        href={card.demoLink}
                                        target="_blank"
                                        sx={{
                                            color: 'white', bgcolor: '#272727', borderRadius: '2px',
                                            transition: 'all 0.3s ease-in-out',
                                            '&:hover': {
                                                bgcolor: '#ffffff',
                                                color: 'rgb(0, 119, 255)'
                                            }
                                        }}>
                                        <Typography variant="subtitle1" mr={1}>Open Project</Typography>
                                        <ArrowRightAltIcon />
                                    </IconButton>}

                                    {card.sourceLink != null && <IconButton
                                        component="a"
                                        href={card.sourceLink}
                                        target="_blank"
                                        sx={{
                                            color: 'white', bgcolor: '#272727', borderRadius: '2px',
                                            transition: 'all 0.3s ease-in-out',
                                            '&:hover': {
                                                bgcolor: '#ffffff',
                                                color: 'rgb(0, 119, 255)'
                                            }
                                        }}>
                                        <Typography variant="subtitle1" mr={1}>Source Code</Typography>
                                        <GitHubIcon />
                                    </IconButton>}

                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingY: { xs: 5, md: '200px'}
                    }}>
                        <Image src={card.image} />
                    </Box>
                </Container>
            </Box>

        </Box>
    )
}

export default ProjectDetails