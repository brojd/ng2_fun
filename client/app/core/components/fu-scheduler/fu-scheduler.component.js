import { Component } from '@angular/core';
import template from './fu-scheduler.template.html';

@Component({
    selector: 'fu-scheduler',
    template: template,
    styles: [`.fu-scheduler {
        width: 800px;
        margin: 30px auto;
        background-color: #d6e9c6;
        display: block;
        min-height: 400px;
    }`]
})
export class FuSchedulerComponent {

    constructor() {}
}