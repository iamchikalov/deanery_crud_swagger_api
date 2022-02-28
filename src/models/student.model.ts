import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({
    collection: 'Students'
})
export class StudentModel {

    @Prop({type: String, required: true})
    name: string

    @Prop({type: String, required: true})
    surname: string

    @Prop({type: Number, required: true})
    age: number

    @Prop({type: })
}
export const StudentSchema = SchemaFactory.createForClass(StudentModel)