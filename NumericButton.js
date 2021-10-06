import {Button} from './Button.js';
export class NumericButton extends Button{
    constructor(text){
        super(text); 
    }

    onClick(){
        const channel = new BroadcastChannel('numeric-channel');
        channel.postMessage(this._name);
    }
}

