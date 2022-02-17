import react from 'react';
import '../css/css.css';
import { Grid, Paper} from '@material-ui/core';


const Contact = () => {
    return(
        <>

<Grid>
            <Paper elevation={10} className="paperStyle">




<form>
<h1> Contact Us </h1>
<br />
  <div class="mb-3">
    <label for="exampleInputName" class="form-label"> Full Name</label>
    <input type="text" class="form-control" id="exampleInputName" />
  </div>
  
  <div class="mb-3">
    <label for="exampleInputMobile" class="form-label">Mobile No.</label>
    <input type="number" class="form-control" id="exampleInputMobile" />
  </div>


  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


</Paper>
</Grid>
        </>
    )
}

export default Contact;