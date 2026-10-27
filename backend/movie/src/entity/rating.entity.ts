import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  type Relation,
} from 'typeorm';
import { BaseTimeEntity } from './base-time.entity.js';
import { Member } from './member.entity.js';

@Entity('rating')
export class Rating extends BaseTimeEntity {
  @PrimaryGeneratedColumn({ name: 'rating_id', type: 'bigint' })
  ratingId: number;

  // ESM에서는 관계 필드 타입을 Relation<>으로 감싸야 순환 import 시 초기화 오류가 안 남
  @ManyToOne(() => Member, { nullable: false })
  @JoinColumn({ name: 'member_id' })
  member: Relation<Member>;

  // TMDB 영화 ID: 우리 DB에 movie 테이블이 없으므로 FK가 아닌 일반 컬럼
  @Column({ name: 'movie_id', type: 'bigint' })
  movieId: number;

  @Column({ type: 'tinyint' })
  score: number;

  @Column({ type: 'text', nullable: true })
  comment: string | null;
}
