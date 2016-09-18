import { Component } from '@angular/core'; // eslint-disable-line no-unused-vars
import template from './fu-editor.template.html';

@Component({
    selector: 'fu-editor',
    template: template
})
export class FuEditorComponent {

    constructor() {
        this.currentForm = 1;
    }
    setFormID(formID) {
        this.currentForm = formID;
    }
}