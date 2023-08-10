import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/rootReducer';
import NoteSummaryTable from './NoteSummaryTable';

export default {
    title: 'Components/NoteSummaryTable',
    component: NoteSummaryTable,
    decorators: [
        (Story) => (
            <Provider store={createStore(rootReducer)}>
                <Story />
            </Provider>
        ),
    ],
};

export const Default = () => <NoteSummaryTable />;
