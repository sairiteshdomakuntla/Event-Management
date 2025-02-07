import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography, Button, useTheme } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: 6,
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              Create, Discover, and Connect Through Events
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Organize memorable experiences, connect with like-minded people, and explore exciting gatherings in your community.
            </Typography>
            {!user ? (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" size="large" onClick={() => navigate('/register')} sx={{ px: 4 }}>
                  Create Your First Event
                </Button>
                <Button variant="outlined" size="large" onClick={() => navigate('/login')} sx={{ px: 4 }}>
                  Sign In
                </Button>
              </Box>
            ) : (
              <Button variant="contained" size="large" onClick={() => navigate('/dashboard')} sx={{ px: 4 }}>
                Manage Your Events
              </Button>
            )}
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 500, borderRadius: 2, boxShadow: 3, overflow: 'hidden' }}>
              <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="600" fill={theme.palette.background.paper}/>
                

                <circle cx="200" cy="300" r="160" fill={theme.palette.mode === 'dark' ? '#333' : '#f5f5f5'} opacity="0.5"/>
                <circle cx="600" cy="300" r="160" fill={theme.palette.mode === 'dark' ? '#333' : '#f5f5f5'} opacity="0.5"/>
                

                <rect x="300" y="150" width="200" height="200" fill={theme.palette.background.paper} stroke={theme.palette.text.primary} strokeWidth="4"/>
                <rect x="300" y="150" width="200" height="40" fill={theme.palette.text.primary}/>
                

                <line x1="350" y1="150" x2="350" y2="350" stroke={theme.palette.divider} strokeWidth="2"/>
                <line x1="400" y1="150" x2="400" y2="350" stroke={theme.palette.divider} strokeWidth="2"/>
                <line x1="450" y1="150" x2="450" y2="350" stroke={theme.palette.divider} strokeWidth="2"/>
                

                <circle cx="250" cy="400" r="30" fill={theme.palette.text.primary}/>
                <circle cx="350" cy="400" r="30" fill={theme.palette.text.primary}/>
                <circle cx="450" cy="400" r="30" fill={theme.palette.text.primary}/>
                <circle cx="550" cy="400" r="30" fill={theme.palette.text.primary}/>


                <circle cx="150" cy="200" r="20" fill={theme.palette.text.secondary}/>
                <circle cx="650" cy="200" r="20" fill={theme.palette.text.secondary}/>
                <circle cx="150" cy="400" r="15" fill={theme.palette.text.secondary}/>
                <circle cx="650" cy="400" r="15" fill={theme.palette.text.secondary}/>
              </svg>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;