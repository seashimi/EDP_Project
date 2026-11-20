import './App.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const buttonclick = ()=> {
    if(username === actualusername && password === actualpassword) {
      alert("Logged in successfully")
      navigate("/home")
    } else {
      alert("Wrong credentials")
    }
    // My Solution
    // if(username != actualusername && password != actualpassword) {
    //   console.log(username, password)
    // } else {
    //   alert("Logged in successfully")
    // }
  }
  const actualusername = "admin"
  const actualpassword = "seashiewie"
return (
    <div className="App">
      <div className="App-header">
        <h1 className="script-title">Hello World.</h1>
        <h2 className="serif-name">My name is Sofia Paris Arrieta</h2>
        <h3 className="sub-tagline">This is my first React project</h3>

        <div className="login-box">
          <input 
            type="text" 
            placeholder="Username" 
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          <input 
            type="password" 
            placeholder="Password" 
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <button className="login-btn" onClick={buttonclick}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;