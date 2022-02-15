// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { AppTasks, AppNewsUpdate, AppCurrentVisits } from '../components/_dashboard/app';
import AppProgressBar from 'src/components/_dashboard/app/AppProgressBar';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome Onboard!</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppProgressBar />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
