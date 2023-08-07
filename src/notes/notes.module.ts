import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { StorageService } from '../storage/storage.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService, StorageService],
})
export class NotesModule {}
