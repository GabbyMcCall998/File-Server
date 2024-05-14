
import React, { useState } from 'react';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {

    const [menu,setMenu] = useState("Home");



    return (  
        <div className='Navbar'>
            <div className='brand'>
                <p>PaperTrail</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("file")}}>Files{menu==="file"?<hr/>:<></>}</li>
                <div className='search-container'>
                <form  className='search' action="/search" method="get">
                    <div className="search-wrapper">
                    <input  type="text" placeholder="Search..." name="search" />
                    <button type="submit">Search</button>
                    </div>
                </form>
            </div>
            </ul>
            <div className='login-button'>
                <button>Login</button>
            </div>
        </div>
    );
}
export default Navbar;