import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRequestData } from 'src/app/interfaces/requestData.interface';
import { RequestService } from 'src/app/services/request.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})
export class RequestPageComponent implements OnInit{
  id:number = 2
  data:IRequestData|undefined
  constructor(private RequestService:RequestService, private req:ActivatedRoute,private user:UserService,private router:Router){}


  ngOnInit(): void {
    this.user.getUser().subscribe(
    {
      next:(user)=>{
        if(this.data?.userDetails.userName!==user.userName)
        {
          this.router.navigateByUrl("User");
        }
      },
      error:(error)=>{
        console.log("Api Call Failed",error)
      },
    }
    )
    if(this.data?.providerDetails.providerName)
    {

    }

  this.req.queryParamMap.subscribe(params =>{this.id=parseInt(params.get("id")!);})
  console.log(this.id);
  this.request()
  }

  request(){
    this.RequestService.getRequestData(this.id).subscribe((res)=>{
      this.data = res[0]
      console.log(this.data)
    })
  }


  changeStatus(status:'Approved'|'Rejected'){
    this.RequestService.rejectRequest(
      {
        id:this.data?.id ||this.id,
        status:status,
        requestText:this.data?.requestText || ''
      }
    ).subscribe(
    ()=>{
      this.request()
    }
    )
  }
  
}
