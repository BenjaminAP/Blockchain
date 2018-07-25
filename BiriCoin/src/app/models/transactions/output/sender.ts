

export class Sender {

  private _expectedBalance: number;
  private _address: string;

  constructor(expectedBalance: number, senderWallet: string) {
    this._expectedBalance = expectedBalance;
    this._address = senderWallet;
  }

  get expectedBalance(): number {
    return this._expectedBalance;
  }

  set expectedBalance(value: number) {
    this._expectedBalance = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
}
