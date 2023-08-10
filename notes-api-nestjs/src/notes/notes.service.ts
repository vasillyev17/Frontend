import { Injectable } from '@nestjs/common';
import { NotesRepository } from './notes.repository';
import { Note } from 'src/models/note';
import { Stats } from '../models/stats';

@Injectable()
export class NotesService {
  constructor(private readonly notesRepository: NotesRepository) {}

  getAllNotes(): Note[] {
    return this.notesRepository.getAll();
  }

  getById(id: string): Note {
    return this.notesRepository.getById(id);
  }

  createNote(note: Note): Note {
    return this.notesRepository.create(note);
  }

  updateById(id: string, note: Note): Note {
    return this.notesRepository.updateById(id, note);
  }

  deleteById(id: string): boolean {
    return this.notesRepository.deleteById(id);
  }

  getStats(): Stats[] {
    return this.notesRepository.getStats();
  }
}
