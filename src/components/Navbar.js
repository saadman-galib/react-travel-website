import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container"></div>
                <Link to="/" className="navbar-logo">
                TRVL <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleclick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>

            </nav>
        </>
    )
}

export default Navbar
