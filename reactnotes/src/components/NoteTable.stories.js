import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/rootReducer';
import NoteTable from './NoteTable';

export default {
    title: 'Components/NoteTable',
    component: NoteTable,
    decorators: [
        (Story) => (
            <Provider store={createStore(rootReducer)}>
                <Story />
            </Provider>
        ),
    ],
};

export const Table = () => <NoteTable isArchive={false} />;
export const ArchiveTable = () => <NoteTable isArchive={true} />;
