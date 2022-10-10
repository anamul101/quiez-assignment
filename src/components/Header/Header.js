import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar bg-neutral text-neutral-content">
          
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Quiz Makers</Link>
            </div>
            <div className="flex-none">
                <NavLink to='/' className={({isActive})=>isActive?'font-semibold text-xl text-white mr-8':'font-semibold text-xl mr-8'}>Home</NavLink>
                <NavLink to='/statistics' className={({isActive})=>isActive?'font-semibold text-xl text-white mr-8':'font-semibold text-xl mr-8'}>Statistics</NavLink>
            </div>
            
        </nav>
    );
};

export default Header;