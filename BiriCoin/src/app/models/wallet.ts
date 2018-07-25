

export class Wallet {

  private _balance: number;
  private _keyPare: object;
  private _publicKey: string;

  constructor(walletObj) {
    
    let temp = JSON.parse(walletObj);

    this._balance = temp.balance;
    this._keyPare = temp.keyPare;
    this._publicKey = temp.publicKey;
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
