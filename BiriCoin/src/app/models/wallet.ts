

export class Wallet {

  private _balance: number;
  private _keyPare: object;
  private _publicKey: string;

  constructor(walletJSON) {
    let walletObj = JSON.parse(walletJSON);

    this._balance = walletObj.balance;
    this._keyPare = walletObj.keyPare;
    this._publicKey = walletObj.publicKey;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance = value;
  }

  get keyPare(): object {
    return this._keyPare;
  }

  set keyPare(value: object) {
    this._keyPare = value;
  }

  get publicKey(): string {
    return this._publicKey;
  }

  set publicKey(value: string) {
    this._publicKey = value;
  }
}
