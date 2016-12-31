import {Component} from '@angular/core';

@Component({
    selector: "[et-notifications]",
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})

export class NotificationComponent {
    notifications = [
        { title: 'Net Revenue', icon: "money", time: "$23,455" },
        { title: 'Gross Revenue', icon: "dollar", time: "$54,534" },
        { title: 'Message Sent', icon: "envelope", time: "25 minutes ago" },
        { title: 'New Task', icon: "tasks", time: "32 minutes ago" },
        { title: 'Contribution Received', icon: "money", time: "48 minutes ago" },
    ];
}