import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { StudentModel } from "../models/student.model"
import { StudentDto } from "../dto/student.dto"
import { Model } from "mongoose"

@Injectable()
export class StudentRepository {
    constructor(
        @InjectModel(StudentModel.name) private readonly studentModel: Model<StudentModel>
    ) { }

    async getAllStudents(): Promise<StudentDto[]> {
        return await this.studentModel.find().exec()
    }

    async getStudentById(studentId): Promise<StudentDto> {
        return await this.studentModel.findById(studentId).exec()
    }

    async addStudent(studentDto: StudentDto): Promise<StudentDto> {
        return await this.studentModel.create(studentDto)
    }

    async editStudent(studentId, studentDto: StudentDto): Promise<StudentDto> {
        return this.studentModel.findByIdAndUpdate(studentDto, studentId);
    }

    async deleteStudent(studentId): Promise<any> {
        return this.studentModel.findByIdAndRemove(studentId);
    }
}