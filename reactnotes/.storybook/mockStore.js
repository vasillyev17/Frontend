import rootReducer from '../src/redux/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: rootReducer,
});

export default store;
