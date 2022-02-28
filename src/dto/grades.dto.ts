import { ApiProperty } from "@nestjs/swagger"

export class GradesDto {
    @ApiProperty()
    mark: number

    @ApiProperty()
    lecturer: string

    @ApiProperty()
    description: string
}