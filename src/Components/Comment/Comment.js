import React, { useState, useEffect } from 'react';
import Commentdetails from '../Commentdetails/Commentdetails';


const Comment = (props) => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postid}`)
        .then(response => response.json())
        .then(data => setComments(data));

    },[props.postid])
    return (
        <div>
            {
                comments.map(comment => <Commentdetails comment ={comment}  ></Commentdetails>)
            }
            
        </div>
    );
};


export default Comment;