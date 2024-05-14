
import React from 'react';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
    return (  
        <div className='Navbar'>
            <div className='brand'>
                <p>PaperTrail</p>
            </div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Files</li>
                <div className='search-container'>
                <form  className='search' action="/search" method="get">
                    <div className="search-wrapper">
                    <input  type="text" placeholder="Search..." name="search" />
                    <button type="submit">Search</button>
                    </div>
                </form>
            </div>
                <li>Profile</li>
            </ul>
            <div className='login-button'>
                <button>Login</button>
            </div>
        </div>
    );
}
export default Navbar;