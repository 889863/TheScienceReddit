import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  menuVisible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  /* This method is to toggle the Navigation Menu based on user actions */
  toggleNavigation(){
    this.menuVisible = !this.menuVisible;       
  }

}
