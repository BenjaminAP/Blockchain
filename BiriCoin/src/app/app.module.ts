import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlockchainComponent } from './components/blockchain/blockchain.component';
import { BlockComponent } from './components/blockchain/block/block.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { BlockchainService } from "./service/blockchain/blockchain.service";
import { TitleCasePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    HeaderComponent,
    BlockComponent,
    WalletComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TitleCasePipe, BlockchainService],
  bootstrap: [AppComponent]
})
export class AppModule{

}
