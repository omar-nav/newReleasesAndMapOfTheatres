import { Component, OnInit } from '@angular/core';
import { MyUserServService } from '../services/my-user-serv.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: MyUserServService) { }

  //Init the user Servies for Get The client IP Adress.
  ngOnInit() {
    let ipInfo: any;
    this.userService.getIpAddress()
    .subscribe(ipInfoOfUser => { ipInfoOfUser = ipInfoOfUser 
      ipInfo = ipInfoOfUser;
  
      console.log(ipInfo);
    });

  }
}
