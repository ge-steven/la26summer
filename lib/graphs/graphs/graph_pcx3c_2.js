var cy_pcx3c2 = cytoscape({
  container: document.getElementById('graph10-cy_pcx3c'),

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
        'curve-style': 'bezier'
        // 'target-arrow-shape': 'triangle'
      }
    },

    {
      selector: '.cdnd_pcx3c-grabbed-node',
      style: {
        'background-color': 'orange'
      }
    },

    {
      selector: '.cdnd_pcx3c-drop-sibling',
      style: {
        'background-color': 'orange'
      }
    },

    {
      selector: '.cdnd_pcx3c-drop-target',
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
    positions: function(node){return node._private.data.position1}
  },

  elements: data_pcx3c.elements
});


var layoutanimation_pcx3c = function(i) {
  return cy_pcx3c2.layout(
    {
      name: 'preset',
      positions: function(node){return node._private.data["position" + i]}, // map of (node id) => (position obj); or function(node){ return somPos; }
      zoom: 2.5, // the zoom level to set (prob want fit = false if set)
      pan: undefined, // the pan level to set (prob want fit = false if set)
      fit: true, // whether to fit to viewport
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

var sourcesTargets = [
  ['c1', 'p1'],
  ['c1', 'p2'],
  ['c1', 'p3'],

  ['c2', 'p1'],
  ['c2', 'p2'],
  ['c2', 'p4'],

  ['c3', 'p1'],
  ['c3', 'p3'],
  ['c3', 'p5'],

  ['c4', 'p2'],
  ['c4', 'p4'],
  ['c4', 'p6'],

  ['c5', 'p3'],
  ['c5', 'p5'],
  ['c5', 'p6'],

  ['c6', 'p4'],
  ['c6', 'p5'],
  ['c6', 'p6'],
]


var cy_pcx3c2toEventHandler = async function(event) {
  if(event.fragment.id === undefined) {
  }
  else if (event.fragment.id == 'graph11-cy_pcx3c') {
    for (let i = 0; i < 3; i++){
      cy_pcx3c2.add([{group: "edges", data: { id: 'e'+i, source: sourcesTargets[i][0], target: sourcesTargets[i][1]}}])
      await sleep(200);
    }
  }
  else if (event.fragment.id == 'graph12-cy_pcx3c') {
    for (let i = 3; i < sourcesTargets.length; i++){
      cy_pcx3c2.add([{group: "edges", data: { id: 'e'+i, source: sourcesTargets[i][0], target: sourcesTargets[i][1]}}])
      await sleep(200);
    }
  }
  else if (event.fragment.id == 'graph13-cy_pcx3c') {
    layoutanimation_pcx3c(2)
  }
}

Reveal.addEventListener('fragmentshown', cy_pcx3c2toEventHandler);

var cy_pcx3c2toEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {
  }
  else if (event.fragment.id == 'graph11-cy_pcx3c') {
    for (let i = 2; i >= 0; i-=1){
      cy_pcx3c2.$id('e'+i).remove();
    }
  }
  else if (event.fragment.id == 'graph12-cy_pcx3c') {
    for (let i = sourcesTargets.length-1; i > 2; i-=1){
      cy_pcx3c2.$id('e'+i).remove();
    }
  }
  else if (event.fragment.id == 'graph13-cy_pcx3c') {
    layoutanimation_pcx3c(1)
  }
}

Reveal.addEventListener('fragmenthidden', cy_pcx3c2toEventHandlerBack);
