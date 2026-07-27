let cy3 = cytoscape({
  container: document.getElementById('graph3-cy'),
  elements: data3.elements,
  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'font-family': "Helvetica,Arial,sans-serif",
        'background-color': 'data(backgroundColor1)',
        'border-width': 4,
        'border-color': 'black',
        'width' : 40,
        'height': 40,
        "font-size": 38
      }
    },
    {
      selector: 'edge',
      style: {
        'control-point-distances': 0,
        'control-point-weights': 0.5,
        'edge-distances': 'node-position',
        'curve-style': 'unbundled-bezier', 
        'lineColor': 'black',
        'opacity': '0.0'
      }
    },
    {
        selector: 'node.selected',
        style: {
            'background-color': 'green'
        }
    },
    {
        selector: 'node.highlight',
        style: {
            'background-color': 'orange'
        }
    },
    {
        selector: 'node.highlightRight',
        style: {
            'background-color': 'blue'
        }
    },
    {
        selector: 'node.highlightLeft',
        style: {
            'background-color': 'red'
        }
    },
    {
        selector: 'node.semitransp',
        style:{ 'opacity': '0.5' }
    },
    {
        selector: 'edge.highlight',
        style: { 'mid-target-arrow-color': '#FFF', lineColor: 'blue' }
    },
    {
        selector: 'edge.semitransp',
        style:{ 'opacity': '0.2' }
    }
  ],
  layout: {
    name: 'preset',
    fit: true,
    positions: function(node){return node._private.data.position1}
  }
});

cy3.on('mouseover', 'node', function(e){
  var sel = e.target;
  highlight(sel, cy3);
});
cy3.on('mouseout', 'node', function(e){
  dehighlight(cy3);
});

cy3.on('mouseover', 'edge', function(e){
  var sel = e.target;
  sel.addClass('highlight');
});
cy3.on('mouseout', 'edge', function(e){
  var sel = e.target;
  sel.removeClass('highlight');
});

var cy3_nodes1 = []
var cy3_nodes2 = []
var cy3_edges1 = []
var cy3_edges2 = []

var initcy3nodes = function() {
  var indices1 = [3, 6, 0, 4, 2, 11, 9, 10, 5, 7, 1, 8]
  var indices2 = [21, 19, 14, 16, 20, 23, 15, 12, 22, 13, 17, 18]

  for(let i = 0; i < 11; i++){
    if ((i+1) % 3 != 0) {
      cy3.add([
        { group: "edges", data: { id: 100+i, source: indices1[i], target: indices1[i+1], lineColor: "blue"}}
      ])
    }
  }
  for(let i = 0; i < 11; i++){
    if ((i+1) % 3 != 0) {
      cy3.add([
        { group: "edges", data: { id: 200+i, source: indices2[i], target: indices2[i+1], lineColor: "blue"}}
      ])
    }
  }

  for(let i = 0; i < 8; i+=2) {
    cy3_edges1.push(cy3.edges().slice(i,i+2))
  }
  for(let i = 8; i < 16; i+=2) {
    cy3_edges2.push(cy3.edges().slice(i,i+2))
  }
}

initcy3nodes()

var cy3_bb = cy3.bubbleSets();

var cy3_node_colors = [
  'lightgreen', 'red', 'yellow', 'lightgreen', 'lightgreen', 'red', 'yellow', 'yellow', 'lightgreen', 'lightgreen', 'lightgreen', 'red',
  'red', 'lightgreen', 'yellow', 'red', 'red', 'lightgreen', 'yellow', 'yellow', 'red', 'red', 'red', 'lightgreen',
]


