var TOTAL_ELEMENT_HEIGHT = 1000;
var TOTAL_ELEMENT_WIDTH = 1500;
var TOTAL_TITLE = 'AI vs AMMP vs GeoPhysics';
var NAME_LABEL_SIZE = 12;
var MARKER_DOT_SIZE = 3;


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

});