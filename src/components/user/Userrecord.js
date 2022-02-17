import React, { useState, useEffect } from 'react';
import './Userrecord.css';
import { Grid, Paper } from '@material-ui/core';
import { postUserData, post2UserData } from '../../api/api';

const Userrecord = () => {
  const [inputData, setInputData] = useState({
    name: "",
    gender: "",
    email: ""
  })

  const [show, setShow] = useState(true);
  // if(show === !true) {
  //   postUserData(inputData).then(response => {
  //     console.log("object", response)
  //     if(response.data.data.length){
  //       inputData(response.data.data)
  //     }
  //   }).catch(error => {
  //     console.log("error", error)
  //   })
  // } else {
  //   post2UserData(inputData).then(response => {
  //     console.log("object", response)
  //     if(response.data.data.length){
  //       inputData(response.data.data)
  //     }
  //   }).catch(error => {
  //     console.log("error", error)
  //   })
  // }

  // const togglebtn= ()=> {
  //   setShow(!show)
  // }
  function saveUser() {
    postUserData(inputData).then(response => {
      console.log("object", response)
      if (response.data.data.length) {
        inputData(response.data.data)
      }
    }).catch(error => {
      console.log("error", error)
    })
    setShow(false)
  }

  function updateUser() {
    post2UserData(inputData).then(response => {
      console.log("object", response)
      if (response.data.data.length) {
        inputData(response.data.data)
      }
    }).catch(error => {
      console.log("error", error)
    })
    setShow(true)
  }


  // API Axios Call

  const handleFunction = (e, type) => {
    if (type == "name") {
      let setData = { ...inputData, name: e.target.value }
      setInputData(setData)

    }
    if (type == "gender") {
      let setData = { ...inputData, gender: e.target.value }
      setInputData(setData)

    }
    if (type == "email") {
      let setData = { ...inputData, email: e.target.value }
      setInputData(setData)

    }

  }

  // console.log("postUserData", inputData)
  // console.log("post2UserData", inputData)


  return (
    <div>
      <Grid >
        <Paper elevation={10} className="paperStyle">
          <Grid align='center'>
            <h2> Add User Record</h2>
          </Grid>
          <br />

          Name : <br />
          <input type="text" placeholder="Full Name" value={inputData.name} onChange={(e) => { handleFunction(e, 'name') }} name="name" /> <br /> <br />
          Gender : <br />
          <input type="text" placeholder="Gender" value={inputData.gender} onChange={(e) => { handleFunction(e, 'gender') }} name="gender" /> <br /> <br />
          Email ID : <br />
          <input type="email" placeholder="Email ID" value={inputData.email} onChange={(e) => { handleFunction(e, 'email') }} name="email" /> <br /> <br />

          {show ?
            <button type='button' onClick={() => saveUser()}> Save User </button> :

            <button type='button' onClick={updateUser}> Update User </button>}

          {/* <button type='button' onClick={()=>togglebtn()}> {show ? 'Update User' : 'Add User'} </button> */}




        </Paper>
      </Grid>

    </div>
  )
}

export default Userrecord
