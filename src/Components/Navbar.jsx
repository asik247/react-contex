import React, { createContext } from 'react';
import Footer from './Footer';


// Simple Contex create code start here;

export const MyContexs = createContext('');

const Navbar = () => {
    const name = "Asik"
    return (
        <div>
            <h1>Iam Navbar code</h1>
         <MyContexs.Provider value={name}>
            <Footer></Footer>
         </MyContexs.Provider>
        </div>
    );
};

export default Navbar;