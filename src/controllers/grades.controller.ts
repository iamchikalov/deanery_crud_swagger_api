import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Res,
    NotFoundException,
    HttpStatus
} from "@nestjs/common"
import { GradesService } from "../services/grades.service"
import { ValidateObjectId } from "../shared/object-id.pipes"
import { GradesDto } from "../dto/grades.dto"

@Controller()
export class GradesController {
    constructor(
        private readonly gradesService: GradesService
    ) { }

    @Get('/api/get-grades')
    async getAllGrades(@Res() res) {
        const grades = await this.gradesService.getAllGrades()
        return res.status(HttpStatus.OK).json(grades)
    }

    @Get('/api/get-grade-by-id/:gradeId')
    async getOneGrade(@Res() res, @Param('gradeId', new ValidateObjectId()) gradeId) {
        const grade = await this.gradesService.getOneGrade(gradeId)
        if (!grade) throw new NotFoundException('Grade does not exist!')
        return res.status(HttpStatus.OK).json(grade)
    }

    @Post('/api/add-grade')
    async createGrade(@Res() res, @Body() gradesDto: GradesDto) {
        const newGrade = await this.gradesService.createGrade(gradesDto)
        return res.status(HttpStatus.CREATED).json({
            massage: 'Grade has been submitted successfully!',
            grade: newGrade
        })
    }

    @Patch('/api/edit-grade/:gradeId')
    async editGrade(@Res() res,
                    @Param('gradeId', new ValidateObjectId()) gradeId,
                    @Body() gradesGto: GradesDto) {
        const editedGrade = await this.gradesService.editGrade(gradeId, gradesGto)
        if (!editedGrade) throw new NotFoundException('Grade does not exist!')
        return res.status(HttpStatus.OK).json({
            massage: 'Student has been edited successfully!',
            grade: editedGrade
        })
    }

    @Delete('/api/delete-grade/:gradeId')
    async deleteGrade(@Res() res, @Param('gradeId', new ValidateObjectId()) gradeId) {
        const deletedGrade = await this.gradesService.deleteGrade(gradeId)
        if (!deletedGrade) throw new NotFoundException('Grade does not exist!')
        return res.status(HttpStatus.OK).json({
            massage: 'Grade has been deleted!',
            student: deletedGrade
        })
    }
}