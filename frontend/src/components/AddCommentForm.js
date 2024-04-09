import React, { useState } from 'react';

const AddCommentForm = ( {onAddComment} ) => {
    const [text, setText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newComment = {
            author: "Admin", 
            text: text,
            date: new Date().toISOString(),
        };
        onAddComment(newComment);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder='Enter comment here...'
            />
            <button type="submit">Submit</button>
        </form>
    )

}

export default AddCommentForm;