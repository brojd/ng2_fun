import { Component } from '@angular/core';
import template from './fu-scheduler.template.html';

@Component({
    selector: 'fu-scheduler',
    template: template,
    styles: [`.fu-scheduler {
        margin: 30px auto;
        padding: 20px;
        background-color: #d6e9c6;
        display: block;
        width:1000px; 
        height:400px;
    }`]
})
export class FuSchedulerComponent {

    constructor() {
        this.events = [
            {id:1, text:"Meeting",   start_date:"09/25/2016 14:00",end_date:"09/25/2016 17:00"},
            {id:2, text:"Conference",start_date:"09/25/2016 12:00",end_date:"09/25/2016 19:00"},
            {id:3, text:"Interview", start_date:"09/25/2016 09:00",end_date:"09/25/2016 10:00"}
        ];
    }
    addEvents() {
        console.log(this.events);
        scheduler.parse(this.events, "json");//takes the name and format of the data source
    }
    ngOnInit() {
        scheduler.init('scheduler_here',new Date(),"week");
    }
}