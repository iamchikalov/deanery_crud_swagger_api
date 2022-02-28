import { NestFactory } from '@nestjs/core'
import { AppModule } from "./app/app.module"
import { ConfigModule } from "./utils/config"
import { NestExpressApplication } from "@nestjs/platform-express"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const config = new DocumentBuilder()
      .setTitle('Deanery')
      .setDescription('Распределительные системы и облачные технологии')
      .setVersion('1.0')
      .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  app.enableCors()
  await app.listen(ConfigModule.SERVER_PORT, ConfigModule.HOST)
  console.log(`Server listening http://${ConfigModule.HOST}:${ConfigModule.SERVER_PORT}`)
}
bootstrap()