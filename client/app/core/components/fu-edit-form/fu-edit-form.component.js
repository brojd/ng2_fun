import { Component, Input } from '@angular/core'; // eslint-disable-line no-unused-vars
import template from './fu-edit-form.template.html';

@Component({
    selector: 'fu-edit-form',
    template: template
})
export class FuEditFormComponent {

    @Input() formID = 1;

    constructor() {}
}