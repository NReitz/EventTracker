$(function() {

    Morris.Area({
        element: 'yearly-comparison-chart',
        data: [{
            period: '2007',
            net: 2666,
            x: 5000,
            y: 4500,
            gross: 8000
        }, {
            period: '2008',
            net: 2778,
            x: 5000,
            y: 4500,
            gross: 8000
        }, {
            period: '2009',
            net: 4912,
            x: 5000,
            y: 4500,
            gross: 8000
        }, {
            period: '2010',
            net: 3767,
            x: 5000,
            y: 4500,
            gross: 8000
        }, {
            period: '2011',
            net: 6810,
            x: 5000,
            y: 4500,
            gross: 8000
        }, {
            period: '2012',
            net: 5670,
            x: 5000,
            y: 4500,
            gross: 8000
        }, {
            period: '2013',
            net: 4820,
            x: 5000,
            y: 4500,
            gross: 8000
        }, {
            period: '2014',
            net: 15073,
            x: 5000,
            y: 4500,
            gross: 8000
        }, {
            period: '2015',
            net: 10687,
            x: 5000,
            y: 4500,
            gross: 8000
        }, {
            period: '2016',
            net: 8432,
            x: 5000,
            y: 4500,
            gross: 8000
        }],
        xkey: 'period',
        ykeys: ['net', 'gross', 'x', 'y'],
        labels: ['Net', 'Gross', 'X', 'Y'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Games",
            value: 12
        }, {
            label: "Live Auction",
            value: 30
        }, {
            label: "Silent Auction",
            value: 20
        }, {
            label: "Buckets",
            value: 7
        }, {
            label: "Other",
            value: 14
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            year: '2012',
            buckets: 50,
            raffles: 40,
            games: 32,
            silentAuction: 400,
            liveAuction: 342,
            banquet: 12
        }, {
            year: '2013',
            buckets: 50,
            raffles: 40,
            games: 32,
            silentAuction: 400,
            liveAuction: 342,
            banquet: 12
        }, {
            year: '2014',
            buckets: 50,
            raffles: 40,
            games: 32,
            silentAuction: 400,
            liveAuction: 342,
            banquet: 12
        }, {
            year: '2015',
            buckets: 50,
            raffles: 40,
            games: 32,
            silentAuction: 400,
            liveAuction: 342,
            banquet: 12
        }, {
            year: '2016',
            buckets: 50,
            raffles: 40,
            games: 32,
            silentAuction: 400,
            liveAuction: 342,
            banquet: 12
        }],
        xkey: 'year',
        ykeys: ['buckets', 'raffles', 'games', 'silentAuction', 'liveAuction', 'banquet'],
        labels: ['Buckets', 'Raffles', 'Games', 'Silent Auction', 'Live Auction', 'Banquet'],
        hideHover: 'auto',
        resize: true
    });
    
});
