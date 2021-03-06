import React from 'react';

import './CommentList.scss';
import avatar from '../AddComments/hacker-avatar.png'


 function CommentList(props) {
    const commentList = props.comments.map( comment => {
        return (
            <div className="comment-list-container" key={comment.id}>
                <img
                    className="comment-list-container__avatar"
                    src={avatar}
                    alt="avatar"
                    style={{width:'60px', paddingRight:'10px', paddingTop:'10px'}}
                />
                <div className="comment-list-container__comment">
                    <p>{comment.name} | {comment.id}</p>
                    <div>{comment.comment}</div>
                </div>
            </div>
        )

    })
    return <div>{commentList}</div>
}
export default CommentList
