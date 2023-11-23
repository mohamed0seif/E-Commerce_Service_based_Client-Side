import { UserChildNotificationDTO } from './../Types/Users/UserDetailsDto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {NotificationDto} from './../Types/Notification/NotificationDto'
import {NotificationAddDto} from './../Types/Notification/NotificationDto'
import { DatePipe } from '@angular/common';





@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private client:HttpClient,private datePipe: DatePipe) {  }

  public getById(id:number):Observable<NotificationDto>
  {
    return this.client.get<NotificationDto>("https://localhost:7012/api/Notification/"+id);
  }
  public add(add:NotificationAddDto):Observable<object>
  {
    return this.client.post("https://localhost:7012/api/Notification/",add);
  }
  public getByUserId(id:string):Observable<NotificationDto>
  {
    return this.client.get<NotificationDto>("https://localhost:7012/api/Notification/User"+id);
  }
  public update(Notification:NotificationDto):Observable<object>
  {
    return this.client.put("https://localhost:7012/api/Notification",Notification);
  }
  public delete(id:number):Observable<object>
  {
    return this.client.delete("https://localhost:7012/api/Notification/"+id); 
  }
  

}
