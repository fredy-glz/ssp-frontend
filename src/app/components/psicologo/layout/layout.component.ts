import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  sideBarOpen = true;
  constructor(private token: TokenStorageService, private router: Router) {
    this.sideBarOpen = true
  }

  ngOnInit(): void { }

  sideBarToggler(sideBarOpen = false) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
