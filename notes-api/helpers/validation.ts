import { Note } from './note';

export const validateNote = (note: Note) => {
	console.log(note);
	const isValidTime = (new Date(note.time)).toString() !== 'Invalid Date';
	if (note.name && note.time && note.category && note.content && note.time && isValidTime) {
		return true;
	}
	return false;
};