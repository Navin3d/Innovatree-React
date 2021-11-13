import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Alert, Spinner } from 'reactstrap';
import { baseUrl } from "../utills/baseUrl.js";  
import { handleLogin } from "../utills/auth.js";
import catchErrors from "../utills/catchError.js";
 
const INITIAL_USER = {
  userName: "",
  password: ""
}

const Login = () => {
  let history = useHistory();
  const [user, setUser] = useState(INITIAL_USER);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const onDismiss = () => setError(false);

  useEffect(() => {
		const isUser = Object.values(user).every((el) => Boolean(el));
		isUser ? setDisabled(false) : setDisabled(true);
    document.title = "Login";
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
			const url = `${baseUrl}/auth/login`;
			const payload = { ...user };
			const response = await axios.post(url, payload);
			await handleLogin(response.headers);
      await history.push("/");
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
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <div class="text_field">
            {/* <label>Username</label><br/> */}
            <input onChange={handleChange} 
              value={user.userName} 						
						  name='userName' 
              type="text" 
              placeholder="Username" required />
          </div>

          <div class="text_field">
            {/* <label>Password</label><br/> */}
            <input onChange={handleChange} 
              value={user.password} 
              type="password" 
              name='password'
              placeholder="Password" required />
          </div>

          <button disabled={disabled} className="button" type="submit" >
            Login
            {loading ? <Spinner color='success' /> : ''}
          </button>

          <div class="Sign-Up">
            Don't have an account ?<a href="/signup"> Sign-Up</a>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Login;
