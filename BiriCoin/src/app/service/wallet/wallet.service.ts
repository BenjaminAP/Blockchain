import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private httpClient: HttpClient) {
  }

  getWalletDetails() {
    return this.httpClient.get('http://localhost:3001/wallet/');
  }
}
