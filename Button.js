export class Button extends HTMLButtonElement {
    constructor(name) {
        super();
        this._name = name; 
        this.innerText = name; 
        this.addEventListener('click', () => {
            this.onClick();
        });

    }

    onClick(){
        //alert(this._name + ' button was clicked')
    }
    get name(){
        return this._name;
    }
}



