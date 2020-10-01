import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { InteractionHeaderDto } from '../dto/interactionHeader-dto';
import { InteractionService } from '../services/interaction.service';

@Controller('interaction')
export class InteractionController {
  constructor(private interactionService: InteractionService) {}

  @Post('')
  async create(@Body() create: InteractionHeaderDto, @Res() response) {
    this.interactionService.create(create).then((data) => {
      return response.status(HttpStatus.CREATED).json({ 'statusCode':HttpStatus.OK, 'statusMsg':'SUCCESS', 'data': [data]});
    }).catch(err => {
      return response.status(HttpStatus.BAD_REQUEST).json({ 'statusCode':HttpStatus.BAD_REQUEST, 'statusMsg':'BAD_REQUEST', 'error': err.message});
    });
  }

  @Get('')
  getAll(@Res() response) {
    this.interactionService.getAll().then(data => {
      return response.status(HttpStatus.OK).json({ 'statusCode':HttpStatus.OK, 'statusMsg':'SUCCESS', 'data': data});
    }).catch(err => {
      return response.status(HttpStatus.BAD_REQUEST).json({ 'statusCode':HttpStatus.BAD_REQUEST, 'statusMsg':'BAD_REQUEST', 'error': err.message});
    });
  }

  @Get('/:id')
  getOne(@Param('id') id, @Res() response) {
    this.interactionService.getOne(id).then(data => {
      return response.status(HttpStatus.OK).json({ 'statusCode':HttpStatus.OK, 'statusMsg':'SUCCESS', 'data': [data]});
    }).catch(err => {
      return response.status(HttpStatus.BAD_REQUEST).json({ 'statusCode':HttpStatus.BAD_REQUEST, 'statusMsg':'BAD_REQUEST', 'error': err.message});
    });
  }

  @Put('/:id')
  update(@Param('id') id ,@Res() response) {
    this.interactionService.end(id).then(data => {
      return response.status(HttpStatus.OK).json({ 'statusCode':HttpStatus.OK, 'statusMsg':'SUCCESS'});
    }).catch(err => {
      return response.status(HttpStatus.BAD_REQUEST).json({ 'statusCode':HttpStatus.BAD_REQUEST, 'statusMsg':'BAD_REQUEST', 'error': err.message});
    })
  }

}
