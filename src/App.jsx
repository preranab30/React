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




import React from 'react'
import Home from "./components/Home"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Nav from './components/nav'


const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
