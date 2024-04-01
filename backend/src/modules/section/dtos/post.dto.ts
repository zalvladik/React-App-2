import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class PostSectionBodyDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'To do' })
  name: string
}

export class PostSectionResponseDto {
  @ApiProperty({ example: '56db67dd-7f14-4667-9fb3-800685ac835b' })
  id: string

  @ApiProperty({ example: 'To do' })
  name: string
}
