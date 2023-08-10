import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import NoteTable from '../components/NoteTable';

const ArchivedNotesPage: React.FC = () => {
    const archivedNotes = useSelector((state: RootState) => state.notes.archivedNotes);

    return (
        <div>
            <h2 className="text-lg font-bold my-3">Archived</h2>
            {archivedNotes.length > 0 ? <NoteTable isArchive={true}/> : <p>No archived notes.</p>}
        </div>
    );
};

export default ArchivedNotesPage;
