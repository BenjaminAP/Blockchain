

export class Wallet {

  private _balance: number;
  private _keyPare: object;
  private _publicKey: string;

  constructor(balance: number, keyPare: object, publicKey: string) {
    this._balance = balance;
    this._keyPare = keyPare;
    this._publicKey = publicKey;
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
