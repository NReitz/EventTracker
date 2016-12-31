import {Component} from '@angular/core';

@Component({
    selector: "[et-charts]",
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})

export class ChartComponent {
    charts = [
        { 
            title: "Yearly Income", 
            icon: "area-chart", 
            chart: "yearly-comparison-chart" },
        { 
            title: "Revenue Sources by Year", 
            icon: "bar-chart-o", 
            chart: "morris-bar-chart" }
    ];
}