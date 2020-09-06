import React, { useEffect, useState } from 'react';
import './Showpost.css';
import Showtitle from '../Showtitle/Showtitle';



const Showpost = () => {
    const [show, setShow] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setShow(data))
    },[])
    return (
        <div>
             {
                show.map(pt => <Showtitle 
                    key={pt.id}
                    post={pt}>
                    </Showtitle>)  
            }
        </div>
        
    );
};

export default Showpost;