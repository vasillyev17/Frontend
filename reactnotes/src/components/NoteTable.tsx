import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { archiveNote, removeNote, unarchiveNote } from '../redux/notesSlice'
import NoteForm from './NoteForm';

interface NoteTableProps {
    isArchive: boolean;
}

const NoteTable: React.FC<NoteTableProps> = ({ isArchive }) => {
    const dispatch = useDispatch();
    const notes = useSelector((state: RootState) => isArchive ? state.notes.archivedNotes : state.notes.notes);

    const [editIndex, setEditIndex] = useState(-1);

    const handleEdit = (index: number) => {
        setEditIndex(index);
    };

    const handleEditFormClose = () => {
        setEditIndex(-1);
    };
    const handleArchive = (index: number) => {
        dispatch(archiveNote(index));
    };

    const handleUnarchive = (index: number) => {
        dispatch(unarchiveNote(index));
    };

    const handleRemove = (index: number) => {
        dispatch(removeNote(index));
    };

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Created</th>
                <th>Category</th>
                <th>Content</th>
                <th>Dates</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {notes.map((note, index) => (
                <tr key={index}>
                    <td>{note.name}</td>
                    <td>{new Date(note.time).toLocaleString()}</td>
                    <td>{note.category}</td>
                    <td>{note.content}</td>
                    <td>{getDatesMentioned(note.content)}</td>
                    {
                        isArchive ?
                            <td>
                                <button onClick={() => handleUnarchive(index)}>Unarchive</button>
                            </td>
                            :
                            <td>
                                {editIndex === index ? (
                                    <NoteForm
                                        index={index}
                                        note={note}
                                        onClose={handleEditFormClose}
                                    />
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(index)}>Edit</button>
                                        <button onClick={() => handleRemove(index)}>Remove</button>
                                        <button onClick={() => handleArchive(index)}>Archive</button>

                                    </>
                                )}
                            </td>
                    }
                </tr>
            ))}
            </tbody>
        </table>
    );
};

function getDatesMentioned(content: string) {
    const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    const dates = content.match(datePattern);
    return dates ? dates.join(', ') : '';
}

export default NoteTable;
