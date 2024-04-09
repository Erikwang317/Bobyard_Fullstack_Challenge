import React, { useState } from 'react'
import noImage from '../assets/noImage.png'

const EditableComment = ({ comment, onUpdateComment, onDeleteComment }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(comment.text);

    const handleUpdate = () => {
        // console.log(editedText);
        onUpdateComment({...comment, text: editedText});
        setIsEditing(false);
    }

    return (
        <div className='comment-card'>     
            <img src = {comment.image? comment.image : noImage} alt = "comments" className='comment-image'/>        
            <p className="comment-author">Author: {comment.author}</p>
            <p className="comment-date">Date: {new Date(comment.date).toLocaleString()}</p>
            {isEditing ? (
                <input 
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
            ) : (
                <p>{comment.text}</p>
            )}
            <p className="comment-likes">Likes: {comment.likes}</p>
            <div className='comment-actions'>{isEditing? (
                <button onClick={handleUpdate}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
            <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
            </div>
        </div>              
    );
};

export default EditableComment;