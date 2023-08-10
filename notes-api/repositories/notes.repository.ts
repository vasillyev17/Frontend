import { Note } from '../helpers/note';
import { Stats } from '../helpers/stats';

class NotesRepository {
	async getAll() {
		return await Note.findAll();
	}
	
	async getById(id: string) {
		return await Note.findOne({
			where: {id: id}
		});
	}
	
	async create(note: any) {
		const notes = await this.getAll();
		note.id = (Math.max(...notes.map((note) => note.id)) || 0) + 1;
		return await Note.create(note);
	}
	
	async updateById(id: string, updatedNote: any) {
		let note = await this.getById(id);
		if (note) {
			note = { ...note, ...updatedNote };
			return note;
		}
	}
	
	async deleteById(id: string) {
		let note = await this.getById(id);
		if (note) {
			note.destroy();
		}
	}
	
	async getStats() {
		const notes = await this.getAll();
		const stats: Stats[] = [];
		['Idea', 'Task', 'Random Thought'].forEach(category => {
			stats.push({
				category,
				quantity: notes.filter(note => note.category === category).length,
			});
		});
		return stats;
	}
}

export default NotesRepository;
