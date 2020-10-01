import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InteractionService } from './services/interaction.service';
import { InteractionController } from './controller/interaction.controller';
import { InteractionHeader } from './entity/interactionHeader';

@Module({
  imports: [TypeOrmModule.forFeature([InteractionHeader])],
  providers: [InteractionService],
  controllers: [InteractionController],
})
export class InteractionModule {}
