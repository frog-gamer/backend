import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot(): Record<string,string> {
    return { 'Message':'Hello World!'}
  }
}
