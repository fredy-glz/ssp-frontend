import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  constructor() { this.sideBarOpen = true}

  ngOnInit(): void { }
  
  sideBarToggler(sideBarOpen = false) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
