import { Component, EventEmitter, Output } from '@angular/core'; // eslint-disable-line no-unused-vars
import template from './fu-trainers.template.html';

@Component({
    selector: 'fu-trainers',
    template: template
})
export class FuTrainersComponent {

    @Output() onChosen = new EventEmitter();

    constructor() {}

    setFormID(trainersID) {
        this.onChosen.emit(trainersID);
    }

}