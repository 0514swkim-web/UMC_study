import { Controller, Get, Param } from '@nestjs/common';
import { CheckResponseDto } from '../dto/check-response.dto.js';
import { MemberService } from '../service/member.service.js';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('nickname/:nickname')
  checkNickname(@Param('nickname') nickname: string): Promise<CheckResponseDto> {
    return this.memberService.checkNickname(nickname);
  }

  @Get('email/:email')
  checkEmail(@Param('email') email: string): Promise<CheckResponseDto> {
    return this.memberService.checkEmail(email);
  }
}
