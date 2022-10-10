import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar bg-neutral text-neutral-content">
          
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <NavLink to='/'>Home</NavLink>
            </div>
            
        </nav>
    );
};

export default Header;