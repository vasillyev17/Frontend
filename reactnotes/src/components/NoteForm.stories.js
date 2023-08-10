import React from 'react';
import NoteForm from './NoteForm';
import rootReducer from '../redux/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default {
    title: 'Components/NoteForm',
    component: NoteForm,
    decorators: [
        (Story) => (
            <Provider store={createStore(rootReducer)}>
                <Story />
            </Provider>
        ),
    ],
};

export const Default = () => <NoteForm />;
