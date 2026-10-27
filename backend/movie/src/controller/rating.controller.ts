import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RatingResponseDto } from '../dto/rating-response.dto.js';
import { RatingService } from '../service/rating.service.js';

// MemberController와 같은 /members 경로를 쓰지만, 다루는 자원(Rating) 기준으로 파일을 나눔
@Controller('members')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get(':memberId/ratings')
  getMemberRatings(
    @Param('memberId', ParseIntPipe) memberId: number,
  ): Promise<RatingResponseDto[]> {
    return this.ratingService.getRatingsByMember(memberId);
  }
}
