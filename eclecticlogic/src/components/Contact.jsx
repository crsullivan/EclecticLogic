import React, {useState} from 'react';
import axios from 'axios';
import {Paper, TextareaAutosize} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import '../Contact.css';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#08ff03',
    },
    secondary: {
      main: '#af47df',
      dark: '#8227ac'
    },
    tertiary: {
      main: '#f4f7f4'
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    '& label.Mui-focused': {
        color: myTheme.palette.primary.main,
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: myTheme.palette.secondary.main,
        },
      },
  },
  emailField: {
    // margin: theme.spacing(0,20),
    width: '80%',
    margin: 'auto',
    '& label.Mui-focused': {
      color: myTheme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: myTheme.palette.primary.main,
      },
    },

  },
  field: {
    '& label.Mui-focused': {
      color: myTheme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: myTheme.palette.primary.main,
      },
    },

  
  },
  button: {
    // margin: theme.spacing(5,80),
    width: '80px',
    margin: 'auto',
    marginTop: '2%',
    backgroundColor: myTheme.palette.secondary.main,
    '&:hover': {
      backgroundColor: myTheme.palette.secondary.dark,
   },
  },
}));

const Contact = () => { 

  const [info, setInfo] = useState({ 'name': '', 'address': '', 'email': ''})

  const classes = useStyles();

  const changeHandler = event => {
    setInfo({...info, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(info);
    if (info.name == "" || info.address == "" || info.email == "") {
      alert("Name, Email, and Body are required.")
    }
    axios
      .post("https://eclectic-be.herokuapp.com/send", info)
      .then(result => {
      console.log(result)
  })
  .catch(error => {
    console.log(error)
    alert("Name and/or Password not recognized, please try again", error)
  })

  }

      return (
        <div className="Contact">
            <Paper className="contactForm" elevation={24}>
              <div className="topForm">
                <TextField 
                  className={classes.field} 
                  name="name"
                  id="outlined-basic" 
                  label="Name*" 
                  variant="outlined" 
                  onChange={changeHandler}
                />
                <TextField 
                  className={classes.field} 
                  name="address"
                  id="outlined-basic" 
                  label="Email*" 
                  variant="outlined" 
                  onChange={changeHandler}
                />
              </div>
              <div className="bottomForm">
                <TextField
                  className={classes.emailField}
                  name="email"
                  id="outlined-multiline-static"
                  label="Message*"
                  multiline
                  rows={15}
                  variant="outlined"
                  onChange={changeHandler}
                /> 
                <Button
                  variant="contained"
                  className={classes.button}
                  // sendIcon={<Icon></Icon>}
                  onClick={handleSubmit}
                  color="primary"
                >
                  Send
                </Button>
              </div>           
            </Paper>
        </div>
      )
    }
  
export default Contact;