import React, { useEffect, useState } from 'react'
import { getComments, addComments, updateComments, deleteComments } from '../services/CommentService'
import EditableComment from './EditableComment';
import AddCommentForm from './AddCommentForm'


const CommentList = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getComments();
                setComments(response);
            } catch (error) {
                console.error("Failed to fetch comments:", error);
            }
        }
        fetchData();
    }, [])

    const handleEdit = async(id, newCommentData) => {
        try {
            const updatedComment = await updateComments(id, newCommentData);
            setComments(comments.map(comment => comment.id === id ? updatedComment : comment)); 
          } catch (error) {
            console.error("Failed to edit comment:", error);
        } 

    }

    const handleAdd = async(newCommentData) => {
        try {
            const newComment = await addComments(newCommentData);
            setComments([...comments, newComment]);
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    }

    const handleDelete = async(id) => {
        try {
            await deleteComments(id);
            setComments(comments.filter(comment => comment.id !== id)); 
          } catch (error) {
            console.error("Failed to delete comment:", error);
          } 
    }

    return (
        <div className="comments-container">
            {/* {comments.map(comment => (
                <div key={comment.id} className='comments'>
                    <img src = {comment.image? comment.image : noImage} alt = "Comment" className="comment-image"/>
                    <div className='comment-content'>             
                        <p className="comment-author">Author: {comment.author}</p>
                        <p className="comment-date">Date: {new Date(comment.date).toLocaleString()}</p>
                        <p>{comment.text}</p>
                        <p className="comment-likes">Likes: {comment.likes}</p>
                    </div>               
                </div>           
            ))} */}
            <AddCommentForm onAddComment={handleAdd} />
            {comments.map((comment) => (                 
                <EditableComment
                    key={comment.id}
                    comment={comment}
                    onUpdateComment={handleEdit}
                    onDeleteComment={handleDelete}
                />
            ))}
        </div>
    )
}

export default CommentList;
