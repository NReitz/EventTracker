import {Component} from '@angular/core';

@Component({
    selector: "[et-alerts]",
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent {
    alerts = [
        { name: 'New Comment', type: "comment", time: "54 minutes ago" },
        { name: '3 New Followers', type: "twitter", time: "12 minutes ago" },
        { name: 'Message Sent', type: "envelope", time: "18 minutes ago" },
        { name: 'New Task', type: "tasks", time: "22 minutes ago" },
        { name: 'Server Rebooted', type: "upload", time: "44 minutes ago" }
    ];
} 