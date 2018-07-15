export class Recipient {

  private _amountReceived: number;
  private _address: string;


  constructor(amountReceived: number, senderWallet: string) {
    this._amountReceived = amountReceived;
    this._address = senderWallet;
  }

  get amountReceived(): number {
    return this._amountReceived;
  }

  set amountReceived(value: number) {
    this._amountReceived = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
}
