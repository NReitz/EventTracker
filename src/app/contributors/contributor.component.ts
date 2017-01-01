import {Component} from '@angular/core';

@Component({
    selector: "[et-contributors]",
    templateUrl: './contributor.component.html',
    styleUrls: ['./contributor.component.css']
})

export class ContributorComponent {
    contributors =[
        {
            name: "Nathan Reitz",
            company: null,
            title: "Chairman",
            type: "Committee",
            email: "nareitz@yahoo.com",
            banquets: 4,
            raffles: 5,
            donations: 1
        },
        {
            name: "Jason Curns",
            company: "Mega Arms",
            title: "Fireamrs Director",
            type: "Donor",
            email: "jason.curns@megaarms.com",
            banquets: 1,
            raffles: 0,
            donations: 2
        },
        {
            name: "Elizabeth Reitz",
            company: null,
            title: "Treasurer",
            type: "Committee",
            email: "leppard189@hotmail.com",
            banquets: 2,
            raffles: 3,
            donations: 0
        }
    ];
} 