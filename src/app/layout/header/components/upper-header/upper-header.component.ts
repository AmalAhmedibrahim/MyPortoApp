import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-header',
  templateUrl: './upper-header.component.html',
  styleUrls: ['./upper-header.component.scss']
})
export class UpperHeaderComponent implements OnInit {
 @Input() address:string;
 @Input() phone:string;
 @Input() mail:string;
 @Input() sideMenuItem1:string;
 @Input() sideMenuItem2:string;

 languages: string [];
  constructor() { }

  ngOnInit() {
    this.languages.push("English");
    this.languages.push("Español");
    this.languages.push("Française");


  }

}
