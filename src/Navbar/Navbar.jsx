import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Doctors</Link></li>
            <li><Link to="/">About us</Link></li>
            <li><Link to="/">Contact us</Link></li>
            <li><Link to="/">Dashboard</Link></li>
        </>

    return (
        <>
            <div className="navbar max-w-screen-3xl mx-auto font-semibold text-black lg:px-10 lg:py-10 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div>
                        <p className="lg:ms-36 lg:text-2xl  bg px-2 py-2 rounded-lg font-serif font-semibold ms-3 "> <span className='text-[#4200FF]'>Lilypad</span> Hospital</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-end lg:me-36">
                    {/* <img className="w-16 h-16 rounded-full" alt="" /> */}
                    <Link to="/"><button className='px-6 py-1 rounded-lg me-4 lg:me-7 bg-[#4200FF] text-white'>SingIn</button></Link>
                    <Link className='border-2 border-[#4200FF] px-6 py-1 rounded-lg' to='/'>SignUp</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;