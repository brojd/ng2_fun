import { Component, EventEmitter, Output } from '@angular/core'; // eslint-disable-line no-unused-vars
import template from './fu-classes.template.html';

@Component({
    selector: 'fu-classes',
    template: template
})
export class FuClassesComponent {

    @Output() onChosen = new EventEmitter();

    constructor() {}

    setFormID(classesID) {
        this.onChosen.emit(classesID);
    }
}