import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 address:string;
 phone:string;
 mail:string;
 sideMenuItem1:string;
 sideMenuItem2:string;
  constructor(){
  }

  ngOnInit() {
    this.address = "1234 Rehab, Cairo , Egypt";
    this.phone = "123-456-7890";
    this.mail = "Porto@mail.com";
    this.sideMenuItem1= " About Us";
    this.sideMenuItem2= "Contact Us";
  }

}
