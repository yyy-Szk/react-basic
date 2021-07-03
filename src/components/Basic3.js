import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../contexts/AppContext';

const Basic3 = () => {
    const [count, setCount] = useState(0);
    const value = useContext(AppContext);
    useEffect(() => {
        console.log('load');
    }, )
    
    return (
        <div>
            <button onClick={()=>{setCount(prev => prev + 1)}}>click</button>
            <h1>{count}</h1>
            <h1>{value}</h1>
        </div>
    )
}

export default Basic3
