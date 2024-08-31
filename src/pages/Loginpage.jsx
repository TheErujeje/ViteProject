import React from 'react'
import Login from '../components/Login'
import { Link } from 'react-router-dom'; 


function Loginpage() {
  return (<>
     <div>
        <Login />
     </div>
     <div>
     <Link to="/Signup"> Don't have an account?</Link>
     </div>
     <div>
      <Link to="/"> Home </Link>
     </div>
  </>
 
  )
}

export default Loginpage