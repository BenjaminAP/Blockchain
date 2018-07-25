import { Component, OnInit } from '@angular/core';
import {Wallet} from "../../models/wallet";
import {WalletService} from "../../service/wallet/wallet.service";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  wallet: Wallet;

  constructor(private walletService: WalletService) {

    this.getWalletDetails();
  }

  ngOnInit() {

  }

  getWalletDetails() {
    this.walletService.getWalletDetails().subscribe(
      (response) => {
        this.wallet = new Wallet(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
