import react, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { name, username, email, phone, website} = user;
const onInputChange = e => {
 setUser({...user, [e.target.name] : e.target.value});
};

const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3005/users", user);
    navigate("/crud");
}
    return(
        <div className='container'>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Add A User</h2>
                
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group col-md-6 ">
                     <span> Name : </span>  <input type="text" className="form-control" 
                        placeholder="Enter your Name" name="name"  value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <br />
                    <div className="form-group col-md-6">
                    <span> Username : </span>   <input type="text" className="form-control"
                        placeholder="Enter your Username" name="username" value={username}
                        onChange={e => onInputChange(e)} />
                    </div>
                    <br />
                    <div className="form-group col-md-6">
                    <span> Email : </span>   <input type="email" className="form-control"
                        placeholder="Enter your E-mail Address" name="email" value={email}
                        onChange={e => onInputChange(e)} />
                    </div> <br />

                    <div className="form-group col-md-6">
                    <span> Phone : </span>  <input type="text" className="form-control"
                        placeholder="Enter your Phone Number" name="phone" value={phone} 
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <br />
                    <div className="form-group col-md-6">
                    <span> Website : </span>   <input type="text" className="form-control"
                        placeholder="Enter your Website Name" name="website" value={website} 
                        onChange={e => onInputChange(e)} />
                    </div>
                    <br />      

  

<button className="btn btn-primary btn-block"> Add User</button>
                </form> 
            </div>
        </div>
    )
}

export default AddUser;