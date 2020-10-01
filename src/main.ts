import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  setupSwagger(app);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.info(`server running on port ${port}`);
}
bootstrap();
