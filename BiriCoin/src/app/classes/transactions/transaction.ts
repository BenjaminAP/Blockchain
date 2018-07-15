
import { Input } from '../transactions/input';
import { Output } from '../transactions/output/output';

export class Transaction {

  private _id: string;
  private _input: Input;
  private _output: Output;

  constructor(id: string, input: Input, output: Output) {
    this._id = id;
    this._input = input;
    this._output = output;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get input(): Input {
    return this._input;
  }

  set input(value: Input) {
    this._input = value;
  }

  get output(): Output {
    return this._output;
  }

  set output(value: Output) {
    this._output = value;
  }
}
