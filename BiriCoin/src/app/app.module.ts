import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { HeaderComponent } from './header/header.component';
import { BlockComponent } from './blockchain/block/block.component';
import { KeyValuePipe } from './pipes/keyValue/key-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    HeaderComponent,
    BlockComponent,
    KeyValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [KeyValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
