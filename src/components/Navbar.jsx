import React from 'react';
import { Link } from "react-router-dom";
import './components.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <h3 className="img">JP</h3>
                <nav>
                    <ul className="link">
                        <li className="i"><Link to="/">Home</Link></li>
                        <li className="i"><Link to="/about" >about</Link></li>
                        <li className="i"><Link to="/myproj" >myproj</Link></li>
                        <li className="i"><Link to="/contact">contact </Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
export default Navbar;