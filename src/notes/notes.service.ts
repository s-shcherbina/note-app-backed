import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { StorageService } from 'src/storage/storage.service';
import { v4 } from 'uuid';
import { AppError } from 'src/common/errors';
import { categories, months } from 'src/common/moks';

@Injectable()
export class NotesService {
  constructor(private readonly storageService: StorageService) {}

  findNoteById(id: string) {
    const existNote = this.storageService.notes.find((note) => id === note.id);
    if (!existNote) throw new BadRequestException(AppError.NOTE_IS_NOT_EXIST);

    return existNote;
  }

  sumNotes(category: string, archived: boolean) {
    return this.storageService.notes
      .filter((note) => note.category === category)
      .filter((note) => note.archived === archived).length;
  }

  create(createNoteDto: CreateNoteDto) {
    if (!categories.find((category) => category === createNoteDto.category))
      throw new BadRequestException(AppError.CATEGORY_IS_NOT_EXIST);
    this.storageService.notes.push({
      ...createNoteDto,
      id: v4(),
      date: `${
        months[new Date().getMonth()]
      } ${new Date().getDate()}, ${new Date().getFullYear()}`,

      dates: '',
      archived: false,
    });
    return this.storageService.notes;
  }

  remove(id: string) {
    const noteForDelete = this.findNoteById(id);

    this.storageService.notes.splice(
      this.storageService.notes.indexOf(noteForDelete),
      1,
    );

    return this.storageService.notes;
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    const noteForUpdate = this.findNoteById(id);

    noteForUpdate.name = updateNoteDto.name;
    noteForUpdate.dates = `${noteForUpdate.date.slice(
      noteForUpdate.date.indexOf(' '),
      noteForUpdate.date.indexOf(','),
    )}/${
      months.indexOf(
        noteForUpdate.date.slice(0, noteForUpdate.date.indexOf(' ')),
      ) + 1
    }/${noteForUpdate.date.slice(
      noteForUpdate.date.indexOf(',') + 2,
    )}, ${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`;

    noteForUpdate.date = `${
      months[new Date().getMonth()]
    } ${new Date().getDate()}, ${new Date().getFullYear()}`;

    noteForUpdate.category = updateNoteDto.category;
    noteForUpdate.content = updateNoteDto.content;
    noteForUpdate.archived = updateNoteDto.archived;

    return noteForUpdate;
  }

  getStats() {
    const stats = categories.map((category) => {
      return {
        category,
        active: this.sumNotes(category, false),
        archived: this.sumNotes(category, true),
      };
    });
    return stats;
  }

  findOne(id: string) {
    const note = this.findNoteById(id);
    return note;
  }

  findAll() {
    return this.storageService.notes;
  }
}
