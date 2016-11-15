var TOTAL_ELEMENT_HEIGHT = 1080;
var TOTAL_ELEMENT_WIDTH = 1920;
var TOTAL_TITLE = 'AI vs AMMP vs GeoPhysics';
var NAME_LABEL_SIZE = 12;
var MARKER_DOT_SIZE = 12;

/*
Plotly.d3.csv('http://oblong-relentless.herokuapp.com/', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var data = [{
            x: unpack(rows, 'x'),
            y: unpack(rows, 'y'),
            z: unpack(rows, 'z'),
            text: unpack(rows, 'surname'),
            mode: 'markers+text',
            type: 'scatter3d',
            marker: {
                color: 'rgb(255, 0, 0)',
                size: MARKER_DOT_SIZE
            },
            textfont: {
                size: NAME_LABEL_SIZE
            },
            hoverinfo: 'text'
        },
        {
            alphahull: 7,
            opacity: 0.1,
            type: 'mesh3d',
            x: unpack(rows, 'x'),
            y: unpack(rows, 'y'),
            z: unpack(rows, 'z'),
            hoverinfo: 'x+y+z'
        }
    ];

    var layout = {
        autosize: true,
        height: TOTAL_ELEMENT_HEIGHT,
        width: TOTAL_ELEMENT_WIDTH,
        scene: {
            aspectratio: {
                x: 1,
                y: 1,
                z: 1
            },
            camera: {
                center: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                eye: {
                    x: 1.25,
                    y: 1.25,
                    z: 1.25
                },
                up: {
                    x: 0,
                    y: 0,
                    z: 1
                }
            },
            xaxis: {
                type: 'linear',
                zeroline: false
            },
            yaxis: {
                type: 'linear',
                zeroline: false
            },
            zaxis: {
                type: 'linear',
                zeroline: false
            }
        },
        title: TOTAL_TITLE
    };

    Plotly.newPlot('myDiv', data, layout);

});*/



Plotly.d3.csv('http://oblong-relentless.herokuapp.com/', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row)
        { return row[key]; });}

    var trace1 = {
        x:unpack(rows, 'x'), y: unpack(rows, 'y'), z: unpack(rows, 'z'),
        mode: 'markers',
        marker: {
            size: MARKER_DOT_SIZE,
            line: {
                color: 'rgba(217, 217, 217, 0.14)',
                width: 3},
            opacity: 0.8},
        type: 'scatter3d',
        text: unpack(rows, 'surname'),
        textfont: {
            size: NAME_LABEL_SIZE
        },
        hoverinfo: 'text'
    };

    /*var trace2 = {
        x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
        mode: 'markers',
        marker: {
            color: 'rgb(127, 127, 127)',
            size: 12,
            symbol: 'circle',
            line: {
                color: 'rgb(204, 204, 204)',
                width: 1},
            opacity: 0.8},
        type: 'scatter3d'};*/

    var data = [trace1/*,trace2*/];
    var layout = {margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0},
        height: TOTAL_ELEMENT_HEIGHT,
        width: TOTAL_ELEMENT_WIDTH,
        orientation:101,
        scene:{
            camera:{
                center:{
                    x:0,
                    y:0,
                    z:0
                },
                eye:{//zoom of the thing
                    x:1.25,
                    y:1.25,
                    z:1.25
                }
            },
            xaxis:{
                showgrid:false,
                zeroline:false,
                showticklabels:false,
                title:''
            },
            yaxis:{
                showgrid:false,
                zeroline:false,
                showticklabels:false,
                title:''
            },
            zaxis:{
                showgrid:false,
                zeroline:false,
                showticklabels:false,
                title:''
            }
        }
    };
    Plotly.newPlot('myDiv', data, layout);
});