var cytoEventHandler = async function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph3-cy') {
    cy3.resize();
    cy3.fit();
    layoutanimation(1, cy3);
  }
  else if (event.fragment.id == 'graph32-cy') {
    layoutanimation(2, cy3);
  }
  else if (event.fragment.id == 'graph33-cy') {
    for(let i = 0; i < 4; i++) {
      cy3_bb.addPath(cy3_edges1[i].connectedNodes(), cy3_edges1[i], null);
      await sleep(150);
    }
    cy3.nodes()[24].animate({
      css: {
        'opacity': 1
        }
      },{
      duration: 200
      }
    );
  }
  else if (event.fragment.id == 'graph34-cy') {
    for(let i = 12; i < 20; i++) {
      cy3.nodes()[i].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
      );
    }
    for(let i = 20; i < 24; i++) {
      cy3.nodes()[i].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
      );
    }
  }
  else if (event.fragment.id == 'graph35-cy') {
    layoutanimation(3, cy3);
  }
  else if (event.fragment.id == 'graph36-cy') {
    for(let i = 0; i < 4; i++) {
      cy3_bb.addPath(cy3_edges2[i].connectedNodes(), cy3_edges2[i], null);
      await sleep(150);
    }
    cy3.nodes()[25].animate({
      css: {
        'opacity': 1
        }
      },{
      duration: 200
      }
    );
  }
  else if (event.fragment.id == 'graph37-cy') {
    cy3.nodes()[26].animate({
      css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
    );
    cy3.nodes()[0].animate({
      style: {
          'background-color': cy3_node_colors[0],
          }
        },{
        duration: 200
        }
    );
    cy3.nodes()[12].animate({
      style: {
          'background-color': cy3_node_colors[12],
          }
        },{
        duration: 200
        }
    );
  }
  else if (event.fragment.id == 'graph38-cy') {
    cy3.nodes()[27].animate({
    css: {
      'opacity': 1
      }
    },{
    duration: 200
    }
  );
  cy3.nodes()[1].animate({
    css: {
        'background-color': cy3_node_colors[1],
        }
      },{
      duration: 200
      }
  );
  cy3.nodes()[13].animate({
    css: {
        'background-color': cy3_node_colors[13],
        }
      },{
      duration: 200
      }
  );
  }
  else if (event.fragment.id == 'graph39-cy') {
    cy3.nodes()[28].animate({
    css: {
      'opacity': 1
      }
    },{
    duration: 200
    }
  );
  cy3.nodes()[2].animate({
    css: {
        'background-color': cy3_node_colors[2],
        }
      },{
      duration: 200
      }
  );
  cy3.nodes()[14].animate({
    css: {
        'background-color': cy3_node_colors[14],
        }
      },{
      duration: 200
      }
  );
  }
  else if (event.fragment.id == 'graph310-cy') {
    for(let i = 29; i < 38; i++) {
      cy3.nodes()[i].animate({
      css: {
        'opacity': 1
        }
      },{
      duration: 200
      }
    );
    }
    for(let i = 3; i < 12; i++) {
      cy3.nodes()[i].animate({
      css: {
        'background-color': cy3_node_colors[i],
        }
      },{
      duration: 200
      }
    );
  }
    for(let i = 15; i < 24; i++) {
      cy3.nodes()[i].animate({
      css: {
        'background-color': cy3_node_colors[i],
        }
      },{
      duration: 200
      }
    );
    }
  }
}

Reveal.addEventListener('fragmentshown', cytoEventHandler);

var cytoEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph3-cy') {
    cy3.resize();
    cy3.fit();
    layoutanimation(1, cy3);
  }
  else if (event.fragment.id == 'graph32-cy') {
    layoutanimation(1, cy3);
  }
  else if (event.fragment.id == 'graph33-cy') {
    for(let i = 0; i < 4; i++) {
      cy3_bb.getPaths()[0].remove();
    }
    cy3.nodes()[24].animate({
      css: {
        'opacity': 0
        }
      },{
      duration: 0
      }
    );
  }
  else if (event.fragment.id == 'graph34-cy') {
    for(let i = 12; i < 20; i++) {
      cy3.nodes()[i].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 0
        }
      );
    }
    for(let i = 20; i < 24; i++) {
      cy3.nodes()[i].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 0
        }
      );
    }
  }
  else if (event.fragment.id == 'graph35-cy') {
    layoutanimation(2, cy3);
  }
  else if (event.fragment.id == 'graph36-cy') {
    for(let i = 0; i < 4; i++) {
      cy3_bb.getPaths()[4].remove();
    }
    cy3.nodes()[25].animate({
      css: {
        'opacity': 0
        }
      },{
      duration: 0
      }
    );
  }
  else if (event.fragment.id == 'graph37-cy') {
    cy3.nodes()[26].animate({
      css: {
        'opacity': 0
        }
      },{
      duration: 0
      }
    );
    cy3.nodes()[0].animate({
      css: {
          'background-color': 'white',
          }
        },{
        duration: 200
        }
    );
    cy3.nodes()[12].animate({
      css: {
          'background-color': 'white',
          }
        },{
        duration: 200
        }
    );
  }
  else if (event.fragment.id == 'graph38-cy') {
    cy3.nodes()[27].animate({
      css: {
        'opacity': 0
        }
      },{
      duration: 0
      }
    );
    cy3.nodes()[1].animate({
      css: {
          'background-color': 'white',
          }
        },{
        duration: 200
        }
    );
    cy3.nodes()[13].animate({
      css: {
          'background-color': 'white',
          }
        },{
        duration: 200
        }
    );
  }
  else if (event.fragment.id == 'graph39-cy') {
    cy3.nodes()[28].animate({
      css: {
        'opacity': 0
        }
      },{
      duration: 0
      }
    );
    cy3.nodes()[2].animate({
      css: {
          'background-color': 'white',
          }
        },{
        duration: 200
        }
    );
    cy3.nodes()[14].animate({
      css: {
          'background-color': 'white',
          }
        },{
        duration: 200
        }
    );
  }
  else if (event.fragment.id == 'graph310-cy') {
    for(let i = 29; i < 38; i++) {
      cy3.nodes()[i].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 0
        }
      );
    }
    for(let i = 3; i < 12; i++) {
      cy3.nodes()[i].animate({
      css: {
        'background-color': 'white',
        }
      },{
      duration: 200
      }
    );
  }
    for(let i = 15; i < 24; i++) {
      cy3.nodes()[i].animate({
      css: {
        'background-color': 'white',
        }
      },{
      duration: 200
      }
    );
    }
}
}

var initcy3 = function() {
  for(let i = 0; i < 38; i++) {
    cy3.nodes('[id = "'+ i +'"]').style('opacity', '0');
  }

  cy3.nodes('[id = "24"]').style('border-color', 'white');
  cy3.nodes('[id = "25"]').style('border-color', 'white');


  for(let i = 26; i < 38; i++) {
    cy3.nodes('[id = "'+i+'"]').style('border-color', 'white');
  }

  for(let i = 0; i < 8; i++) {
    cy3.nodes('[id = "'+ i +'"]').style('border-color', 'black');
    cy3.nodes('[id = "'+ i +'"]').style('background-color', 'white');
    cy3.nodes('[id = "'+ i +'"]').style('color', 'black');
    cy3.nodes('[id = "'+ i +'"]').style('opacity', '1');
  }
  for(let i = 8; i < 12; i++) {
    cy3.nodes('[id = "'+ i +'"]').style('color', 'black');
    cy3.nodes('[id = "'+ i +'"]').style('border-color', 'black');
    cy3.nodes('[id = "'+ i +'"]').style('background-color', 'white');
    cy3.nodes('[id = "'+ i +'"]').style('opacity', '1');
  }
  for(let i = 12; i < 20; i++) {
    cy3.nodes('[id = "'+ i +'"]').style('border-color', 'black');
    cy3.nodes('[id = "'+ i +'"]').style('background-color', 'white');
    cy3.nodes('[id = "'+ i +'"]').style('color', 'black');
  }
  for(let i = 20; i < 24; i++) {
    cy3.nodes('[id = "'+ i +'"]').style('border-color', 'black');
    cy3.nodes('[id = "'+ i +'"]').style('background-color', 'white');
    cy3.nodes('[id = "'+ i +'"]').style('color', 'black');
  }
}


initcy3()

Reveal.addEventListener('fragmenthidden', cytoEventHandlerBack);
