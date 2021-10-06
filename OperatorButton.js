import {Button} from './Button.js';
export class OperatorButton extends Button{
    constructor(text){
        super(text); 
    }

    onClick(){
        const channel = new BroadcastChannel('operator-channel');
        channel.postMessage(this._name);
    }
}

