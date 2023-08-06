import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../redux/notesSlice';
const NoteForm: React.FC = () => {
    const dispatch = useDispatch();
    const [noteName, setNoteName] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [noteCategory, setNoteCategory] = useState('Task');

    const handleSave = () => {
        if (noteName && noteContent && noteCategory) {
            dispatch(createNote({time: "", name: noteName, content: noteContent, category: noteCategory }));
            setNoteName('');
            setNoteContent('');
            setNoteCategory('Task');
        }
    };
    const handleCancel = () => {
        setNoteName('');
        setNoteContent('');
        setNoteCategory('Task');
    };

    return (
        <div>
            <input
                type="text"
                value={noteName}
                onChange={(e) => setNoteName(e.target.value)}
                placeholder="Note Name"
            />
            <input
                type="text"
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Note Content"
            />
            <select value={noteCategory} onChange={(e) => setNoteCategory(e.target.value)}>
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
            </select>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default NoteForm;
