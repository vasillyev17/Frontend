import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AppThunk} from "./store";


let notes = [
    {
        time: '2023-08-01T12:00:00',
        name: "Shirts",
        content: "send old shirts to charity.",
        category: "Random Thought",
    },
    {
        time: '2023-08-02T10:00:00',
        name: "Washing",
        content: "Take pijamas from washing machine.",
        category: "Task",
    },
    {
        time: '2023-08-03T10:00:00',
        name: "Water",
        content: "Buy some water.",
        category: "Idea",
    },
    {
        time: '2023-08-04T11:00:00',
        name: "Dinner",
        content: "make a diner using new reciept.",
        category: "Idea",
    },
    {
        time: '2023-08-05T12:00:00',
        name: "Sports",
        content: "Do some run training on 5/8/2023.",
        category: "Task",
    },
    {
        time: '2023-08-06T13:00:00',
        name: "Dog",
        content: "Feed dog tomorrow.",
        category: "Task",
    },
    {
        time: '2023-08-07T14:00:00',
        name: "Interview",
        content: "set interview appointment from 5/8/2023 to 8/8/2023.",
        category: "Task",
    },
];

export interface Note {
    time: string;
    name: string;
    content: string;
    category: string;
    archivedDate?: string;
}

interface SummaryData {
    [category: string]: {
        active: number;
        archived: number;
    };
}

interface NotesState {
    notes: Note[];
    archivedNotes: Note[];
    summaryData: SummaryData;
}

const initialState: NotesState = {
    notes: notes,
    archivedNotes: [],
    summaryData: {
        "Task": { active: notes.filter((note) => note.category === 'Task').length, archived: 0 },
        "Random Thought": { active: notes.filter((note) => note.category === 'Random Thought').length, archived: 0 },
        "Idea": { active: notes.filter((note) => note.category === 'Idea').length, archived: 0 },
    },
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        createNote: (state, action: PayloadAction<Note>) => {
            state.notes.push(action.payload);
            state.summaryData[action.payload.category].active++;
        },
        archiveNote: (state, action: PayloadAction<number>) => {
            const noteToArchive = state.notes[action.payload];
            noteToArchive.archivedDate = new Date().toISOString();
            const category = noteToArchive.category;

            state.summaryData[category].active--;
            state.summaryData[category].archived++;

            state.archivedNotes.push(noteToArchive);
            state.notes.splice(action.payload, 1);
        },
        unarchiveNote: (state, action: PayloadAction<number>) => {
            const noteToUnarchive = state.archivedNotes[action.payload];
            noteToUnarchive.archivedDate = undefined;
            state.notes.push(noteToUnarchive);
            state.archivedNotes.splice(action.payload, 1);
            state.summaryData[noteToUnarchive.category].active++;
            state.summaryData[noteToUnarchive.category].archived--;
        },
        removeNote: (state, action: PayloadAction<number>) => {
            const noteToRemove = state.notes[action.payload];
            state.notes.splice(action.payload, 1);
            state.summaryData[noteToRemove.category].active--;
        },
        editNote: (state, action: PayloadAction<{ index: number; updatedNote: Note }>) => {
            const { index, updatedNote } = action.payload;
            state.notes[index] = { ...updatedNote };
        },
},
});

export const { createNote, archiveNote, unarchiveNote, removeNote, editNote } = notesSlice.actions;

export default notesSlice.reducer;

export const fetchInitialData = (): AppThunk => async (dispatch) => {
};

