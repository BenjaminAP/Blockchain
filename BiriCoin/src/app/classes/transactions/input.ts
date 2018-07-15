export class Input {

  private _timestamp: Date;
  private _currentAmount: number;
  private _address: string;
  private _signature: string;


  constructor(timestamp: Date, currentAmount: number, address: string, signature: string) {
    this._timestamp = timestamp;
    this._currentAmount = currentAmount;
    this._address = address;
    this._signature = signature;
  }


  get timestamp(): Date {
    return this._timestamp;
  }

  set timestamp(value: Date) {
    this._timestamp = value;
  }

  get currentAmount(): number {
    return this._currentAmount;
  }

  set currentAmount(value: number) {
    this._currentAmount = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get signature(): string {
    return this._signature;
  }

  set signature(value: string) {
    this._signature = value;
  }
}
