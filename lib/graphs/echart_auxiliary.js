function createNodeSeries(name, type, data, symbolSize, color, pos, showlabel) {
    var nodesoption = []
    for (let i = 0; i < data.length; i++) {
        nodesoption.push(
            {
                name: name,
                type: type,
                data: [data[i]],
                symbolSize: symbolSize,
                itemStyle: {
                    color: color,
                },
                label: {
                    position: pos[i],
                    show: showlabel,
                },
            }
        )
    }
    return nodesoption
}

function createEdgeSeries(nodes, edges) {
    var sources = [];
    var targets = [];

    for (var i = 0; i < edges.length; i++) {
        sources.push(nodes[edges[i].source]);
        targets.push(nodes[edges[i].target]);
    }

    var edgesoption = []

    for (var i = 0; i < sources.length; i++) {
        edgesoption.push(
            {
                type: 'line3D',
                data: [sources[i], targets[i]],
                lineStyle: {
                    color: 'grey',
                    opacity: 0.6,
                    width: 4
                }
            }
        )
    }

    return edgesoption
}


function generateOptions(data, showgrid, series, 
    viewControl = {
        alpha: 90,
        beta: 0,
        distance: 0,
        minDistance: 0,
        maxDistance: 400,
        center: [0, 0, 0]
    }
) {
    return    {
        legend: {
            data: data,
        },
        grid3D: {
            show: showgrid,
            viewControl: viewControl,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: { color: 'white', opacity: 0, width: 0 },
            },
            axisLabel: {
                show: false
            },
            axisPointer: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    width: 2
                }
            }
        },
        series: series,
        xAxis3D: {
            name: '',
            interval: 1,
            min: -15,
            max: 40
        },
        yAxis3D: {
            name: '',
            interval: 1,
            min: -30,
            max: 25
        },
        zAxis3D: {
            name: '',
            interval: 1,
            min: 0,
            max: 55
        }
    };
}

function generateOptions_comp(data, showgrid, series, 
    viewControl = {
        alpha: 25,
        beta: -42,
        distance: 100,
        minDistance: 0,
        maxDistance: 400,
        center: [-10, -10, 15]
    }
) {
    return    {
        legend: {
            data: data,
        },
        grid3D: {
            show: showgrid,
            viewControl: viewControl,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: { color: 'white', opacity: 0, width: 0 },
            },
            axisLabel: {
                show: true
            },
            axisPointer: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    width: 2
                }
            }
        },
        series: series,
        xAxis3D: {
            name: '',
            interval: 1,
            min: -15,
            max: 40
        },
        yAxis3D: {
            name: '',
            interval: 1,
            min: -30,
            max: 25
        },
        zAxis3D: {
            name: '',
            interval: 1,
            min: 0,
            max: 55
        }
    };
}
