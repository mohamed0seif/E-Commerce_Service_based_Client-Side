import { Component, OnInit } from '@angular/core';
import { ServicesOfKhadamatiService } from '../../services/services-of-khadamati.service';
import { GetAllServicesDTO } from 'src/app/Types/services/GetAllServicesDTO';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit
 {
  services?:GetAllServicesDTO[];

  constructor(private servicesOfKhadamatiService:ServicesOfKhadamatiService){}

  ngOnInit(): void {
    this.servicesOfKhadamatiService.getAll().subscribe({
      next:(services)=> {
        this.services=services;
        console.log(this.services);
      },
      error:(error)=>{
        console.error('Calling API failed',error);
      },
    })
  }
  Approve(id:number):void {
    this.servicesOfKhadamatiService.Approve(id).subscribe
    (
      {
        next: (services)=>{
          console.log(services)
        },
        error:(error)=>{console.log(error)}
        
      }
      
    )
  }

}
