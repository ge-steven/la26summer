var setnodesgadgetseries = []

var setnodesgadget1 = [
    [0, 0, 0, 'Cᵢ'],    // 0        u1
    [0, 0, 0, 'Cᵢ'],  // 1        u2
    [0, 0, 0, 'Cᵢ'], // 2        u3
];

var setnodesgadgetlabelpos1 = [
    'bottom',
    'bottom',
    'bottom'
]

var setnodesgadgetseries2 = []

var setnodesgadget2 = [
    [0, 3.5, 0, 'Cᵢ'],    // 0        u1
    [-2.5, 0, 0, ''],  // 1        u2
    [2.5, 0, 0, ''], // 2        u3
];

var setnodesgadgetlabelpos2 = [
    'left',
    'bottom',
    'bottom'
]


var setnodesgadgetedges1 = [];
setnodesgadgetedges1.push(
            {
                type: 'line3D',
                data: [[0, 0, 0, 'Cᵢ'], [0, 5, 0, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )
setnodesgadgetedges1.push(
            {
                type: 'line3D',
                data: [[0, 0, 0, 'Cᵢ'], [-7.5, 0, 0, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )
setnodesgadgetedges1.push(
            {
                type: 'line3D',
                data: [[0, 0, 0, 'Cᵢ'], [7.5, 0, 0, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )


var setnodesgadgetedges2 = [];
setnodesgadgetedges2.push(
            {
                type: 'line3D',
                data: [[0, 3.5, 0, 'Cᵢ'], [0, 5, 0, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )
setnodesgadgetedges2.push(
            {
                type: 'line3D',
                data: [[-2.5, 0, 0, 'Cᵢ'], [-7.5, 0, 0, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )
setnodesgadgetedges2.push(
            {
                type: 'line3D',
                data: [[2.5, 0, 0, 'Cᵢ'], [7.5, 0, 0, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )

setnodesgadgetseries = setnodesgadgetseries.concat(createNodeSeries("3-sets", "scatter3D", setnodesgadget1, 7, 'orange', setnodesgadgetlabelpos1, true));
setnodesgadgetseries2 = setnodesgadgetseries2.concat(createNodeSeries("3-sets", "scatter3D", setnodesgadget2, 7, 'orange', setnodesgadgetlabelpos2, true));
setnodesgadgetseries = setnodesgadgetseries.concat(setnodesgadgetedges1)
setnodesgadgetseries2 = setnodesgadgetseries2.concat(setnodesgadgetedges2)
