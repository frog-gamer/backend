import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InteractionHeader } from '../entity/interactionHeader';
import { InteractionHeaderDto } from '../dto/interactionHeader-dto';

@Injectable()
export class InteractionService {
  constructor(@InjectRepository(InteractionHeader) private readonly interactionRepository: Repository<InteractionHeader>) {}

  async getAll(): Promise<InteractionHeader[]> {
    return await this.interactionRepository.find();
  }

  async getOne(id: string): Promise<InteractionHeader> {
    return await this.interactionRepository.findOne(id);
  }

  async create(interaction: InteractionHeaderDto): Promise<InteractionHeader> {
    const newInteractionHeader = new InteractionHeader(interaction.cif, interaction.hp, interaction.type);
    newInteractionHeader.status = 1;
    newInteractionHeader.date = new Date();
    return await this.interactionRepository.save(newInteractionHeader);
  }

  async end(id: string): Promise<InteractionHeader> {
    const endInteraction: InteractionHeader = await this.interactionRepository.findOne(id);

    if (!endInteraction)
      throw new NotFoundException('Interaction not found');

    endInteraction.status = 0;
    endInteraction.endDate = new Date();
    return await this.interactionRepository.save(endInteraction);
  }

}
