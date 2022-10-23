import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'> 
    <h1>The Dojo Blog</h1>
    <div className='nav-links'>
        <a href='/'>Home</a>
        <a href='/create' style={{}}>New Blog</a>
    </div>
    </div>
  );
}

export default NavBar