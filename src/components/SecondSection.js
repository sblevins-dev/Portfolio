import { Box, Container, Typography, Stack } from '@mui/material'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'
import Footer from './Footer'

const glassCard = {
  backdropFilter: 'blur(18px)',
  background: `
    linear-gradient(
      180deg,
      rgba(22,22,22,0.72) 0%,
      rgba(12,12,12,0.68) 100%
    )
  `,
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 4,

  boxShadow: `
    0 10px 30px rgba(0,0,0,0.25),
    0 1px 0 rgba(255,255,255,0.04) inset
  `,
}

const SecondSection = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        color: 'white',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          gap: 6,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 760,
            mx: 'auto',
            pb: 4,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              color: 'rgba(0,119,255,0.8)',
              mb: 2,
              display: 'inline-block',
            }}
          >
            PORTFOLIO
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Full-stack developer focused on building clean, functional web apps.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.75)',
              maxWidth: 620,
              mx: 'auto',
            }}
          >
            A collection of projects showcasing work in React, Angular, .NET, and SQL — focused on usability, performance, and real-world problem solving.
          </Typography>
        </Box>

        <Stack spacing={6}>
          <Box
            sx={{ ...glassCard }}
          >
            <Projects />
          </Box>

          <Box
            sx={{ ...glassCard }}
          >
            <Skills />
          </Box>

          <Box
            sx={{ ...glassCard }}
          >
            <Contact />
          </Box>

          <Box sx={{ pt: 2 }}>
            <Footer />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default SecondSection