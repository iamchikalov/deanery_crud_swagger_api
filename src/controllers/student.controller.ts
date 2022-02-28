import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Res,
    HttpStatus,
    NotFoundException
} from "@nestjs/common"
import { StudentService } from "../services/student.service"
import { StudentDto } from "../dto/student.dto"
import { ValidateObjectId } from "../shared/object-id.pipes"

@Controller()
export class StudentController {
    constructor(
        private readonly studentService: StudentService
    ) { }

    @Get('/api/get-students')
    async getAllStudents(@Res() res) {
        const students = await this.studentService.getAllStudents()
        return res.status(HttpStatus.OK).json(students)
    }

    @Get('/api/get-student-by-id/:studentId')
    async getStudentById(@Res() res, @Param('studentId', new ValidateObjectId()) studentId) {
        const student = await this.studentService.getStudentById(studentId)
        if (!student) throw new NotFoundException('Student does not exist!')
        return res.status(HttpStatus.OK).json(student)
    }

    @Post('/api/add-student')
    async createStudent(@Res() res, @Body() studentDto: StudentDto) {
        const newStudent = await this.studentService.createStudent(studentDto)
        return res.status(HttpStatus.CREATED).json({
            massage: 'Student has been submitted successfully!',
            student: newStudent
        })
    }

    @Patch('/api/edit-student/:studentId')
    async editStudent(@Res() res,
                      @Param('studentId', new ValidateObjectId()) studentId,
                      @Body() studentDto: StudentDto) {
        const editedStudent = await this.studentService.editStudent(studentId, studentDto)
        if (!editedStudent) throw new NotFoundException('Student does not exist!')
        return res.status(HttpStatus.OK).json({
            massage: 'Student has been edited successfully!',
            student: editedStudent
        })
    }

    @Delete('/api/delete-student/:studentId')
    async deleteStudent(@Res() res, @Param('studentId', new ValidateObjectId()) studentId) {
        const deletedStudent = await this.studentService.deleteStudent(studentId)
        if (!deletedStudent) throw new NotFoundException('Student does not exist!')
        return res.status(HttpStatus.OK).json({
            massage: 'Student has been deleted!',
            student: deletedStudent
        })
    }
}
