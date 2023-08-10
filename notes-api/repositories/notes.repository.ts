import { Note } from '../helpers/note';
import { Stats } from '../helpers/stats';

class NotesRepository {
	private notes: Note[] = [
		{
			id: 1,
			time: '2023-08-01T12:00:00',
			name: 'Shirts',
			content: 'send old shirts to charity.',
			category: 'Random Thought',
		},
		{
			id: 2,
			time: '2023-08-02T10:00:00',
			name: 'Washing',
			content: 'Take pijamas from washing machine.',
			category: 'Task',
		},
		{
			id: 3,
			time: '2023-08-03T10:00:00',
			name: 'Water',
			content: 'Buy some water.',
			category: 'Idea',
		},
		{
			id: 4,
			time: '2023-08-04T11:00:00',
			name: 'Dinner',
			content: 'make a diner using new reciept.',
			category: 'Idea',
		},
		{
			id: 5,
			time: '2023-08-05T12:00:00',
			name: 'Sports',
			content: 'Do some run training on 5/8/2023.',
			category: 'Task',
		},
		{
			id: 6,
			time: '2023-08-06T13:00:00',
			name: 'Dog',
			content: 'Feed dog tomorrow.',
			category: 'Task',
		},
		{
			id: 7,
			time: '2023-08-07T14:00:00',
			name: 'Interview',
			content: 'set interview appointment from 5/8/2023 to 8/8/2023.',
			category: 'Task',
		},
	];
	
	getAll() {
		return this.notes;
	}
	
	getById(id: string) {
		return this.notes.find(note => note.id === +id);
	}
	
	create(note: any) {
		note.id = (Math.max(...this.notes.map((note) => note.id)) || 0) + 1;
		this.notes.push(note);
		return note;
	}
	
	updateById(id: string, updatedNote: any) {
		const index = this.notes.findIndex(note => note.id === +id);
		if (index !== -1) {
			this.notes[index] = { ...this.notes[index], ...updatedNote };
			return this.notes[index];
		}
		return null;
	}
	
	deleteById(id: string) {
		const index = this.notes.findIndex(note => note.id === +id);
		if (index !== -1) {
			this.notes.splice(index, 1);
			return true;
		}
		return false;
	}
	
	getStats() {
		const stats: Stats[] = [];
		['Idea', 'Task', 'Random Thought'].forEach(category => {
			stats.push({
				category,
				quantity: this.notes.filter(note => note.category === category).length,
			});
		});
		return stats;
	}
}

export default NotesRepository;
