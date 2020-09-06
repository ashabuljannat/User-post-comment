import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Comment.css'

   const Comment = () => {

    const {comments} = useParams();
    const [PostComment, setPostComment] = useState([]);
    
    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${comments}` )
    .then(res => res.json())
    .then(data => setPostComment(data));
    }, []);

    return (
        <div>
            <h3> UserId : {comments}</h3>
            {    PostComment.map(comment =>
                (<div className='comment'>
                    <h3>Name : {comment.name}</h3>
                    <h4>User Comment : {comment.body}</h4>
                    <h4>User Email : {comment.email}</h4>
                </div>)
           )}
        </div>
    );
};

export default Comment;