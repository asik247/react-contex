import React, { createContext, useState } from 'react';
import Footer from './Footer';


// Simple Contex create code start here;

export const MyContexs = createContext('');

export const MoneyContex = createContext();

const Navbar = () => {
    const name = "Asik"
    const [money, setMoney] = useState(0)
    return (
        <div>
            <h1>Iam Navbar code</h1>
            <MoneyContex value={[money,setMoney]}>
                <MyContexs.Provider value={name}>
                    <Footer></Footer>
                </MyContexs.Provider>
            </MoneyContex>
        </div>
    );
};

export default Navbar;