import { Box } from '@mui/material'
import HomePage from './HomePage.jsx'
import image from '../images/image.png'

const Home = () => {

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
            <HomePage />
        </Box>
    )
}

export default Home