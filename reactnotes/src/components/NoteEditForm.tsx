import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote } from '../redux/notesSlice';
import { Note } from '../redux/notesSlice';
interface NoteEditFormProps {
    index: number;
    note: Note;
    onClose: () => void;
}

const NoteEditForm: React.FC<NoteEditFormProps> = ({ index, note, onClose }) => {
    const dispatch = useDispatch();
    const [editedNote, setEditedNote] = useState({
        name: note.name,
        content: note.content,
        category: note.category,
    });
    const handleEdit = () => {
        if (editedNote.name && editedNote.content && editedNote.category) {
            const updatedNote = {
                ...editedNote,
                time: note.time, // Include the 'time' property
            };

            dispatch(editNote({ index, updatedNote }));
            onClose();
        }
    };

    return (
        <div>
            <input
                type="text"
                value={editedNote.name}
                onChange={(e) => setEditedNote({ ...editedNote, name: e.target.value })}
                placeholder="Note Name"
            />
            <input
                type="text"
                value={editedNote.content}
                onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}
                placeholder="Note Content"
            />
            <select
                value={editedNote.category}
                onChange={(e) => setEditedNote({ ...editedNote, category: e.target.value })}
            >
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
            </select>
            <button onClick={handleEdit}>Save</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default NoteEditForm;
