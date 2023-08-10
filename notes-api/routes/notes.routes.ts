import NotesService from '../services/notes.service';
import { validateNote } from '../helpers/validation';

const express = require('express');

const router = express.Router();
const notesService = new NotesService();

router.get('/', (req: any, res: any) => {
	const notes = notesService.getAllNotes();
	res.json(notes);
});

router.post('/', (req: any, res: any) => {
	const note = req.body;
	if (!validateNote(note)) {
		return res.status(400).json({ error: 'Invalid note format' });
	}
	const newNote = notesService.createNote(note);
	res.status(201).json(newNote);
});

router.get('/stats', (req: any, res: any) => {
	const stats = notesService.getStats();
	res.json(stats);
});

router.get('/:id', (req: any, res: any) => {
	const id = req.params.id;
	const note = notesService.getNoteById(id);
	if (!note) {
		return res.status(404).json({ error: 'Note not found' });
	}
	res.json(note);
});

router.patch('/:id', (req: any, res: any) => {
	const id = req.params.id;
	const updatedNote = req.body;
	if (!validateNote(updatedNote)) {
		return res.status(400).json({ error: 'Invalid note format' });
	}
	const note = notesService.updateNoteById(id, updatedNote);
	if (!note) {
		return res.status(404).json({ error: 'Note not found' });
	}
	res.json(note);
});

router.delete('/:id', (req: any, res: any) => {
	const id = req.params.id;
	const deleted = notesService.deleteNoteById(id);
	if (!deleted) {
		return res.status(404).json({ error: 'Note not found' });
	}
	res.status(204).send();
});

export default router;
