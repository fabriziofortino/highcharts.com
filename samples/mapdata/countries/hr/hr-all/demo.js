$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "hr-ka",
            "value": 0
        },
        {
            "hc-key": "hr-zg",
            "value": 1
        },
        {
            "hc-key": "hr-kz",
            "value": 2
        },
        {
            "hc-key": "hr-gz",
            "value": 3
        },
        {
            "hc-key": "hr-5926",
            "value": 4
        },
        {
            "hc-key": "hr-sb",
            "value": 5
        },
        {
            "hc-key": "hr-zd",
            "value": 6
        },
        {
            "hc-key": "hr-pg",
            "value": 7
        },
        {
            "hc-key": "hr-2228",
            "value": 8
        },
        {
            "hc-key": "hr-vs",
            "value": 9
        },
        {
            "hc-key": "hr-va",
            "value": 10
        },
        {
            "hc-key": "hr-sm",
            "value": 11
        },
        {
            "hc-key": "hr-is",
            "value": 12
        },
        {
            "hc-key": "hr-ob",
            "value": 13
        },
        {
            "hc-key": "hr-sp",
            "value": 14
        },
        {
            "hc-key": "hr-vp",
            "value": 15
        },
        {
            "hc-key": "hr-kk",
            "value": 16
        },
        {
            "hc-key": "hr-me",
            "value": 17
        },
        {
            "hc-key": "hr-dn",
            "value": 18
        },
        {
            "hc-key": "hr-sd",
            "value": 19
        },
        {
            "hc-key": "hr-ls",
            "value": 20
        },
        {
            "hc-key": "hr-bb",
            "value": 21
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/hr/hr-all.js">Croatia</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/hr/hr-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
