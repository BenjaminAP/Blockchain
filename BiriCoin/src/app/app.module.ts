import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

//COMPONENTS------------------------------------------------------------------------------------------------------------
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { BlockComponent } from './components/blockchain/block/block.component';
import { BlockchainComponent } from './components/blockchain/blockchain.component';
import { TransactionComponent } from './components/transaction/transaction.component';

//SERVICES--------------------------------------------------------------------------------------------------------------
import { WalletService } from "./service/wallet/wallet.service";
import { BlockchainService } from "./service/blockchain/blockchain.service";

//DIRECTIVES------------------------------------------------------------------------------------------------------------
import { TitleCasePipe } from "@angular/common";

const appRouter: Routes = [
  {
    path: '',
    component: WalletComponent
  },
  {
    path: 'blockchain',
    component: BlockchainComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WalletComponent,
    BlockComponent,
    BlockchainComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule
  ],
  providers: [TitleCasePipe, WalletService, BlockchainService],
  bootstrap: [AppComponent]
})
export class AppModule{

}
