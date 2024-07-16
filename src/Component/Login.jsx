import { useState } from "react";
import "./Register.css"

import { useNavigate } from "react-router-dom";



export default function Register() {

  let navigate=useNavigate()

  // let [password, setPass] = useState("");
  let [passErr, setPassErr] = useState(false);


  // let setPassword = () => {
  //   setPass(password);
  // };


  let passwordHandler = (e) => {
    if (e.target.value.length < 8) setPassErr(true);
    else setPassErr(false);
  };

  let loginHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Login..?</h1>

      <div className="app">
        <form onSubmit={loginHandler}>

        <label>
            Username : 
        </label>
        <input type="text" placeholder="Enter your name " required className="inp"/>

<br /><br />
          <label>
            Password :
          </label>

          <input type="password" placeholder="Enter password" required  onChange={passwordHandler}></input>
            <span>{passErr ? <p>Invalid Password</p> : null}</span>
    <br />

          <button type="submit" id="btn" onClick={()=>navigate("/home")}>
           Login
          </button>
        </form>
      </div>
    </>
    
  );
}
