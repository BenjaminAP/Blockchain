import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectTab(tabName: string)  {
    this.tabSelected.emit(tabName);
    console.log(tabName);
  }

}
