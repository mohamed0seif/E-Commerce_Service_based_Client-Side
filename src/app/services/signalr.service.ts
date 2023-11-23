import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service'



@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  signalRConnection!: signalR.HubConnection;

  constructor(private httpClient: HttpClient ,private user : UserService ) 
  {
    this.signalRConnection = this.getConnection();
    this.startConnection();
  }


  startConnection() {
    this.signalRConnection.start()
      .then(() => {
        console.log("SignalR Connected!");
      })
      .catch((err) => {
        console.error("SignalR Connection Error:", err);
      });
  }



  getConnection(): signalR.HubConnection {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`https://localhost:7012/chat`, signalR.HttpTransportType.WebSockets)
      .build();

    return connection;
  }
  sendNotification( text : string , id : string)
  {
    this.signalRConnection.invoke("Sendnotification", text , id);
  
  }
}



