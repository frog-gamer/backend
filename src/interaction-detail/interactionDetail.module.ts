import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InteractionDetailService } from './services/interactionDetail.service';
import { InteractionDetailController } from './controller/interactionDetail.controller';
import { InteractionDetail } from './entity/interactionDetail';

@Module({
  imports: [TypeOrmModule.forFeature([InteractionDetail])],
  providers: [InteractionDetailService],
  controllers: [InteractionDetailController],
})
export class InteractionDetailModule {}
