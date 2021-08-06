import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  opened = false;


  toggleSidebar() {
    this.opened = !this.opened;
  }
  
  events: Event[] = [];
  constructor() { // do nothing 
  }


  ngOnInit(): void {
    //do nothing
  }

}
