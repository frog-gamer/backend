
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

export function setupSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
        .setTitle(`${process.env.APPNAME}`)
        .setDescription(`${process.env.APPNAME} API description`)
        .setVersion(`${process.env.APPVERSION}`)
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
}