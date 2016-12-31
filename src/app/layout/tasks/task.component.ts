import {Component} from '@angular/core';

@Component({
    selector: "[et-tasks]",
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

export class TaskComponent {
    tasks = [
        { name: 'Task 1', type: "1" },
        { name: 'Todd', type: "2" },
        { name: 'Task 3', type: "3" }
    ];
}