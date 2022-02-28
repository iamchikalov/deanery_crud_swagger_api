import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { GradesModel, GradesSchema } from "../models/grades.model"
import { GradesController } from "../controllers/grades.controller"
import { GradesService } from "../services/grades.service"
import { GradesRepository } from "../repositories/grades.repository"

@Module({
    imports: [
        MongooseModule.forFeature([{ name: GradesModel.name, schema: GradesSchema }])
    ],
    controllers: [GradesController],
    providers: [
        GradesRepository,
        {
            provide: GradesService,
            useFactory: async (repository: GradesRepository) => {
                return new GradesService(repository)
            },
            inject: [GradesRepository]
        }
    ]
})
export class GradesModule { }