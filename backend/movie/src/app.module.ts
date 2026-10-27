import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entity/member.entity.js';
import { Rating } from './entity/rating.entity.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.getOrThrow<string>('DB_HOST'),
        port: Number(configService.get('DB_PORT', 3306)),
        username: configService.getOrThrow<string>('DB_USER'),
        password: configService.getOrThrow<string>('DB_PASSWORD'),
        database: configService.getOrThrow<string>('DB_NAME'),
        autoLoadEntities: true, // forFeature로 등록한 엔티티 자동 수집
        synchronize: false, // schema.sql로 만든 테이블 구조를 자동으로 바꾸지 않음
        bigNumberStrings: false, // bigint를 문자열 대신 number로 받기
        logging: ['query', 'error'], // 실행되는 SQL을 터미널에 출력
      }),
    }),
    // 레이어 구조라 도메인 모듈 없이 app.module 한 곳에서 Repository 등록
    TypeOrmModule.forFeature([Member, Rating]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
