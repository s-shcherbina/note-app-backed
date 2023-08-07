// import { PartialType } from '@nestjs/mapped-types';
// import { CreateNoteDto } from './create-note.dto';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateNoteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsBoolean()
  archived: boolean;
}
//extends PartialType(CreateNoteDto)
