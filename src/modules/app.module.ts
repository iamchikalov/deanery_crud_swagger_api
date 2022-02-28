import { Module } from '@nestjs/common'
import { MongooseModule } from "@nestjs/mongoose"
import { ConfigModule } from "../utils/config"
import { StudentModule } from "./student.module"
import { GradesModule } from "./grades.module"

@Module({
  imports: [
      MongooseModule.forRoot(ConfigModule.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
      StudentModule,
      GradesModule
  ],
})
export class AppModule { }