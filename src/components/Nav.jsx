import { Link } from "react-router-dom";
import React from "react";
function Nav(){
    return (
          
        <nav style={{gap:"20px",backgroundColor:"lightpink", backgroundSize:"2+"}}>
      
            
                <Link to='/' style={{color:"brown",marginRight:"10px"}}>Home</Link>
              
            
                <Link to='/login' style={{color:"brown", marginRight:"20px"}}>Login</Link>
               

    
        </nav>
            
    );
}
export default Nav;