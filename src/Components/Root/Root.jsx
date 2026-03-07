import React from 'react';
import Home from '../PersonalComponents/Home';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <h1>Ima Root</h1>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;