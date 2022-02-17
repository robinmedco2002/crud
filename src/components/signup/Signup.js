import React, { useState } from 'react';
import {Avatar, Grid, Paper, TextField, Button, Typography} from '@material-ui/core';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import {Link, useNavigate} from 'react-router-dom';

function Signup () {
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const signupbtnStyle = {margin: '12px 0', marginTop:'50px'}

    const[inputValue, setInputValue] = useState({
        fullname: "",
        email: "",
        mobile: "",
        username: "",
        password: ""
    })

    const navigatePage = useNavigate();

    const handleInput = (e, type) => {
        console.log("event", type, e.target.value)



        if (type === "fullname") {
           let setData = { ...inputValue, fullname: e.target.value}
            setInputValue(setData)
        } else
        if (type === "email") {
            let setData = { ...inputValue, email: e.target.value}
            setInputValue(setData)
        } else
        if (type === "mobile") {
            let setData = { ...inputValue, mobile: e.target.value}
            setInputValue(setData)
        } else
        if (type === "username") {
            let setData = { ...inputValue, username: e.target.value}
            setInputValue(setData)
        } else   {
            let setData = { ...inputValue, password: e.target.value}
            setInputValue(setData)
        }
    }

    const handleSubmit = () => {
        console.log("get Input Value", inputValue)
        navigatePage('/')
    }
    console.log("get Input Value", inputValue)
    return (
        <Grid>
        <Paper elevation={10} className="paperStyle">

<Grid align='center'>
<Avatar style={avatarStyle}> <HowToRegOutlinedIcon /> </Avatar>
        
        
<h2> Sign Up</h2>

</Grid>

<form>

<TextField label='fullname' placeholder='Enter your Full Name' type="fullname" fullWidth required
    onChange ={(e) => {handleInput(e, "fullname")}} />
    
<TextField label='email' placeholder='Enter your Email ID' type='email' fullWidth required
    onChange = {(e) => {handleInput(e, "email")}}
/>
<TextField label='Mobile Number' placeholder='Enter your Mobile No' type='number' fullWidth required
    onChange = {(e) => {handleInput(e, "mobile")}}
/>
<TextField label='Username' placeholder='Enter Username' fullWidth required
    onChange = {(e) => {handleInput(e,  "username")}}
/>

<TextField label='password' placeholder='Enter Password' type='password' fullWidth required
    onChange ={(e) => {handleInput(e, "password")}}
/>
        
       
<Button type='submit' color='primary' variant='contained' style={signupbtnStyle}
fullWidth disabled={inputValue.fullname === "" || inputValue.email === "" || inputValue.mobile === "" || 
inputValue.username === "" || inputValue.password === "" ? true : false}
onClick =  {() => handleSubmit()}> Sign Up </Button>

</form>

<Typography> Already have an account ? 
<Link to="/login"> Login</Link></Typography>
        </Paper>
    </Grid>
    )
}

export default Signup;
