import React, { useContext } from 'react';
import { MyContext } from '../../main';

const Profile = () => {
    const nameContexValue = useContext(MyContext)
    return (
        <div>
            <h1>profile page {nameContexValue}</h1>
        </div>
    );
};

export default Profile;