import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '10px 20px',
  };
  const linkStyle = {
    margin: '0 15px',
     color:'#913831',
     opacity:'0.8',
     fontWeight:'600',
    textDecoration: 'none',
  };
  const buttonStyle = {
    marginRight: '10px',
    padding: '5px 10px',
    border: '1px solid #913831',
    backgroundColor: 'tomato',
     color:'#913831',
     opacity:'0.8',
     fontWeight:'600',
    cursor: 'pointer',
  };
  const dropdownMenuStyle = {
    position: 'absolute',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    display: 'none',
    zIndex: 1,
  };
  return (
    <nav style={navStyle}>
      <a href="#" style={{ fontSize: '24px', fontWeight: 'bold',textDecoration:'none',color:'#913831' }}>WatchVerse</a>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/' style={linkStyle}>Home</Link>
        <Link to='/products' style={linkStyle}>Products</Link>
        {/* <Link to='/contact' style={linkStyle}>Contact</Link> */}
        <Link to='/about' style={linkStyle}>About Us</Link>
       
        
      </div>
      <Link to='/login' style={linkStyle}>Login</Link>
    </nav>
  );
};

export default Navbar;
