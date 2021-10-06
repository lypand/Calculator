import {Button} from './Button.js';
export class SolveButton extends Button{
    constructor(text){
        super(text); 
    }

    onClick(){
        const channel = new BroadcastChannel('solve-channel');
        channel.postMessage(this._name);
    }
}

