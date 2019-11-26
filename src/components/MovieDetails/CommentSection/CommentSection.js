import React from 'react';
import AddComment from './AddComments/AddComments';
import CommentList from './CommentList/CommentList';
import './CommentSection.scss';

function CommentSection(props) {
    return (
        <div className='comment-box-container'>
            <h4>Comments {props.comments.length > 10? 10+'+' : props.comments.length}</h4>
            <h5>Write a comment to help other poeple</h5>
            <AddComment addComment={props.addComment} />
            <CommentList comments={props.comments}/>
        </div>
    )
}

export default CommentSection
