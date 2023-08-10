import React from 'react';
import NoteTable from '../components/NoteTable';
import NoteForm from '../components/NoteForm';

const NotesPage: React.FC = () => {
    return (
        <div>
            <h2 className="text-lg font-bold my-3">Notes</h2>
            <NoteTable isArchive={false}/>
            <NoteForm />
        </div>
    );
};

export default NotesPage;
