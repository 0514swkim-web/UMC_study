import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn({ name: 'category_id', type: 'bigint' })
  categoryId: number;

  @Column({ length: 50 })
  name: string;

  // 카테고리 1 : N 도서 (FK는 book 쪽에 있으므로 여기엔 컬럼이 생기지 않음)
  @OneToMany(() => Book, (book) => book.category)
  books: Book[];
}
