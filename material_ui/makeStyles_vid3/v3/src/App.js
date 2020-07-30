import React from 'react';
import logo from './logo.svg';
import { makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import './App.css';


// const useStyles = makeStyles({
//   buttonStyle: {
//     color:"red",
//     border:"none"
//   },
//   textStyle: {
//     color:"green"
//   }
// })

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttonStyle: {
    color:"red",
    border:"none"
  }
}));

// I am not sure how the router works, but it doesn't work in this case rn
function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Button className={classes.buttonStyle}>Small Button </Button>
        <h1 className={classes.textStyle}>this is text</h1>
        <IconButton aria-label="delete" component={RouterLink} to="www.google.com">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
    </Router>
  );
}

export default App;
