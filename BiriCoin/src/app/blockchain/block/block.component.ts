import {Component, OnInit} from '@angular/core';
import {Block} from "../../classes/block";

@Component({
  selector: 'app-block',
  inputs: ['block'],
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  public block: Block;

  constructor() {
    console.log(this.block);
  }

  ngOnInit() {
    // console.log(this.blockData);
  }

}
