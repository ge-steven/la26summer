let graph1_euclid_vertices_data = [{
  x: [0.5,0  ,0  ,5,4,5  ,1,0,1  ,1,0,1  ,3,2,3  ,5,4,5  ,1  ,0,1],
  y: [0  ,0  ,0.5,4,4,4.5,5,5,4.5,1,1,0.5,3,3,2.5,4,4,4.5,4  ,4,3.5],
  z: [0  ,0.5,0  ,4,5,5  ,4,5,5  ,3,3,3  ,3,3,3  ,1,0,0  ,0.5,0,0],
  text: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ,''],
  textposition: 'right',
  textfont: {
    family:  'Raleway, sans-serif',
    size: 40
  },
  mode: 'markers+text',
  type: 'scatter3d',
  marker: {
  color: 'rgb(23, 190, 207)',
  size: 4
  }
}
];

let graph1_euclid_vertices_data_label = [{
  x: [0.5,0  ,0  ,5,4,5  ,1,0,1  ,1,0,1  ,3,2,3  ,5,4,5  ,1  ,0,1],
  y: [0  ,0  ,0.5,4,4,4.5,5,5,4.5,1,1,0.5,3,3,2.5,4,4,4.5,4  ,4,3.5],
  z: [0  ,0.5,0  ,4,5,5  ,4,5,5  ,3,3,3  ,3,3,3  ,1,0,0  ,0.5,0,0],
  text: ['', '', '', '', '', '', '', 'h', '', '', '', '', '', '', '', '', '', '', '', '' ,''],
  textposition: 'right',
  textfont: {
    family:  'Raleway, sans-serif',
    size: 40
  },
  mode: 'markers+text',
  type: 'scatter3d',
  marker: {
  color: 'rgb(23, 190, 207)',
  size: 4
  }
}
];

