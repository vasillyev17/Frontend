import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from '../models/note';
import { Stats } from '../models/stats';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAllNotes(): Note[] {
    return this.notesService.getAllNotes();
  }

  @Get(':id')
  getNoteByID(@Param('id') id: string): Note {
    return this.notesService.getById(id);
  }

  @Post()
  createNote(@Body() note: Note): Note {
    if (note.time && note.name && note.content && note.category) {
      return this.notesService.createNote(note);
    } else {
      throw new NotFoundException({
        errorCode: '500',
        message: 'Not all data was provided',
      });
    }
  }

  @Patch(':id')
  modifyNote(@Param('id') id: string, @Body() updateNote: Note): Note {
    if (
      updateNote.time &&
      updateNote.name &&
      updateNote.content &&
      updateNote.category
    ) {
      return this.notesService.updateById(id, updateNote);
    } else {
      throw new NotFoundException({
        errorCode: '500',
        message: 'Not all data was provided',
      });
    }
  }

  @Delete(':id')
  removeNote(@Param('id') id: string): void {
    if (this.notesService.deleteById(id)) {
      return;
    } else {
      throw new NotFoundException({
        errorCode: '500',
        message: "Note wasn't found",
      });
    }
  }

  @Get()
  getStats(): Stats[] {
    return this.notesService.getStats();
  }
}
