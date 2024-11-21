import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose';
@Schema()
export class Playlist extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Video' }] })
  videos: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  owner: Types.ObjectId;
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);