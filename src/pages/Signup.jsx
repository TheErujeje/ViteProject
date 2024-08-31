import React from 'react'
import CreateUser from '../components/CreateUser'
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Signup() {
  return (<>
    <div className=''>
      <Header />
      <CreateUser />
      <Link to="/Login"> Already have an account?</Link>
      <Link to="/"> Home </Link>
    </div>
  </>

  )
}

export default Signup