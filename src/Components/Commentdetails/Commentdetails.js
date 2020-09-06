import React, { useEffect, useState } from 'react';
// import img from '../img/userPic.png'
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const Commentdetails = (props) => {
    const { id, name, email, body } = props.comment;
    const [photo, setPhoto]= useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json())
            .then(data => setPhoto(data))
    })
const {url} = photo;
    return (
        <Container style={{borderBottom: '1px solid orange'}}>
            <h3> <Box color="warning.main">Commented Id : {id}</Box> </h3>
            <img src={url} alt="" style ={{width:'80px', height: '80px'}}/>
            <h4> Comment Name : {name} </h4>
            <p> Email : {email}</p>
            <p> Body : {body}</p>
        </Container>
    );
};

export default Commentdetails;