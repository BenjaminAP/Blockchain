import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { BlockComponent } from './blockchain/block/block.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionComponent } from './transaction/transaction.component';
import {TitleCasePipe} from "@angular/common";
// import { KeyValuePipe } from './pipes/keyValue/key-value.pipe';

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
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule{

}
