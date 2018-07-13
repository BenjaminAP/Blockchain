import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class P2pService {

  constructor(private http: Http) { }

  getConnectedServers() {
    return this.http.get('localhost:3001/connected_peers');
  }
}
