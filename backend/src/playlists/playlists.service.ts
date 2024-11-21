import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Playlist, PlaylistDocument } from './entities/playlist.entity';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectModel(Playlist.name) private readonly playlistModel: Model<PlaylistDocument>,
  ) {}

  async create(createPlaylistDto: CreatePlaylistDto): Promise<Playlist> {
    const newPlaylist = new this.playlistModel(createPlaylistDto);
    return newPlaylist.save();
  }

  async findAll(): Promise<Playlist[]> {
    return this.playlistModel.find().populate('createdBy').exec();
  }

  async findOne(id: string): Promise<Playlist> {
    return this.playlistModel.findById(id).populate('createdBy').exec();
  }

  async update(id: string, updatePlaylistDto: UpdatePlaylistDto): Promise<Playlist> {
    return this.playlistModel
      .findByIdAndUpdate(id, updatePlaylistDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<void> {
    await this.playlistModel.findByIdAndDelete(id).exec();
  }
}
