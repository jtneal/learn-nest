import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';

import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
