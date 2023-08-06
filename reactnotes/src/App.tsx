import React from 'react';
import NotesPage from './containers/NotesPage';
import ArchivedNotesPage from './containers/ArchivedNotesPage';
import NoteSummaryPage from './containers/NoteSummaryPage';
import './style.css'

const App: React.FC = () => {
  return (
      <div>
        <h1>Notes</h1>
        <NotesPage />
        <hr />
        <ArchivedNotesPage />
        <hr />
        <NoteSummaryPage />
      </div>
  );
};

export default App;
