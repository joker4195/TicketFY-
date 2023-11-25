import React from 'react'
import NavbarComp from '../components/NavbarComp'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
function login() {
  return (
    <div>
      <NavbarComp></NavbarComp>
      
      <div className='page'>
        <LoginForm></LoginForm>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default login