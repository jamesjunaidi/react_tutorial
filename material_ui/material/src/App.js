import React from 'react';
import './App.css';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( {
  helloThereStyle: {
    fontStyle: 'oblique',
    color: "red",
    fontSize: "30px"
  },
  buttonStles: {
    color: "green",
    border: 0
  }

});



function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography 
      className={classes.helloThereStyle}
      variant="h1" 
      color="primary"
      > 
        Hello There 
    </Typography>
      <h1> Material UI </h1>
      <h2> Introduction </h2>
      <Button 
      className={classes.buttonStyles}
      color="secondary"
      > 
        This is our first button 
      </Button>
    </div>
  );
}

export default App;
