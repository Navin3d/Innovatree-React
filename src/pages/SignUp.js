import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Alert, Spinner } from 'reactstrap';
import { baseUrl } from "../utills/baseUrl.js";  
import catchErrors from "../utills/catchError.js";
 
const INITIAL_USER = {
    firstName: "",
    lastName: "",
    aadharNumber: "",
    email: "",
    password: "",
    phoneNumber: ""
}

const SignUp = () => {
  const [user, setUser] = useState(INITIAL_USER);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  let history = useHistory();
  const onDismiss = () => setError(false);

  useEffect(() => {
		const isUser = Object.values(user).every((el) => Boolean(el));
		isUser ? setDisabled(false) : setDisabled(true);
        document.title = "Sign-Up";
	}, [user]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			setError('');
			const url = `${baseUrl}/auth/signup`;
			const payload = { ...user };
			await axios.post(url, payload);
            history.push("/login")
		} catch (error) {
			catchErrors(error, setError);
            setError(error);
            console.log(error);
		} finally {
			setLoading(false);
		}
	};

  return (
    <div className="login-form">

      <Alert color='danger' isOpen={!!error} toggle={onDismiss}>
        {`${error}`}
      </Alert>

      <div class="centre">
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>

            <div class="text_field">
            {/* <label>Username</label><br/> */}
            <input onChange={handleChange} 
              value={user.firstName} 						
			  name='firstName' 
              type="text" 
              placeholder="First Name" required />
          </div>

          <div class="text_field">
            {/* <label>Username</label><br/> */}
            <input onChange={handleChange} 
              value={user.lastName} 						
			  name='lastName' 
              type="text" 
              placeholder="Last Name" required />
          </div>

          <div class="text_field">
            {/* <label>Username</label><br/> */}
            <input onChange={handleChange} 
              value={user.aadharNumber} 						
			  name='aadharNumber' 
              type="number" 
              placeholder="Aadhar Number" required />
          </div>

          <div class="text_field">
            {/* <label>Username</label><br/> */}
            <input onChange={handleChange} 
              value={user.email} 						
			  name='email' 
              type="email" 
              placeholder="Email" required />
          </div>

          <div class="text_field">
            {/* <label>Password</label><br/> */}
            <input onChange={handleChange} 
              value={user.password} 
              type="password" 
              name='password'
              placeholder="Password" required />
          </div>
          <div class="text_field">
            <input onChange={handleChange} 
              value={user.phoneNumber} 						
			  name='phoneNumber' 
              type="number" 
              placeholder="Phone Number" required />
          </div>

          <button disabled={disabled} className="button" type="submit" >
            Sign Up
            {loading ? <Spinner color='success' /> : ''}
          </button>

          <div class="Sign-Up">
            Have an account ?<a href="/login">Log-In</a>
          </div>

        </form>

      </div>
    </div>
  )
}

export default SignUp;
