// import './App.css'
// import Greeting from './components/Greeting'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Home from './components/Home'

// import About from './components/About'
// import Login from './components/Login'
//  import Nav from './components/nav'

// function App() {
//   return (
  
//    <div>
// //     {/* <h1>hii</h1>
// //     <Greeting/>
// //     <ClassComponentEx/> */}
// //     {/* <nav/> */}
//  {/* <Nav/> */}
//     <Router>
     
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//     </div>
//   )
// }

// export default App




//import React from 'react'
// import Home from "./components/Home"
// import Login from "./components/Login"
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
// import Nav from './components/nav'


// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Nav/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Login" element={<Login/>}/>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

//export default App

// import React from 'react'
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
// import Log from './components/Log';

// function App() {
//   return (
//     <div>
//        <Router>
//       <Routes>
//         <Route path="/" element={<Log />} />
//         {/* <Route path="/register" element={<Register />} /> */}
//       </Routes>
//     </Router>
  
      
//     </div>
//   )
// }

// export default App
// import Log from "./components/Log";

// function App() {
//   return (
//     <div>
//       <Log />
//     </div>
//   );
// }

// export default App;
import React from 'react'
// import ParentComp from "./components/ParentComp"
// import Login from './components/Login1';
// import  Form1 from './components/Form1';
// import LoginForm from './components/LoginForm'
import Bootstrap from './components/Bootstrap'
import ComponentA from './components/ComponentA'

function App() {
  return (
    <div>
       {/* {/* <ParentComp/>
       <Log/> */}
       {/* <Login/> */}
       {/* <h1>Registration Form</h1>
       <LoginForm/>  */}
       {/* <Bootstrap/> */}
       <ComponentA/>
      
    </div>
   
  )
}

export default App

// import './App.css';
// import Axios from 'axios';
// import { useState } from 'react';

// function App() {
//     const [artist, setArtist] = useState("");
//     const [song, setSong] = useState("");
//     const [lyrics, setLyrics] = useState("");

//     function searchLyrics() {
//         if (artist === "" || song === "") {
//             return;
//         }
//         Axios.get(
// `https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
//             console.log(res.data.lyrics);
//             setLyrics(res.data.lyrics);
//         })
//     }

//     return (
//         <div className="App">
//             <h1>Lyrics Finder ????</h1>

//             <input className="inp" type="text" 
//                 placeholder='Artist name'
//                 onChange={(e) => { setArtist(e.target.value) }} />
//             <input className="inp" type="text" 
//                 placeholder='Song name'
//                 onChange={(e) => { setSong(e.target.value) }} />
//             <button className="btn" 
//                 onClick={() => searchLyrics()}>
//                     ???? Search</button>
//             <hr />
//             <pre>{lyrics}</pre>
//         </div>
//     );
// }

// export default App;





