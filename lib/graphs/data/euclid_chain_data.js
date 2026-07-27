var chaingadgetseries = []

var chaingadget1 = [
    [0, 0, 25, ''],
    [10, 0, 25, '']
];

var chaingadgetlabelpos1 = [
    'left',
    'right'
]

var chaingadgetseries2 = []

var chaingadget2 = [
    [0, 0, 25, ''],
    [10, 0, 25, '']
];


var chaingadget3 = [
    [0.5,0.075, 25-0.075*1, '' ],
    [0.5,-0.075*0.075, 25-0.075*1, '' ],
    [1,0, 25-0.075*2, '' ],

    [1.5,0.075, 25-0.075*3, '' ],
    [1.5,-0.075*0.075, 25-0.075*3, '' ],
    [2,0, 25-0.075*4, '' ],

    [2.5,0.075, 25-0.075*5, '' ],
    [2.5,-0.075*0.075, 25-0.075*5, '' ],
    [3,0, 25-0.075*6, '' ],

    [3.5,0.075, 25-0.075*7, '' ],
    [3.5,-0.075*0.075, 25-0.075*7, '' ],
    [4,0, 25-0.075*8, '' ],

    [4.5,0.075, 25-0.075*9, '' ],
    [4.5,-0.075*0.075, 25-0.075*9, '' ],
    [5,0, 25-0.075*10, '' ],

    [5.5,0.075, 25-0.075*9, '' ],
    [5.5,-0.075*0.075, 25-0.075*9, '' ],
    [6,0, 25-0.075*8, '' ],

    [6.5,0.075, 25-0.075*7, '' ],
    [6.5,-0.075*0.075, 25-0.075*7, '' ],
    [7,0, 25-0.075*6, '' ],

    [7.5,0.075, 25-0.075*5, '' ],
    [7.5,-0.075*0.075, 25-0.075*5, '' ],
    [8,0, 25-0.075*4, '' ],

    [8.5,0.075, 25-0.075*3, '' ],
    [8.5,-0.075*0.075, 25-0.075*3, '' ],
    [9,0, 25-0.075*2, '' ],

    [9.5,0.075, 25-0.075*1, '' ],
    [9.5,-0.075*0.075, 25-0.075*1, '' ]
];

var chaingadgetlabelpos2 = [
    'left',
    'right'
]


var chaingadgetedges1 = [];
chaingadgetedges1.push(
            {
                type: 'line3D',
                data: [[0, 0, 25, ''], [10, 0, 25, '']],
                lineStyle: {
                    color: 'grey',
                    width: 2
                }
            }
        )


var chaingadgetedges2 = [];

chaingadgetseries = chaingadgetseries.concat(createNodeSeries("vertex", "scatter3D", chaingadget1, 7, 'grey', chaingadgetlabelpos1, true));
chaingadgetseries2 = chaingadgetseries2.concat(createNodeSeries("vertex", "scatter3D", chaingadget2, 7, 'grey', chaingadgetlabelpos2, true));
chaingadgetseries2 = chaingadgetseries2.concat(createNodeSeries("chain", "scatter3D", chaingadget3, 7, 'blue', [], false));
chaingadgetseries = chaingadgetseries.concat(chaingadgetedges1)
chaingadgetseries2 = chaingadgetseries2.concat(chaingadgetedges2)