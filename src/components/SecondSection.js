import { Box } from '@mui/material'
import building from '../images/building.jpg'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'
import Footer from './Footer'

const SecondSection = () => {

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          background: `url(${building}) fixed center`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%'
        }} />
      <Box
        sx={{
          bgcolor: '#16161696',
          backdropFilter: 'blur(5px) saturate(100%)',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
        }}>
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Box>
    </Box>
  )
}

export default SecondSection