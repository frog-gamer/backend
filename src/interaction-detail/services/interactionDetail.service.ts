import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InteractionDetail } from '../entity/interactionDetail';
import { InteractionDetailDto } from '../dto/interactionDetail-dto';

@Injectable()
export class InteractionDetailService {
  constructor(@InjectRepository(InteractionDetail) private readonly interactionDetailRepository: Repository<InteractionDetail>) {}

  async getAll(): Promise<InteractionDetail[]> {
    return await this.interactionDetailRepository.find();
  }

  async getOne(id: string): Promise<InteractionDetail> {
    return await this.interactionDetailRepository.findOne(id);
  }

  async create(interaction: InteractionDetailDto): Promise<InteractionDetail> {
    const newInteractionDetail = new InteractionDetail(interaction.interactionId, interaction.type, interaction.content);
    newInteractionDetail.date = new Date();
    return await this.interactionDetailRepository.save(newInteractionDetail);
  }

}
