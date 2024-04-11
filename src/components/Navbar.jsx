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
                        <li><Link to="/" className="i">Home</Link></li>
                        <li><Link to="/about" className="i">about</Link></li>
                        <li><Link to="/myproj" className="i">myproj</Link></li>
                        <li><Link to="/contact" className="i">contact </Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
export default Navbar;