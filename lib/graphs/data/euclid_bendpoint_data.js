var bendpointgadgetseries = []

var bendpointgadget1 = [
    [0, 3, 0, ''],    // 0        u1
];

var bendpointgadgetlabelpos1 = [
    'right'
]

var bendpointgadgetseries2 = []

var bendpointgadget2 = [
    [0, 3, 0, '']
];

var bendpointgadgetlabelpos2 = [
    'right'
]


var bendpointgadgetedges1 = [];
bendpointgadgetedges1.push(
            {
                type: 'line3D',
                data: [[0, 3, 0, ''], [0, 0, 0, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )
bendpointgadgetedges1.push(
            {
                type: 'line3D',
                data: [[0, 3, 0, ''], [7.5, 3, 0, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )


var bendpointgadgetedges2 = [];
bendpointgadgetedges2.push(
            {
                type: 'line3D',
                data: [[0, 3, 0, ''], [0, 0, 0, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )
bendpointgadgetedges2.push(
            {
                type: 'line3D',
                data: [[0, 3, 0, ''], [7.5, 3, 0, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )

bendpointgadgetseries = bendpointgadgetseries.concat(createNodeSeries("bend point", "scatter3D", bendpointgadget1, 0, '', bendpointgadgetlabelpos1, true));
bendpointgadgetseries2 = bendpointgadgetseries2.concat(createNodeSeries("bend point", "scatter3D", bendpointgadget2, 7, 'red', bendpointgadgetlabelpos2, true));
bendpointgadgetseries = bendpointgadgetseries.concat(bendpointgadgetedges1)
bendpointgadgetseries2 = bendpointgadgetseries2.concat(bendpointgadgetedges2)
