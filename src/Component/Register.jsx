import { useState } from "react";
import "./Register.css"
// import { useNavigate } from "react-router-dom";

export default function Register() {

  // let navigate=useNavigate()

  // let [password, setPass] = useState("");
  let [passErr, setPassErr] = useState(false);
  let [emailErr, setEmailErr] = useState(false);

  // let setPassword = () => {
  //   setPass(password);
  // };

  let validate = (e) => {
    let email = e.target.value;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      setEmailErr(true);
    else setEmailErr(false);
  };

  let passwordHandler = (e) => {
    if (e.target.value.length < 8) setPassErr(true);
    else setPassErr(false);
  };

  let loginHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Register ..?</h1>

      <div className="app">
        <form onSubmit={loginHandler}>

        <label>
            Name : 
        </label>
        <input type="text" placeholder="Enter your name " required className="inp"/>

<br /><br />
          <label>
            Email :
          </label>

          <input type="text" placeholder="Enter E-mail" required className="inp" onChange={validate}></input><br></br>
            <span>{emailErr ? <p>Invalid Email</p> : null}</span>
          <br></br>
      

          <label>
            Password :

          </label>

          <input type="password" placeholder="Enter password" required className="inp" onChange={passwordHandler}></input>
            <span>{passErr ? <p>Invalid Password</p> : null}</span>
    <br />

          <button type="submit" id="btn" onClick={()=>alert("Register Successfully...!")}>
           Register
          </button>
        </form>
      </div>
    </>
  );
}
