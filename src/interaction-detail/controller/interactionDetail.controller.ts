import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { InteractionDetailDto } from '../dto/interactionDetail-dto';
import { InteractionDetailService } from '../services/interactionDetail.service';

@Controller('interaction_detail')
export class InteractionDetailController {
  constructor(private interactionDetailService: InteractionDetailService) {}

  @Post('')
  async create(@Body() create: InteractionDetailDto, @Res() response) {
    this.interactionDetailService.create(create).then((data) => {
      return response.status(HttpStatus.CREATED).json({ 'statusCode':HttpStatus.OK, 'statusMsg':'SUCCESS', 'data': [data]});
    }).catch(err => {
      return response.status(HttpStatus.BAD_REQUEST).json({ 'statusCode':HttpStatus.BAD_REQUEST, 'statusMsg':'BAD_REQUEST', 'error': err.message});
    });
  }

  @Get('')
  getAll(@Res() response) {
    this.interactionDetailService.getAll().then(data => {
      return response.status(HttpStatus.OK).json({ 'statusCode':HttpStatus.OK, 'statusMsg':'SUCCESS', 'data': data});
    }).catch(err => {
      return response.status(HttpStatus.BAD_REQUEST).json({ 'statusCode':HttpStatus.BAD_REQUEST, 'statusMsg':'BAD_REQUEST', 'error': err.message});
    });
  }

  @Get(':id')
  getOne(@Param('id') id, @Res() response) {
    this.interactionDetailService.getOne(id).then(data => {
      return response.status(HttpStatus.OK).json({ 'statusCode':HttpStatus.OK, 'statusMsg':'SUCCESS', 'data': [data]});
    }).catch(err => {
      return response.status(HttpStatus.BAD_REQUEST).json({ 'statusCode':HttpStatus.BAD_REQUEST, 'statusMsg':'BAD_REQUEST', 'error': err.message});
    });
  }

}
