import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({
    collection: 'Grades'
})

export class GradesModel {
    @Prop({type: Number, required: true})
    mark: number

    @Prop({type: String, required: true})
    lecturer: string

    @Prop({type: String, required: false})
    description: string
}
export const GradesSchema = SchemaFactory.createForClass(GradesModel)