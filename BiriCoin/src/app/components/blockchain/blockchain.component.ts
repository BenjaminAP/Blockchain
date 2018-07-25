import { Component, OnInit } from '@angular/core';
import {Blockchain} from "../../models/blockchain";
import {BlockchainService} from "../../service/blockchain/blockchain.service";

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  blockchain: Blockchain;

  constructor(private blockchainService: BlockchainService) {
    this.blockchain = new Blockchain(blockchainService.getBlockchain());
  }

  ngOnInit() {

  }


}
