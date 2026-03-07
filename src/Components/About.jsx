import React, { useContext } from 'react';
import { MyContexs } from './Navbar';

const About = () => {
    const data = useContext(MyContexs)
    return (
        <div>
            <h1>{data}</h1>
        </div>
    );
};

export default About;