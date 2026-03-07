import React, { useContext } from 'react';
import { MoneyContex, MyContexs } from './Navbar';

const About = () => {
    const data = useContext(MyContexs)
    const [taka,setTaka] = useContext(MoneyContex)
    return (
        <div>
            <h1>{data}</h1>
             <button onClick={()=>setTaka(taka+100)}>Add Money</button>

        </div>
    );
};

export default About;