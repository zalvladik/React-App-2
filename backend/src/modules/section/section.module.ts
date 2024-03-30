import { Module } from '@nestjs/common'

import { SectionService } from './section.service'
import { SectionController } from './section.controller'

import { Section } from 'src/entities/section.entity'

import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
