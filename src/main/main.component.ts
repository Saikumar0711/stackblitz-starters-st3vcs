import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  standalone:true,
  selector: 'app-sidenav',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  import:[SidenavComponent,ConversationsComponent]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}