import {Component} from '@angular/core';

@Component({
    selector: "[et-navigation]",
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
    navigations = [
        { linkText: 'Dashboard', icon: "dashboard", routerLink: "/dashboard" },
        { linkText: 'Contributors', icon: "address-book-o", routerLink: "/contributors" },
        { linkText: 'Documents', icon: "folder-o", routerLink: "/documents" },
        { linkText: 'Events', icon: "ticket", routerLink: "/events" },
        { linkText: 'Items', icon: "shopping-cart", routerLink: "/items" },
        { linkText: 'Tasks', icon: "tasks", routerLink: "/tasks" },
        { linkText: 'Treasury', icon: "money", routerLink: "/treasury" }
    ];
}