import React, { useState, useEffect } from 'react';

export const EditTodo = ({ todoToEdit, updateTodo, onCancel }) => {
    const [title, setTitle] = useState(todoToEdit ? todoToEdit.title : '');
    const [description, setDescription] = useState(todoToEdit ? todoToEdit.description : '');

    useEffect(() => {
        setTitle(todoToEdit ? todoToEdit.title : '');
        setDescription(todoToEdit ? todoToEdit.description : '');
    }, [todoToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTodo = {
            ...todoToEdit,
            title,
            description,
        };
        updateTodo(updatedTodo);
    };

    return (
        <div className='container mt-3'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn btn-primary">
                    Save Changes
                </button>
                <button type="button" className="btn btn btn-secondary ms-2" onClick={onCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

