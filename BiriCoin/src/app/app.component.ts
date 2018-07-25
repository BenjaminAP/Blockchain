import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showTab: string;

  constructor() {

    this.showTab = 'wallet';
  }

  ngOnInit() {
  }

  onTabSelected(tabName: string) {
    this.showTab = tabName;
  }
}
