import React from "react";
import {Link} from "react-router-dom"
import Login from "./Login";

import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  makeStyles 
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
 
 
import LockIcon from '@material-ui/icons/Lock';
 import './login.css'
 const useStyles = makeStyles(theme => ({
  btn:{
    borderRadius:'4rem',
    width:'20rem',
    height:'3.5rem',
    fontSize:'1rem',
  '&:hover': {
      backgroundColor: 'rgb(67, 110, 24)',
      color:'white'
     
    },
     
  },
  btn1:{
    borderRadius:'4rem',
    width:'10rem',
    height:'3.5rem',
    fontSize:'1rem',
    '&:hover': {
      backgroundColor: 'rgb(67, 110, 24)',
      color:'white'
     
    }
    
  }
}));



const Signup = () => {
  const paperStyle = { padding: "30px 20px", width:750, margin: "50px auto" };
  const headerStyle = { margin: 10 };
  const marginStyle = { margin: "30px 0 0 180px " };
  const imgstyle={margin:"50px 0 0 0"}
  const classes = useStyles();
   
 
  return (
    <>
      <Paper elevation={20} style={paperStyle}>
        <Grid container  >
        
          <Grid item xs={6}>
          <div >
                here we wil set the logo later
            </div>
            <img className="img1"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt="error"
              height={350}
              width={350}
              style={imgstyle}
            ></img>
           
          </Grid>

          <Grid item xs={6}      >
            <Grid align="center">
               
              <h2 style={headerStyle}>To continue,log into sunona</h2>
              <Typography variant="caption">
                please fill the account details
              </Typography>

              <form    width={500}>
                
                <TextField
                  color="secondary"
                  variant="outlined"
                  fullWidth
                   
                  margin="normal"
                  placeholder='enter your email'
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }}
                ></TextField>
                 
                <TextField
                  color="secondary"
                  variant="outlined"
                  fullWidth
                   placeholder="Enter Your Password"
                  margin="normal"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon/>
                      </InputAdornment>
                    )
                  }}
                ></TextField>
                
                 
                <Button className={classes.btn1}
                  type="submit"
                  variant="contained"
                  color="dark"
                  style={marginStyle}
                >
                  Login
                </Button>
                <hr></hr>
                <h4 className="lgfont">Don't Have an Account?</h4>
                
                   <Link  to='/signup'><Button  className={classes.btn}
                  type="button"
                  variant="contained"
                   >signup for sunona</Button></Link>
                 
              </form>
            </Grid>
            
             
           
          </Grid>
         
        </Grid>
      </Paper>
    </>
  );
};

export default Signup;