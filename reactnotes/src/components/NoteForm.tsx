import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote, editNote, Note } from '../redux/notesSlice';

interface NoteFormProps {
    index?: number;
    note?: Note;
    onClose?: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ index, note, onClose }) => {
    const dispatch = useDispatch();
    const [currentNote, setCurrentNote] = useState({
        name: note?.name || '',
        content: note?.content || '',
        category: note?.category || 'Task'
    });

    const handleSave = () => {
        if (!index) {
            performAddNote();
        } else if (index) {
            const updatedNote = {
                ...currentNote,
                time: note?.time || '',
            };

            dispatch(editNote({index, updatedNote}));
        }
        handleCancel();
    };

    const performAddNote = () => {
        if (currentNote.name && currentNote.content && currentNote.category) {
            const currentDate = new Date();
            dispatch(createNote({
                time: currentDate.toString(),
                name: currentNote.name,
                content: currentNote.content,
                category: currentNote.category
            }));
        }
    }

    const handleCancel = () => {
        setCurrentNote({
            name: '',
            content: '',
            category: 'Task'
        });
        if (onClose) {
            onClose();
        }
    };

    return (
        <div>
            <input
                type='text'
                value={currentNote.name}
                onChange={(e) => setCurrentNote({ ...currentNote, name: e.target.value })}
                placeholder='Note Name'
            />
            <input
                type='text'
                value={currentNote.content}
                onChange={(e) => setCurrentNote({ ...currentNote, content: e.target.value })}
                placeholder='Note Content'
            />
            <select value={currentNote.category} onChange={(e) => setCurrentNote({ ...currentNote, category: e.target.value })}>
                <option value='Task'>Task</option>
                <option value='Random Thought'>Random Thought</option>
                <option value='Idea'>Idea</option>
            </select>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default NoteForm;
