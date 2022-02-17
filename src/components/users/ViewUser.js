import react, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ViewUser =() => {
    const {id} = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    useEffect(() => {
       loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3005/users/${id}` );
        setUser(result.data);
    }

    return(
       
        <div className='container'>
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4"> View User {user.name} and Id is {id}</h2>
            <hr />

            <ul className="list-group w-50">
            <li className='list-group-item'> Name : {user.name} </li>
            <li className='list-group-item'> User Name : {user.username} </li>
            <li className='list-group-item'> Email ID : {user.email} </li>
            <li className='list-group-item'> Phone : {user.phone} </li>
            <li className='list-group-item'> Website : {user.website} </li>
             </ul>

             <br />
            
        <Link className='btn btn-primary' to="/crud"> Back </Link> &nbsp;
        <Link className='btn btn-primary' to={`/users/edit/${user.id}`}> Edit </Link> &nbsp;
         </div>
    </div>
    )
}

export default ViewUser;