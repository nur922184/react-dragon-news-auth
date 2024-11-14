import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <header className='w-11/12 py-4 mx-auto'>
                <Navbar></Navbar>
                {/* <Login></Login> */}
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;