let graph1_euclid_hull = [[{
  x: [0.5,0  ,0  ,5,4,5  ,1,0,1  ,1,0,1  ,3,2,3  ,5,4,5  ,1  ,0,1],
  y: [0  ,0  ,0.5,4,4,4.5,5,5,4.5,1,1,0.5,3,3,2.5,4,4,4.5,4  ,4,3.5],
  z: [0  ,0.5,0  ,4,5,5  ,4,5,5  ,3,3,3  ,3,3,3  ,1,0,0  ,0.5,0,0],
  text: ['', '', '', '', '', '', '', 'h', '', '', '', '', '', '', '', '', '', '', '', '' ,''],
  textposition: 'right',
  textfont: {
    family:  'Raleway, sans-serif',
    size: 40
  },
  mode: 'markers+text',
  type: 'scatter3d',
  marker: {
  color: 'rgb(23, 190, 207)',
  size: 4
  }
},{
  alphahull: -1,
  opacity: 0.5,
  type: 'mesh3d',
  x: [0, 0.5,0],
  y: [5, 0  ,0],
  z: [5, 0  ,0.5]
}
],
[{
  x: [0.5,0  ,0  ,5,4,5  ,1,0,1  ,1,0,1  ,3,2,3  ,5,4,5  ,1  ,0,1],
  y: [0  ,0  ,0.5,4,4,4.5,5,5,4.5,1,1,0.5,3,3,2.5,4,4,4.5,4  ,4,3.5],
  z: [0  ,0.5,0  ,4,5,5  ,4,5,5  ,3,3,3  ,3,3,3  ,1,0,0  ,0.5,0,0],
  text: ['', '', '', '', '', '', '', 'h', '', '', '', '', '', '', '', '', '', '', '', '' ,''],
  textposition: 'right',
  textfont: {
    family:  'Raleway, sans-serif',
    size: 40
  },
  mode: 'markers+text',
  type: 'scatter3d',
  marker: {
  color: 'rgb(23, 190, 207)',
  size: 4
  }
},{
  alphahull: -1,
  opacity: 0.5,
  type: 'mesh3d',
  x: [0, 0  ,5],
  y: [5, 0.5,4],
  z: [5, 0  ,4]
}
],
[{
  x: [0.5,0  ,0  ,5,4,5  ,1,0,1  ,1,0,1  ,3,2,3  ,5,4,5  ,1  ,0,1],
  y: [0  ,0  ,0.5,4,4,4.5,5,5,4.5,1,1,0.5,3,3,2.5,4,4,4.5,4  ,4,3.5],
  z: [0  ,0.5,0  ,4,5,5  ,4,5,5  ,3,3,3  ,3,3,3  ,1,0,0  ,0.5,0,0],
  text: ['', '', '', '', '', '', '', 'h', '', '', '', '', '', '', '', '', '', '', '', '' ,''],
  textposition: 'right',
  textfont: {
    family:  'Raleway, sans-serif',
    size: 40
  },
  mode: 'markers+text',
  type: 'scatter3d',
  marker: {
  color: 'rgb(23, 190, 207)',
  size: 4
  }
},{
  alphahull: -1,
  opacity: 0.5,
  type: 'mesh3d',
  x: [0, 4  ,5],
  y: [5, 4  ,4.5],
  z: [5, 5  ,5]
}
],
[{
  x: [0.5,0  ,0  ,5,4,5  ,1,0,1  ,1,0,1  ,3,2,3  ,5,4,5  ,1  ,0,1],
  y: [0  ,0  ,0.5,4,4,4.5,5,5,4.5,1,1,0.5,3,3,2.5,4,4,4.5,4  ,4,3.5],
  z: [0  ,0.5,0  ,4,5,5  ,4,5,5  ,3,3,3  ,3,3,3  ,1,0,0  ,0.5,0,0],
  text: ['', '', '', '', '', '', '', 'h', '', '', '', '', '', '', '', '', '', '', '', '' ,''],
  textposition: 'right',
  textfont: {
    family:  'Raleway, sans-serif',
    size: 40
  },
  mode: 'markers+text',
  type: 'scatter3d',
  marker: {
  color: 'rgb(23, 190, 207)',
  size: 4
  }
},{
  alphahull: -1,
  opacity: 0.5,
  type: 'mesh3d',
  x: [0, 1  ,3],
  y: [5, 4.5,3],
  z: [5, 5  ,3]
}
],
[{
  x: [0.5,0  ,0  ,5,4,5  ,1,0,1  ,1,0,1  ,3,2,3  ,5,4,5  ,1  ,0,1],
  y: [0  ,0  ,0.5,4,4,4.5,5,5,4.5,1,1,0.5,3,3,2.5,4,4,4.5,4  ,4,3.5],
  z: [0  ,0.5,0  ,4,5,5  ,4,5,5  ,3,3,3  ,3,3,3  ,1,0,0  ,0.5,0,0],
  text: ['', '', '', '', '', '', '', 'h', '', '', '', '', '', '', '', '', '', '', '', '' ,''],
  textposition: 'right',
  textfont: {
    family:  'Raleway, sans-serif',
    size: 40
  },
  mode: 'markers+text',
  type: 'scatter3d',
  marker: {
  color: 'rgb(23, 190, 207)',
  size: 4
  }
},{
  alphahull: -1,
  opacity: 0.5,
  type: 'mesh3d',
  x: [0, 1  ,1],
  y: [5, 5  ,1],
  z: [5, 4  ,3]
}
]];

let graph1_euclid_hull1 = [{
  x: [0.5,0  ,0  ,5,4,5  ,1,0,1  ,1,0,1  ,3,2,3  ,5,4,5  ,1  ,0,1],
  y: [0  ,0  ,0.5,4,4,4.5,5,5,4.5,1,1,0.5,3,3,2.5,4,4,4.5,4  ,4,3.5],
  z: [0  ,0.5,0  ,4,5,5  ,4,5,5  ,3,3,3  ,3,3,3  ,1,0,0  ,0.5,0,0],
  text: ['', '', '', '', '', '', '', 'h', '', '', '', '', '', '', '', '', '', '', '', '' ,''],
  textposition: 'right',
  textfont: {
    family:  'Raleway, sans-serif',
    size: 40
  },
  mode: 'markers+text',
  type: 'scatter3d',
  marker: {
  color: 'rgb(23, 190, 207)',
  size: 4
  }
},{
  alphahull: -1,
  opacity: 0.5,
  type: 'mesh3d',
  x: [1,0,1],
  y: [5,5,4.5],
  z: [4,5,5]
}
]