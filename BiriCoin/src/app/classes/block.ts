

export class Block {
  private _timestamp: string;
  private _prevHash: string;
  private _string: string;
  private _hash: string;
  private _nonce: string;
  private _difficulty: number;
  private _data: string;

  constructor(timestamp, prevHash, hash, nonce, difficulty, data) {
    this._timestamp = timestamp;
    this._prevHash = prevHash;
    this._hash = hash;
    this._nonce = nonce;
    this._difficulty = difficulty;
    this._data = data;
  }

  get timestamp(): string {
    return this._timestamp;
  }

  set timestamp(value: string) {
    this._timestamp = value;
  }

  get prevHash() {
    return this._prevHash;
  }

  set prevHash(value) {
    this._prevHash = value;
  }

  get string() {
    return this._string;
  }

  set string(value) {
    this._string = value;
  }

  get hash(): string {
    return this._hash;
  }

  set hash(value: string) {
    this._hash = value;
  }

  get nonce(): string {
    return this._nonce;
  }

  set nonce(value: string) {
    this._nonce = value;
  }

  get difficulty(): number {
    return this._difficulty;
  }

  set difficulty(value: number) {
    this._difficulty = value;
  }

  get data(): string {
    return this._data;
  }

  set data(value: string) {
    this._data = value;
  }

  toString() {
    return `
    Block --
      timestamp : ${this._timestamp}
      prevHash : ${this._prevHash}
      hash: ${this._hash}
      nonce: ${this._nonce}
      difficulty: ${this._difficulty}
      data: ${this._data}
    `
  }
}
