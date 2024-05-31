import React, { useState, useMemo, useEffect } from 'react';
import { Tabs, Tab, Card, CardContent, Typography, TextField, Button, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import { useTheme } from '@mui/system';
import { orangeDarkTheme, orangeLightTheme, basicTheme, darkTheme, lightTheme, customTheme, blueLightTheme, blueDarkTheme, greenLightTheme, greenDarkTheme, redLightTheme, redDarkTheme } from '../layout/themes';
import { GlobalStyles } from '../layout/GlobalStyle';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  const [tab, setTab] = useState(0);
  const [themeMode, setThemeMode] = useState('basic');
  const navigate=useNavigate();
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'basic';
    setThemeMode(savedTheme);
  }, []);

  let theme = useMemo(
    () => {
      switch(themeMode){
        case 'basic':
          return createTheme(basicTheme);
        case 'dark':
          return createTheme(darkTheme);
        case 'light':
          return createTheme(lightTheme);
        case 'custom':
          return createTheme(customTheme);
        case 'blue light':
          return createTheme(blueLightTheme);
        case 'blue dark':
          return createTheme(blueDarkTheme);
        case 'green light':
          return createTheme(greenLightTheme);
        case 'green dark':
          return createTheme(greenDarkTheme);
        case 'red light':
          return createTheme(redLightTheme);
        case 'red dark':
          return createTheme(redDarkTheme);
        case 'orange light':
          return createTheme(orangeLightTheme);
        case 'orange dark':
          return createTheme(orangeDarkTheme);
        default:
          return createTheme(lightTheme);
      }
    },
    [themeMode]
  );


  const goHome=() => {
    navigate('/');
  }

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: theme.palette.background.default
          }}
        >
          <Card sx={{ maxWidth: 400, width: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <img src={'https://picsum.photos/100'} alt="Logo" style={{ borderRadius: '50%' }} />
              </Box>
              <Typography variant="h5" align="center" gutterBottom>
                My Brand Name
              </Typography>
              <Tabs value={tab} onChange={handleChange} centered>
                <Tab label="Sign Up" />
                <Tab label="Sign In" />
              </Tabs>
              {tab === 0 && (
                <Box component="form" sx={{ mt: 2 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    autoComplete="username"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    autoComplete="email"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={goHome}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                </Box>
              )}
              {tab === 1 && (
                <Box component="form" sx={{ mt: 2 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email/Username"
                    autoComplete="username"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={goHome}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Box>
              )}
            </CardContent>
            <Box sx={{ textAlign: 'center', py: 2, borderTop: '1px solid', borderColor: theme.palette.divider }}>
              <Typography variant="body2" color="text.secondary">
                © 2024 My Brand Name. All rights reserved.
              </Typography>
            </Box>
          </Card>
        </Box>
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export default Auth;