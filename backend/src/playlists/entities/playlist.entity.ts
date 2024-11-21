import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";



@Schema()
export class Playlist extends Document {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true, type: [String] })
    movies: string[];

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    createdBy: Types.ObjectId;
}

export type PlaylistDocument = Playlist & Document;
export const PlaylistSchema = SchemaFactory.createForClass(Playlist)