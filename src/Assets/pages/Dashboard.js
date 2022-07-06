import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './components/ChangePassword';

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/login')
  }

  return <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Dashboard</h1>
     
        <Button variant='contained' color='primary' size='large' onClick={handleLogout} sx={{ mt: 16 }}>Logout</Button>
      </Grid>
      <Grid item sm={8}>
        <ChangePassword />
      </Grid>
    </Grid>
  </>;
};

export default Dashboard;