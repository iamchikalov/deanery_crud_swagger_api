import { ApiProperty } from "@nestjs/swagger"

export class StudentDto {
     @ApiProperty()
     name: string

     @ApiProperty()
     surname: string

     @ApiProperty()
     age: number
}