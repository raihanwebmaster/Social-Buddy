import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './Postdetails.css'
import { Container } from '@material-ui/core';


const Postdetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [postId])
    const { title, body } = post;
    return (
        <>
            <div>
                <Container className="view">
                    <h3>Title : {title}</h3>
                    <h4 style={{color: 'white'}}> Status : {body}</h4>
                    
                </Container>
            </div>
            <div>
                <Comment postid={postId}></Comment>
            </div>
        </>
    );
};

export default Postdetails;
