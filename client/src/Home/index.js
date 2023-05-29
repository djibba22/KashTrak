import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); // Grid version 1

export function Home() {
    return (
      <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height:'100vh'
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sx={{textAlign: 'center'}}>
          
            <h1>Welcome to tracking better</h1>
            
            <Button
            component={Link}
            to={'/login'}
            sx={{ my: 2, color: 'white', backgroundColor: '#2E3B55',}}
          >
            Create an Account 
          </Button>
        </Grid>
        <Grid xs={6}>
          <Item>Know your due dates</Item>
        </Grid>
        <Grid xs={6}>
          <Item>Visualize you're goals</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  </Paper>
    );
  }