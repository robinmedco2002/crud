import React, { useState, useMemo, useEffect, useContext } from 'react';
import './Home.css';
import NoteContext from '../context/notes/NoteContext';
import { getListing } from '../api/api';


function Home() {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(10);

  const [getArray, setGetArray] = useState([]);

  const [getUserValue, setUserValue] = useState([]);

  let testArray = [
    {
      "name": "Robin",
      "age": 30,
      "city": "New Delhi"
    },
    {
      "name": "Rahul",
      "age": 40,
      "city": "Mumbai"
    },
    {
      "name": "Shyam",
      "age": 42,
      "city": "goa"
    },
    {
      "name": "Ajay",
      "age": 22,
      "city": "Jaipur"
    }
  ];

  useEffect(() => {
    setGetArray(testArray)

  }, [])

  // console.log("GET EFFECT:", getArray)
  const reset = () => {
    setCount(1)
    setItem(10)
  }


  // function title() {
  //  console.log ("This is useMemo Example")
  //  {
  //    return 'UseMemo Example (Show in Console)'
  //  }
  // }

  const checkMemo = useMemo(function title() {
    console.log("This is useMemo Example")

    return 'UseMemo Example (Show in Console)'

  }, [count])


  const a = useContext(NoteContext);

  

// API Axios Call

useEffect (() => {
  getListing().then(resp => {
    console.log("object", resp)
    if(resp.data.data.length){
      setUserValue(resp.data.data)
    }
  }).catch(error => {
    console.log("error", error)
  })
}, [])

console.log("getUserValue", getUserValue)

  return (
   
    <div align='center'>
      <h1> </h1>
      <h3> UseState Example Count and Item</h3>
      <p> 1 + {count - 1} = {count} </p>
      <p> 10 x {item / 10} = {item} </p>
      <h5>  {checkMemo} </h5>

      <button onClick={() => setCount(count + 1)}> Add Number </button>
      <button onClick={() => setItem(item * 10)} > Item Multiply  </button>
      <button onClick={() => reset()} > Reset  </button>


<hr />

      <h2> useEffect Example </h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>

        {getArray && getArray.length && getArray.map(item => {
          return (
            <tr> 
            <td> {item.name} </td>
              <td> {item.age} </td>
              <td> {item.city} </td>
            </tr>
          )
        })}
      </table>
<hr /> 
{/* <h3> useContext Example </h3>
<p> useContext Name : {a.name} </p>
<p> useContext Class :  {a.class} </p> */}


<hr />
<h2> API Call Axios </h2>


<table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Email </th>
        </tr>

        {getUserValue && getUserValue.length && getUserValue.map(getitem => {
          return (
            <tr> 
            <td> {getitem.id} </td>
            <td> {getitem.name} </td>
            <td> {getitem.gender} </td>
            <td> {getitem.email} </td>
          
            </tr>
          )
        })}
      </table>

     </div>
  )
}

export default Home;
