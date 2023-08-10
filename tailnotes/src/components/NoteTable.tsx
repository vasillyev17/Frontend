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
        <table className="table-auto border-collapse border border-slate-400">
            <thead>
            <tr className="bg-teal-300 text-white text-center h-10">
                <th className="border border-slate-300">Name</th>
                <th className="border border-slate-300">Created</th>
                <th className="border border-slate-300">Category</th>
                <th className="border border-slate-300">Content</th>
                <th className="border border-slate-300 w-32">Dates</th>
                <th className="border border-slate-300 w-32">Actions</th>
            </tr>
            </thead>
            <tbody>
            {notes.map((note, index) => (
                <tr key={index} className="hover:bg-teal-50 h-10">
                    <td className="border border-slate-300 p-3">{note.name}</td>
                    <td className="border border-slate-300 p-3">{new Date(note.time).toLocaleString()}</td>
                    <td className="border border-slate-300 p-3">{note.category}</td>
                    <td className="border border-slate-300 p-3">{note.content}</td>
                    <td className="border border-slate-300 p-3">{getDatesMentioned(note.content)}</td>
                    {
                        isArchive ?
                            <td className="border border-slate-300 p-3">
                                <button onClick={() => handleUnarchive(index)}><i className="bi bi-box-arrow-up" /></button>
                            </td>
                            :
                            <td className="border border-slate-300 p-3">
                                {editIndex === index ? (
                                    <NoteForm
                                        index={index}
                                        note={note}
                                        onClose={handleEditFormClose}
                                    />
                                ) : (
                                    <div>
                                        <button onClick={() => handleEdit(index)}><i className="bi bi-pencil" /></button>
                                        <button className="mx-3" onClick={() => handleRemove(index)}><i className="bi bi-trash" /></button>
                                        <button onClick={() => handleArchive(index)}><i className="bi bi-archive" /></button>
                                    </div>
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
