import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  opened = false;


  toggleSidebar() {
    this.opened = !this.opened;
  }
  constructor() {  
    // do nothing
   }

  ngOnInit(): void {  // do nothing.
  }

}
