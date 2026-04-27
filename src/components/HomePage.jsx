import { Box, Button, Container, Typography, Stack, Chip, Divider } from '@mui/material'
import { useContext } from 'react'
import { MyContext } from './MyContext'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SecondSection from './SecondSection'

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

const HomePage = () => {
  const { sectionRefs, scrollTo } = useContext(MyContext)

  return (
    <Box
      ref={sectionRefs[0]}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
          gridTemplateColumns: { xs: '1fr', lg: '1.1fr 0.9fr' },
          gap: 6,
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <Box sx={{ maxWidth: 650 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              color: 'rgba(0,119,255,0.8)',
              mb: 2,
              display: 'inline-block',
            }}
          >
            SOFTWARE DEVELOPER
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.05,
              mb: 3,
            }}
          >
            Hi, I’m Stephen Blevins — building clean, modern web experiences.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.78)',
              mb: 4,
              maxWidth: 560,
            }}
          >
            I bring together .NET, Angular, JavaScript, Java, C#, and SQL expertise with a customer-first mindset shaped by years in retail management. I love turning ideas into polished, user-focused products.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollTo(2)}
              sx={{
                bgcolor: '#0077ff',
                px: 4,
                py: 1.5,
                boxShadow: '0 18px 35px rgba(0,119,255,0.22)',
                '&:hover': {
                  bgcolor: '#0090ff',
                },
              }}
            >
              Contact me
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollTo(1)}
              sx={{
                borderColor: 'rgba(255,255,255,0.32)',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: '#0077ff',
                  color: '#0077ff',
                },
              }}
            >
              View work
            </Button>
          </Stack>

          <Stack direction="row" spacing={3} mt={5}>
            <a href="https://github.com/sblevins-dev" target="_blank" rel="noreferrer">
              <GitHubIcon sx={{ fontSize: 32, color: 'white', transition: '0.3s', '&:hover': { color: '#0077ff' } }} />
            </a>
            <a href="https://www.linkedin.com/in/sblevins-dev/" target="_blank" rel="noreferrer">
              <LinkedInIcon sx={{ fontSize: 32, color: 'white', transition: '0.3s', '&:hover': { color: '#0077ff' } }} />
            </a>
          </Stack>
        </Box>

        <Box
          sx={{...glassCard,
            p: { xs: 4, md: 5 }
            }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#d6d6d6' }}>
            About me
          </Typography>

          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
            One year of professional software development with .NET and Angular, plus a strong background in customer-facing roles. I build practical solutions with usability and performance in mind.
          </Typography>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.16)', mb: 3 }} />

          <Typography variant="subtitle1" sx={{ mb: 1, color: '#9ca3af' }}>
            Key strengths
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {['Front-end', 'Back-end', 'UX-focused', 'C#', 'JavaScript', 'SQL'].map((label) => (
              <Chip
                key={label}
                label={label}
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.05)',
                }}
                variant="outlined"
              />
            ))}
          </Stack>
        </Box>
      </Container>
      <SecondSection />
    </Box>
  )
}

export default HomePage