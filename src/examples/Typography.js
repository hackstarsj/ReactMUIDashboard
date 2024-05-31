import React from 'react';
import { Typography, Grid, Paper, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled typography
const CustomTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}));

const TypographyExamples = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {/* Basic Typography Variants */}
        <Grid item xs={12}>
          <Typography variant="h1">h1 Heading</Typography>
          <Typography variant="h2">h2 Heading</Typography>
          <Typography variant="h3">h3 Heading</Typography>
          <Typography variant="h4">h4 Heading</Typography>
          <Typography variant="h5">h5 Heading</Typography>
          <Typography variant="h6">h6 Heading</Typography>
          <Typography variant="subtitle1">Subtitle 1</Typography>
          <Typography variant="subtitle2">Subtitle 2</Typography>
          <Typography variant="body1">
            Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography variant="body2">
            Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
            pulvinar facilisis justo mollis, auctor consequat urna.
          </Typography>
          <Typography variant="button">Button Text</Typography>
          <Typography variant="caption">Caption Text</Typography>
          <Typography variant="overline">Overline Text</Typography>
        </Grid>

        {/* Typography with Custom Styles */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h4" gutterBottom>
              Custom Styled Typography
            </Typography>
            <CustomTypography variant="body1">
              This is a custom styled typography component using the styled API.
            </CustomTypography>
          </Paper>
        </Grid>

        {/* Responsive Typography */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Responsive Typography
          </Typography>
          <Box sx={{ typography: { xs: 'body2', sm: 'body1', md: 'h6', lg: 'h5', xl: 'h4' } }}>
            This text adjusts according to the screen size.
          </Box>
        </Grid>

        {/* Typography with Theme Customization */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Primary Color Typography
            </Typography>
            <Typography variant="body1" color="secondary">
              Secondary Color Typography
            </Typography>
          </Paper>
        </Grid>

        {/* Display Typography Variants */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Display Typography
          </Typography>
          <Typography variant="display4">Display 4</Typography>
          <Typography variant="display3">Display 3</Typography>
          <Typography variant="display2">Display 2</Typography>
          <Typography variant="display1">Display 1</Typography>
        </Grid>

        {/* Alignments */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Text Alignments
          </Typography>
          <Typography variant="body1" align="left">
            Left aligned text.
          </Typography>
          <Typography variant="body1" align="center">
            Center aligned text.
          </Typography>
          <Typography variant="body1" align="right">
            Right aligned text.
          </Typography>
          <Typography variant="body1" align="justify">
            Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
          </Typography>
        </Grid>

        {/* Typography with NoWrap */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            NoWrap Typography
          </Typography>
          <Typography variant="body1" noWrap>
            This is a long piece of text that will not wrap even when it exceeds the width of the container. It will instead be truncated with an ellipsis.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default TypographyExamples;