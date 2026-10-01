import { Injectable, Inject } from '@nestjs/common';
import type { Pool } from 'mysql2/promise';
import { DATABASE_CONNECTION } from './database.provider';

@Injectable()
export class BookRepository {
  constructor(@Inject(DATABASE_CONNECTION) private readonly pool: Pool) {}

  async findAll(): Promise<any> {
    const sql = 'SELECT * FROM book';
    const [rows] = await this.pool.query(sql);
    return rows;
  }
}
