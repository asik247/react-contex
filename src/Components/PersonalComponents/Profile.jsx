import React, { useContext } from 'react';
import { MyContext } from '../../main';

const Profile = () => {
    const [go,setGo] = useContext(MyContext)
    return (
        <div>
            <h1>profile page {go}</h1>
            <button onClick={()=>setGo(go+1000)}>Add Taka</button>
        </div>
    );
};

export default Profile;