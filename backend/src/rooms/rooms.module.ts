import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './entities/room.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:'Room',schema:RoomSchema
    }]),
  ],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
