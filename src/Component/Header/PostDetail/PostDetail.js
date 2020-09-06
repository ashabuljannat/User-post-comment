import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css'

const PostDetail = () => {

const {detail} = useParams();
const [details, setDetails] = useState({});

useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/posts/${detail}` )
.then(res => res.json())
.then(data => setDetails(data));
},[]);


    return (
        <div className='postDetails'>
            <h3> Id : {detail}</h3>
            <h3>Post Title : {details.title}</h3>
            <h4>Post Details : {details.body}</h4> 
        </div>
    );
};

export default PostDetail;