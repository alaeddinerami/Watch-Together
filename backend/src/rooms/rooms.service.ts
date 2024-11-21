import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(@InjectModel(Room.name) private roomModel: Model<Room>) {}

  async create(createRoomDto: any): Promise<Room> {
    const newRoom = new this.roomModel(createRoomDto);
    return newRoom.save();
  }

  async findAll(): Promise<Room[]> {
    return this.roomModel.find().populate('playlist participants').exec();
  }

  async findOne(id: string): Promise<Room> {
    const room = await this.roomModel.findById(id).populate('playlist participants').exec();
    if (!room) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }
    return room;
  }

  async update(id: string, updateRoomDto: any): Promise<Room> {
    const updatedRoom = await this.roomModel
      .findByIdAndUpdate(id, updateRoomDto, { new: true })
      .exec();

    if (!updatedRoom) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }

    return updatedRoom;
  }

  async delete(id: string): Promise<void> {
    const result = await this.roomModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }
  }
}
