import React from 'react';
import NotesPage from './containers/NotesPage';
import ArchivedNotesPage from './containers/ArchivedNotesPage';
import NoteSummaryPage from './containers/NoteSummaryPage';
import './style.css'

const App: React.FC = () => {
  return (
      <div className="m-5">
        <h1 className="font-bold text-3xl text-center">Notes</h1>
        <NotesPage />
        <hr className="my-3" />
        <ArchivedNotesPage />
        <hr className="my-3" />
        <NoteSummaryPage />
      </div>
  );
};

export default App;
