import { Block } from './/block';


export class Blockchain {

  private _chain: Block[];

  constructor(chain: Block[]) {
    this._chain = chain;
  }


  get chain(): Block[] {
    return this._chain;
  }

  set chain(value: Block[]) {
    this._chain = value;
  }
}
