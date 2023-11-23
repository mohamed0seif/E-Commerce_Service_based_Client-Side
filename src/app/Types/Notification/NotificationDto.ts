export interface NotificationDto {
  Id: number;
  Text: string;
  date: string;
  seen: boolean;
  UserId?: string;
  User?: NotificationUserDto;
}

export interface NotificationUserDto {
  UserId?: string;
  UserName?: string;
  Email?: string;
}

export interface NotificationAddDto {
  Text: string;
  date: string;
  seen: boolean;
  UserId?: string;
}