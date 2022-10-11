import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar bg-neutral text-neutral-content">
          
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-2xl bg-violet-600 text-white">Quiz Makers</Link>
            </div>
            <div className="flex-none">
                <NavLink to='/' className={({isActive})=>isActive?'font-semibold text-xl text-white mr-4':'font-semibold text-xl mr-4'}>Home</NavLink>
                <NavLink to='/statistics' className={({isActive})=>isActive?'font-semibold text-xl text-white mr-4':'font-semibold text-xl mr-4'}>Statistics</NavLink>
                <NavLink to='/blog' className={({isActive})=>isActive?'font-semibold text-xl text-white mr-4':'font-semibold text-xl mr-4'}>Blog</NavLink>
            </div>
            
        </nav>
    );
};

export default Header;