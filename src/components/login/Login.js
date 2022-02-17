import React from 'react';
import './Login.css';
import {Avatar, Checkbox, FormControlLabel, Grid, Paper, TextField, Button, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom';


function Login () {

    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnStyle = {margin: '8px 0'}

    return (
        <Grid>
            <Paper elevation={10} className="paperStyle">

<Grid align='center'>
<Avatar style={avatarStyle}> <LockOutlinedIcon /> </Avatar>
            
<h2> Sign In</h2>
 </Grid>

 <TextField label='Username' placeholder='Enter Username' fullWidth required
  
 />
 
 <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
            
            <FormControlLabel control={
                <Checkbox
                name='checkedB'
                color='primary' />
            }
            label="Remember me" />
<Button type='submit' color='primary' variant='contained' style={btnStyle}
 fullWidth > Sign In</Button>

<Typography> 
 <Link to="/signup"> Forget Password  ?</Link></Typography>


<Typography> Do you have an account ? 
 <Link to="/signup"> Sign up ?</Link></Typography>
            </Paper>
        </Grid>
    )
}

export default Login;
