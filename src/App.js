
import './App.css';
import NavbarComp from './components/Navbar/NavbarComp';



import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Userrecord from './components/user/Userrecord';
import Contact from './components/Contact/Contact';
import Crud from './components/Crud/Crud';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';

function App() {
  return (
   <>
   <Router> 

   <NavbarComp />

   <Routes> 
   <Route path="/" element={<Login /> } />
   <Route path="/login" element={<Login />} />
   <Route path="/signup" element={<Signup />} />
   <Route path="/user" element={<Userrecord />} />
   <Route path="/contact" element={<Contact /> } />
   <Route path="/crud" element={<Crud /> } />

   <Route path="/users/add" element={ <AddUser /> } /> 
   <Route path="/users/edit/:id" element={<EditUser />} /> 
   <Route path="/users/view/:id" element={<ViewUser />} />  
   </Routes>
    

     </Router>
   </>
  );
}

export default App;
