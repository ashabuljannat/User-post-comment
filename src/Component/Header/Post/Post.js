import React, { useState, useEffect } from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



    const Post = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => res.json())
      .then(data => setPost(data));
    }, []);

    return (
        <div className='posts'>
         {
            post.map( post => 
               <div>
                <h2><u>User Id : {post.id}</u> 
                <Link to={`/postDetails/${post.id}`}> See Post</Link></h2>
                <h4>Post Title : {post.title}</h4>
                <Link to={`/postComment/${post.id}`}>  <Button variant="outlined" color="lite" >
                View Comments
                </Button>
                </Link>
            </div>
            )
         }
        </div>
    );
};
export default Post;