import { Type } from '@nestjs/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose';

@Schema()
export class Room extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  period: Date;

  @Prop({ type: Types.ObjectId, ref: 'Playlist' })
  playlist: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  participants: Types.ObjectId[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
