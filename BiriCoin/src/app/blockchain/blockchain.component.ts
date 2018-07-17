import { Component, OnInit } from '@angular/core';
import {Blockchain} from "../classes/blockchain";
import {Block} from "../classes/block";

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  blockchain: Blockchain;
  chain: Block[];

  constructor() {
    this.chain = new Array();
  }

  ngOnInit() {

    let chain_json = JSON.parse(`[
    {
        "timestamp": "Genesis Time",
        "prevHash": "------------",
        "hash": "x00000000000",
        "nonce": 0,
        "difficulty": 4,
        "data": []
    },
    {
        "timestamp": 1531614607441,
        "prevHash": "x00000000000",
        "hash": "0003ac00fb000241f7184d8c2c0434213ebef97c988577f3bc92d50206106128",
        "nonce": 4016,
        "difficulty": 3,
        "data": "test Data"
    },
    {
        "timestamp": 1531614749744,
        "prevHash": "0003ac00fb000241f7184d8c2c0434213ebef97c988577f3bc92d50206106128",
        "hash": "0070b257c1c7c001ece3590c78c526f12380e903826c8e7c12c00df13dcc233d",
        "nonce": 1457,
        "difficulty": 2,
        "data": "test Data"
    }
]`);
    //
    // console.log(chain);



    for (let chainKey in chain_json) {
      let tempBlock = chain_json[chainKey];
      let block = new Block(tempBlock.timestamp,
                            tempBlock.prevHash,
                            tempBlock.hash,
                            tempBlock.nonce,
                            tempBlock.difficulty,
                            tempBlock.data);

      // console.log(block.toString());

      this.chain.push(block);
    }

    // console.log(this.chain);
    this.blockchain = new Blockchain(this.chain);

  }

}
