export class CreateRoomDto {
    readonly name: string;
    readonly period: Date;
    readonly playlist: string; 
    readonly participants: string[]; 
  }
  