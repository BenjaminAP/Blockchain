import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";


import { BlockchainComponent } from './blockchain/blockchain.component';
import { HeaderComponent } from './header/header.component';
import { BlockComponent } from './blockchain/block/block.component';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
// import { KeyValuePipe } from './pipes/keyValue/key-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    HeaderComponent,
    BlockComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

}
