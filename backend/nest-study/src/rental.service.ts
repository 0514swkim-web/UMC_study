import { Injectable } from '@nestjs/common';
import { RentalRepository } from './rental.repository';

@Injectable()
export class RentalService {
  constructor(private readonly rentalRepository: RentalRepository) {}

  async createRental(body: Record<string, any>): Promise<any> {
    const result = await this.rentalRepository.create(body);
    return {
      message: '대여 기록이 생성되었습니다!',
      rentalId: result.insertId,
    };
  }
}
