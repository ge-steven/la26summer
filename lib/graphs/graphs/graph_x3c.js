var cy_x3c = cytoscape({
  container: document.getElementById('graph1-cy_x3c'),

  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'background-color': 'data(backgroundColor)',
        'border-width': 2,
        'border-color': 'black'
      }
    },

    {
      selector: 'node:parent',
      style: {
        'shape': 'roundrectangle',
        'opacity': 'data(opacity)',
        'label': '',
        'background-color': 'grey',
        'border-color': 'white',
      }
    },

    {
      selector: 'edge',
      style: {
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle'
      }
    },

    {
      selector: '.cdnd_x3c-grabbed-node',
      style: {
        'background-color': 'orange'
      }
    },

    {
      selector: '.cdnd_x3c-drop-sibling',
      style: {
        'background-color': 'orange'
      }
    },

    {
      selector: '.cdnd_x3c-drop-target',
      style: {
        'border-color': 'orange',
        'border-style': 'dashed'
      }
    }
  ],
  layout: {
    name: 'preset',
    zoom : 1.75,
    pan: { x: 150, y: 97 },
    fit: true,
    positions: function(node){return node._private.data.position2}
  },

  elements: data_x3c.elements
});

var layoutanimation_x3c = function(i) {
  return cy_x3c.layout(
    {
      name: 'preset',
      positions: function(node){return node._private.data["position" + i]}, // map of (node id) => (position obj); or function(node){ return somPos; }
      zoom: 2.5, // the zoom level to set (prob want fit = false if set)
      pan: undefined, // the pan level to set (prob want fit = false if set)
      fit: false, // whether to fit to viewport
      animate: true, // whether to transition the node positions
      animationDuration: 600, // duration of animation in ms if enabled
      animationEasing: 'ease-in-out-sine', // easing of animation if enabled
      animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
      ready: undefined, // callback on layoutready
      stop: undefined, // callback on layoutstop
      transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
    }
  ).start();
}

let C =  [[1,2,3], [1,2,4], [1,3,5], [2,4,6], [3,5,6], [4,5,6]]
var C_nodes = []

for (let i = 0; i < C.length; i++) {
  let result = cy_x3c.collection()
  for (let j = 0; j < C[i].length; j++) {
    result = result.union(cy_x3c.nodes()[C[i][j]-1])
  }
  C_nodes.push(result)
}

var bb_x3c = cy_x3c.bubbleSets();

var colors = ['rgba(240, 186, 152, 0.5)', 'rgba(228, 46, 235, 0.2)', 'rgba(12, 40, 40, 0.5)', 'rgba(108, 62, 31, 0.6)', 'rgba(14, 233, 158, 0.3)', 'rgb(27, 33, 11, 0.5)']
var bubbles = []

var colorSets = function myFunction(i) {
  var p = bb_x3c.addPath(C_nodes[i], null, null, { virtualEdges: true,
                                                    style: {
                                                      fill: colors[i],
                                                      stroke: 'black',
                                                    },
                                                  }); 
  bubbles.push(p);
}

var colorRemove = function myFunction(id) {
  bb_x3c.removePath(bubbles[id]);
  bubbles.splice(id, 1)
}


var cy_x3ctoEventHandler = function(event) {
  if(event.fragment.id === undefined) {
  }
  else if (event.fragment.id == 'graph2-cy_x3c') {
    colorSets(0);
  }
  else if (event.fragment.id == 'graph3-cy_x3c') {
    colorSets(1);
  }
  else if (event.fragment.id == 'graph4-cy_x3c') {
    colorSets(2);
  }
  else if (event.fragment.id == 'graph5-cy_x3c') {
    colorSets(3);
  }
  else if (event.fragment.id == 'graph6-cy_x3c') {
    colorSets(4);
  }
  else if (event.fragment.id == 'graph7-cy_x3c') {
    colorSets(5);
  }
  else if (event.fragment.id == 'graph8-cy_x3c') {
    for (let i = 0; i <= 5; i++) {
      colorRemove(0)
    } 
    const indices = [0,1,3];
    for (let i in indices) {
      colorSets(indices[i]);
    }
  }
  else if (event.fragment.id == 'graph9-cy_x3c') {
    for (let i = 0; i <= 5; i++) {
      colorRemove(0)
    } 
    const indices = [0,5]
    for (let i in indices) {
      colorSets(indices[i]);
    }
  }
}

Reveal.addEventListener('fragmentshown', cy_x3ctoEventHandler);

var cy_x3ctoEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {
  }
  else if (event.fragment.id == 'graph2-cy_x3c') {
    colorRemove(0)
  }
  else if (event.fragment.id == 'graph3-cy_x3c') {
    colorRemove(1)
  }
  else if (event.fragment.id == 'graph4-cy_x3c') {
    colorRemove(2)
  }
  else if (event.fragment.id == 'graph5-cy_x3c') {
    colorRemove(3)
  }
  else if (event.fragment.id == 'graph6-cy_x3c') {
    colorRemove(4)
  }
  else if (event.fragment.id == 'graph7-cy_x3c') {
    colorRemove(5)
  }
  else if (event.fragment.id == 'graph8-cy_x3c') {
    for (let i = 0; i <= 5; i++) {
      colorRemove(0)
    } 
    for (let i = 0; i <= 5; i++) {
      colorSets(i);
    }
  }
  else if (event.fragment.id == 'graph9-cy_x3c') {
    for (let i = 0; i <= 5; i++) {
      colorRemove(0)
    } 
    var indices = [0,1,3]
    for (let i in indices) {
      colorSets(indices[i]);
    }
  }
}

Reveal.addEventListener('fragmenthidden', cy_x3ctoEventHandlerBack);
