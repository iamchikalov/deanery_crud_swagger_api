import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { StudentController } from "../controllers/student.controller"
import { StudentService } from "../services/student.service"
import { StudentModel, StudentSchema } from "../models/student.model"
import { StudentRepository } from "../repositories/student.repository"

@Module({
    imports: [
        MongooseModule.forFeature([{ name: StudentModel.name, schema: StudentSchema }])
    ],
    controllers: [StudentController],
    providers: [
        StudentRepository,
        {
            provide: StudentService,
            useFactory: async (repository: StudentRepository) => {
                return new StudentService(repository)
            },
            inject: [StudentRepository]
        }
    ]
})
export class StudentModule { }