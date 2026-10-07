import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBookDto {
  @Type(() => Number)
  @IsInt({ message: 'categoryId는 정수여야 합니다.' })
  categoryId: number;

  @IsString({ message: 'title은 문자열이어야 합니다.' })
  @IsNotEmpty({ message: 'title은 비어 있을 수 없습니다.' })
  @MaxLength(100, { message: 'title은 100자 이하여야 합니다.' })
  title: string;

  @IsOptional()
  @IsString({ message: 'description은 문자열이어야 합니다.' })
  description?: string;
}
