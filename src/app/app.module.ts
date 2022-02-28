import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from "@nestjs/mongoose"
import { ConfigModule } from "../utils/config"
import { StudentModule } from "../modules/student.module"
import { GradesModule } from "../modules/grades.module"


@Module({
  imports: [
      MongooseModule.forRoot(ConfigModule.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
      StudentModule,
      GradesModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}