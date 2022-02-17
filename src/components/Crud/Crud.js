import react, {useState, useEffect} from 'react';
import axios from "axios";
import '../css/css.css';
// import { Link } from '@material-ui/core';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Crud = ()=> {
    const[users, setUsers] = useState([]);

    useEffect(() => {
        crudUsers();       
    }, []);

    const crudUsers = async () => {
        const result = await axios.get("http://localhost:3005/users");
        console.log(result);
        setUsers(result.data.reverse())
    };

    const deleteUser = async id => {
      await axios.delete(`http://localhost:3005/users/${id}`)
      crudUsers();
    }
    return(
        <div className='cruddiv'>
<h1> Crud Example </h1>


<table class="table table-striped shadow">
  <thead class=" table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email ID</th>
      <th> Action </th>
    </tr>
  </thead>
  <tbody>

 { users.map((users, index) => (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{users.name}</td>
      <td>{users.username}</td>
      <td>{users.email}</td>
      <td >
      <Navbar.Brand className="btn btn-primary " as={Link} to={`/users/view/${users.id}`}>View</Navbar.Brand>
      <Navbar.Brand className="btn btn-success " as={Link} to={`/users/edit/${users.id}`}>Edit</Navbar.Brand>
      <Navbar.Brand className="btn btn-danger " onClick={() => deleteUser(users.id)} >Delete</Navbar.Brand>
  
     
        </td>
    </tr>
  ))}
    
    
  
  
  </tbody>
</table>

        </div>
    )
}

export default Crud;