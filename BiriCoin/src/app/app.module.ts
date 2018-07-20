import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

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

const appRouter: Routes = [
  {
    path: '',
    component: BlockchainComponent
  },
  {
    path: 'blockchain',
    component: BlockchainComponent
  },
  {
    path: 'wallet',
    component: WalletComponent
  }
];
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
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [TitleCasePipe, BlockchainService],
  bootstrap: [AppComponent]
})
export class AppModule{

}
