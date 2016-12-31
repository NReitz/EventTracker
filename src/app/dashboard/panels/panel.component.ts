import {Component} from '@angular/core';

@Component({
    selector: "[et-panels]",
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})

export class PanelComponent {
    panels = [
        { title: "26", subTitle: "Tickets Remaining", linkText: 'View Details', icon: "dashboard", url: "#", color: "primary" },
        { title: "12", subTitle: "New Tasks", linkText: 'View Details', icon: "tasks", url: "#", color: "green" },
        { title: "124", subTitle: "Items", linkText: 'View Details', icon: "shopping-cart", url: "#", color: "yellow" },
        { title: "$1,300", subTitle: "In Underwriting", linkText: 'View Details', icon: "dollar", url: "#", color: "red" }
    ];
}