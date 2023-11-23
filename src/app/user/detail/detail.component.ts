import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetailsDTO } from 'src/app/Types/Users/UserDetailsDto';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';
import { UserUpdateDto } from 'src/app/Types/Users/UserUpdateDto';
import Goverment from 'src/app/Types/Goverment';
import { LocationsListService } from 'src/app/services/locations-list.service';

@Component({
  selector: 'app-userDetail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() UserDetails?: UserDetailsDTO;
  Updateform=new FormGroup({
    Phone: new FormControl<string>('',[
    ]
    ),
    Mail: new FormControl<string>('',
      [
      ] 
    ),
    Location: new FormControl<string>('',[
    ]
    )
  })
  goverments: Goverment[]|undefined;
  
  constructor(private user: UserService, private Loc: LocationsListService)
  {}

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.UserDetails)
    this.Updateform=new FormGroup({
      Phone: new FormControl<string>(this.UserDetails!.phone,[
        Validators.required
      ]
      ),
      Mail: new FormControl<string>(this.UserDetails!.email,[
        Validators.email,
        Validators.required
      ]
      ),
      Location: new FormControl<string>(this.UserDetails!.location,[
        Validators.required
      ]
      )
    })
    this.Updateform.controls.Location.value!=this.UserDetails!.phone
      this.goverments=this.Loc.Goverments;
      console.log(this.goverments);
  }

  Test():void{
    console.log(this.Updateform.value!.Mail)
  }
  Update():void{
    if(this.Updateform.invalid) return;
      const UserLogin : UserUpdateDto={ 
        phone:this.Updateform.value.Phone!,
        email:this.Updateform.value.Mail!,
        location:this.Updateform.value.Location!
      }
      console.log(UserLogin)
      this.user.UpdateUser(UserLogin).subscribe(
      {
        next:(Utoken:any)=>
        {
         
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }
    )
  }
}
