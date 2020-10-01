import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InteractionHeader } from './interaction/entity/interactionHeader';
import { InteractionDetail } from './interaction-detail/entity/interactionDetail';
import {InteractionModule} from './interaction/interaction.module'
import {InteractionDetailModule} from './interaction-detail/interactionDEtail.module'

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `${process.env.DBHOST}`,
      port: 3306,
      username: `${process.env.DBUSER}`,
      password: `${process.env.DBPASSWORD}`,
      database: `${process.env.DBNAME}`,
      entities: [InteractionHeader, InteractionDetail],
      synchronize: false,
    }), 
    InteractionModule,
    InteractionDetailModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
