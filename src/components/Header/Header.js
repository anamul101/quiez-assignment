import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar bg-neutral text-neutral-content">
          
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case lg:text-4xl bg-violet-600 text-white lg:ml-20">Quiz Makers</Link>
            </div>
            <div className="flex-none">
                <NavLink to='/' className={({isActive})=>isActive?'font-semibold lg:text-xl text-violet-800 mr-4':'font-semibold lg:text-xl mr-4'}>Home</NavLink>
                <NavLink to='/statistics' className={({isActive})=>isActive?'font-semibold lg:text-xl text-violet-800 mr-4':'font-semibold lg:text-xl mr-4'}>Statistics</NavLink>
                <NavLink to='/blog' className={({isActive})=>isActive?'font-semibold lg:text-xl text-violet-800 mr-4':'font-semibold lg:text-xl lg:mr-20'}>Blog</NavLink>
            </div>
            
        </nav>
    );
};

export default Header;