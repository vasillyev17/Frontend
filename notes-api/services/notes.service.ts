import NotesRepository from '../repositories/notes.repository';

class NotesService {
	private notesRepository: NotesRepository;
	
	constructor() {
		this.notesRepository = new NotesRepository();
	}
	
	getAllNotes() {
		return this.notesRepository.getAll();
	}
	
	createNote(note: any) {
		return this.notesRepository.create(note);
	}
	
	getNoteById(id: string) {
		return this.notesRepository.getById(id);
	}
	
	updateNoteById(id: string, updatedNote: any) {
		return this.notesRepository.updateById(id, updatedNote);
	}
	
	deleteNoteById(id: string) {
		return this.notesRepository.deleteById(id);
	}
	
	getStats() {
		return this.notesRepository.getStats();
	}
}

export default NotesService;
