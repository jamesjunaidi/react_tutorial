import React from 'react';
import logo from './logo.svg';
import { Grid } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <Grid container direction="column">
      <Grid item> This is where the header will be </Grid>
      <Grid item container> 
        <Grid item xs={2} />
        <Grid item xs={8}>
          this is where the content will be
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
};

export default App;
