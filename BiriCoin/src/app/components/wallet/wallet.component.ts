import { Component, OnInit } from '@angular/core';
import {Wallet} from "../../models/wallet";
import {WalletService} from "../../service/wallet/wallet.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  wallet: Wallet;

  constructor(private walletService: WalletService) {
    this.wallet =  new Wallet(walletService.getWalletBalance(), walletService.getWalletKeyPare(), walletService.getWalletPublicKey());
  }

  ngOnInit() {
  }

  getWalletDetails() {
    this.walletService.getWalletDetails().subscribe(
      (response) => {
        let tempData = JSON.stringify(response);
        console.log(tempData);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
