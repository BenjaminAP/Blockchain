import { Sender } from '../output/sender'
import { Recipient } from '../output/recipient'

export class Output {
  private _sender: Sender;
  private _recipient: Recipient;


  constructor(sender: Sender, recipient: Recipient) {
    this._sender = sender;
    this._recipient = recipient;
  }

  get sender(): Sender {
    return this._sender;
  }

  set sender(value: Sender) {
    this._sender = value;
  }

  get recipient(): Recipient {
    return this._recipient;
  }

  set recipient(value: Recipient) {
    this._recipient = value;
  }
}
