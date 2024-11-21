import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VideosModule } from './videos/videos.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { RoomsModule } from './rooms/rooms.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/watch-together'),
    VideosModule,
    PlaylistsModule,
    RoomsModule,
    NotificationsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
