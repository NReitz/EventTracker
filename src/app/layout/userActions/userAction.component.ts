import {Component} from '@angular/core';

@Component({
    selector: "[et-userActions]",
    templateUrl: './userAction.component.html',
    styleUrls: ['./userAction.component.css']
})

export class UserActionsComponent {
    userActions = [
        { name: 'New Comment', type: "comment", time: "4 minutes ago" },
        { name: '3 New Followers', type: "twitter", time: "12 minutes ago" },
        { name: 'Message Sent', type: "envelope", time: "18 minutes ago" },
        { name: 'New Task', type: "tasks", time: "22 minutes ago" },
        { name: 'Server Rebooted', type: "upload", time: "44 minutes ago" }
    ];
}