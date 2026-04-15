import React from 'react'
import './Log.css';
import { Link } from "react-router-dom"

function Log() {
  return (
   
      <div className="container">
          <form className="login-box">
          {/* <label>Email : </label>  */}

           {/* <table border={1}> */}
          
          <input type='email' placeholder='Enter Email'/> 
          <br></br>
          {/* <label>Password : </label> */}
         <input type='password' placeholder='Enter Password'/>
         <br></br>

         <button type='submit'>Login</button>
        </form>
          </div>
       );
}
export default Log;

{/* // // export default Log
// // import { useState } from "react";
// // import "./Log.css";

// function Log() { */}
{/* // //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = (e) => { */}
// //     e.preventDefault();
// //     if (email === "admin@gmail.com" && password === "1234") {
// //       alert("Login Successful");
// //     } else {
// //       alert("Invalid Credentials");
// //     }
// //   };

//   return (
//     <div className="container">
//       <form className="login-box">
//         <h2>Login</h2>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           // value={email}
//           // onChange={(e) => setEmail(e.target.value)}
//         />
//         <br></br>
        

//         <input
//           type="password"
//           placeholder="Enter Password"
//           // value={password}
//           // onChange={(e) => setPassword(e.target.value)}
//         />
//         <br></br>

//         <button type="submit">Login</button>
//        <p className="register-text">
//           If you are not registered?{" "}
//           <Link to="/register">Register here</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Log;
