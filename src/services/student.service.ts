import { Injectable } from "@nestjs/common"
import { StudentDto } from "../dto/student.dto"
import { StudentRepository } from "../repositories/student.repository"

@Injectable()
export class StudentService {
    constructor(
        private readonly repository: StudentRepository
    )
    { }

    async getAllStudents(): Promise<StudentDto[]> {
        return await this.repository.getAllStudents()
    }

    async getStudentById(studentId): Promise<StudentDto> {
        return await this.repository.getStudentById(studentId)
    }

    async createStudent(studentDto: StudentDto): Promise<StudentDto> {
        return await this.repository.addStudent(studentDto)
    }

    async editStudent(studentId, studentDto: StudentDto): Promise<StudentDto> {
        await this.repository.editStudent(studentDto, studentId)
        return this.repository.getStudentById(studentId)
    }

    async deleteStudent(studentId): Promise<any> {
        return await this.repository.deleteStudent(studentId)
    }
}