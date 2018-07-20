import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

//COMPONENTS------------------------------------------------------------------------------------------------------------
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlockComponent } from './components/blockchain/block/block.component';
import { BlockchainComponent } from './components/blockchain/blockchain.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { TransactionComponent } from './components/transaction/transaction.component';

//SERVICES--------------------------------------------------------------------------------------------------------------
import { BlockchainService } from "./service/blockchain/blockchain.service";

//DIRECTIVES------------------------------------------------------------------------------------------------------------
import { TitleCasePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlockComponent,
    BlockchainComponent,
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
