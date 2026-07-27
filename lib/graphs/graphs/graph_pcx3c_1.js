let cy_pcx3c1 = cytoscape({
  container: document.getElementById('graph1-cy_pcx3c'),

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


for (let i = 0; i < C.length; i++) {
  let result = cy_pcx3c1.collection()
  for (let j = 0; j < C[i].length; j++) {
    result = result.union(cy_pcx3c1.nodes()[C[i][j]-1])
  }
  C_nodes.push(result)
}

var bb_pcx3c = cy_pcx3c1.bubbleSets();

var colors = ['rgba(240, 186, 152, 0.5)', 'rgba(228, 46, 235, 0.2)', 'rgba(12, 40, 40, 0.5)', 'rgba(108, 62, 31, 0.6)', 'rgba(14, 233, 158, 0.3)', 'rgb(27, 33, 11, 0.5)']
var bubblespcx3c = []

var colorSetsPCX3C = function myFunction(i) {
  var p = bb_pcx3c.addPath(C_nodes[i], null, null, { virtualEdges: true,
                                                    style: {
                                                      fill: colors[i],
                                                      stroke: 'black',
                                                    },
                                                  }); 
  bubblespcx3c.push(p);
}

var colorRemovePCX3C = function myFunction(id) {
  bb_pcx3c.removePath(bubblespcx3c[id]);
  bubblespcx3c.splice(id, 1)
}


Reveal.addEventListener('fragmentshown', cy_pcx3c1toEventHandler);

var cy_pcx3c1toEventHandler = function(event) {
  if(event.currentSlide.id === 'graph_pcx3c') {
    for (let i = 0; i <= 5; i++) {
      colorRemovePCX3C(0)
    } 
    const indices = [0,5]
    for (let i in indices) {
      colorSetsPCX3C(indices[i]);
    }
  }
}

Reveal.addEventListener('slidechanged', cy_pcx3c1toEventHandler);


var cy_pcx3c1toEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {
  }
  else if (event.fragment.id == 'graph2-cy_pcx3c1') {
    colorRemovePCX3C(0)
  }
  else if (event.fragment.id == 'graph3-cy_pcx3c1') {
    colorRemovePCX3C(1)
  }
  else if (event.fragment.id == 'graph4-cy_pcx3c1') {
    colorRemovePCX3C(2)
  }
  else if (event.fragment.id == 'graph5-cy_pcx3c1') {
    colorRemovePCX3C(3)
  }
  else if (event.fragment.id == 'graph6-cy_pcx3c1') {
    colorRemovePCX3C(4)
  }
  else if (event.fragment.id == 'graph7-cy_pcx3c1') {
    colorRemovePCX3C(5)
  }
  else if (event.fragment.id == 'graph8-cy_pcx3c1') {
    for (let i = 0; i <= 5; i++) {
      colorRemovePCX3C(0)
    } 
    for (let i = 0; i <= 5; i++) {
      colorSetsPCX3C(i);
    }
  }
  else if (event.fragment.id == 'graph9-cy_pcx3c1') {
    for (let i = 0; i <= 5; i++) {
      colorRemovePCX3C(0)
    } 
    var indices = [0,1,3]
    for (let i in indices) {
      colorSetsPCX3C(indices[i]);
    }
  }
}

Reveal.addEventListener('fragmenthidden', cy_pcx3c1toEventHandlerBack);
