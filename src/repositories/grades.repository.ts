import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { GradesModel } from "../models/grades.model"
import { Model } from "mongoose"
import { GradesDto } from "../dto/grades.dto"

@Injectable()
export class GradesRepository {
    constructor(
        @InjectModel(GradesModel.name) private readonly gradesModel: Model<GradesModel>,
    ) { }

    async getAllGrades(): Promise<GradesDto[]> {
        return await this.gradesModel.find().exec()
    }

    async getGradeById(gradeId): Promise<GradesDto> {
        return await this.gradesModel.findById(gradeId).exec()
    }

    async createGrade(gradesDto: GradesDto): Promise<GradesDto> {

        return await this.gradesModel.create(gradesDto)
    }

    async editGrade(gradeId, gradeDto: GradesDto): Promise<GradesDto> {
        return this.gradesModel.findByIdAndUpdate(gradeDto, gradeId)
    }

    async deleteGrade(gradeId): Promise<any> {
        return this.gradesModel.findByIdAndRemove(gradeId)
    }
}