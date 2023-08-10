import React from 'react';
import NoteTable from '../components/NoteTable';
import NoteForm from '../components/NoteForm';

const NotesPage: React.FC = () => {
    return (
        <div>
            <h2>Notes</h2>
            <NoteTable isArchive={false}/>
            <NoteForm />
        </div>
    );
};

export default NotesPage;
