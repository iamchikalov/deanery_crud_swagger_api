import { Injectable } from "@nestjs/common"
import { GradesDto } from "../dto/grades.dto"
import { GradesRepository } from "../repositories/grades.repository"

@Injectable()
export class GradesService {
    constructor(
        private readonly repository: GradesRepository
    )
    { }

    async getAllGrades(): Promise<GradesDto[]> {
        return await this.repository.getAllGrades()
    }

    async getOneGrade(gradeId): Promise<GradesDto> {

        return await this.repository.getGradeById(gradeId)
    }

    async createGrade(gradesDto: GradesDto): Promise<GradesDto> {
        return await this.repository.createGrade(gradesDto)
    }

    async editGrade(gradeId, gradesDto: GradesDto): Promise<GradesDto> {
        await this.repository.editGrade(gradesDto, gradeId)
        return await this.repository.getGradeById(gradeId)
    }

    async deleteGrade(gradeId): Promise<any> {
        return await this.repository.deleteGrade(gradeId)
    }
}