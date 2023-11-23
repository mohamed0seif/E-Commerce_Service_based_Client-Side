import { Component } from '@angular/core';
import { UserDetailsDTO } from '../Types/Users/UserDetailsDto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  UserDetails?:UserDetailsDTO;
  constructor(public userService: UserService){}
  x:number=0;

  ngOnInit(): void {
    const IsLoggedIn = this.userService.IsLoggedIn();
    console.log("Is Logged in = "+IsLoggedIn)
    console.log("Is User =" + this.userService.IsUser())
    console.log("Is Admin =" + this.userService.IsAdmin())
    this.userService.getUser().subscribe(
      {
        next:(SiteUSER:UserDetailsDTO)=>{
          this.UserDetails=SiteUSER;
          console.log(this.UserDetails);
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }     
    );
  }
  changeInfrence(i:number,e:Event){
    this.x=i;
    
    const prev= document.getElementsByClassName("navItemactive")[0];
    if(prev!=undefined)
    prev.classList.replace("navItemactive","navItem");

    
    const ele = e.target as HTMLElement;
    ele.classList.replace("navItem","navItemactive");

    this.Expanded()
  }
  Expanded()
  {
    var ele= document.getElementsByClassName("sideMenuExpanded")[0];
    if(ele!=undefined)
    {ele.classList.replace("sideMenuExpanded","sideMenu");}
    else
    {
      var ele= document.getElementsByClassName("sideMenu")[0];
      ele.classList.replace("sideMenu","sideMenuExpanded");
    }
    ele= document.getElementsByClassName("sideMenuButtonExpanded")[0];
    if(ele!=undefined)
    {ele.classList.replace("sideMenuButtonExpanded","sideMenuButton");}
    else
    {
      var ele= document.getElementsByClassName("sideMenuButton")[0];
      ele.classList.replace("sideMenuButton","sideMenuButtonExpanded");
    }
  }
}
