import {Button} from './Button.js';
export class ClearButton extends Button{
    constructor(text){
        super(text); 
    }

    onClick(){
        const channel = new BroadcastChannel('clear-channel');
        channel.postMessage(this._name);
    }
}

