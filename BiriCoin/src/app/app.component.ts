import {Component, OnInit} from '@angular/core';
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  pipes: [TitleCasePipe]
})
export class AppComponent implements OnInit{
  showTab: string;

  constructor() {

    this.showTab = 'blockchain';
  }

  ngOnInit() {
  }

  onTabSelected(tabName: string) {
    this.showTab = tabName;
  }
}
