const rawX = [
  -4.00, -2.94, -2.43, -1.85, -1.53,
  -0.05,  0.11,  0.18,  0.78,  4.04
];

// scale the given coordinates into the canvas
const X_SCALE = 180;
const X_OFFSET = 820;
const Y_POS = 35;

const visiblePositions = {};
for (let i = 0; i < rawX.length; i++) {
  visiblePositions[`v${i}`] = {
    x: X_OFFSET + rawX[i] * X_SCALE,
    y: Y_POS
  };
}

const cy_conjecture2 = cytoscape({
  container: document.getElementById('graph-conjecture-2-cy'),

  elements: [
    // 10 visible vertices
    ...Array.from({ length: 10 }, (_, i) => ({
      data: { id: `v${i}` },
      classes: 'visible'
    })),

    // 2 invisible auxiliary vertices
    { data: { id: 'aux9' }, classes: 'aux' }, // starts at vertex 9
    { data: { id: 'aux5' }, classes: 'aux' }, // starts at vertex 5

    // consecutive pairs: straight edges
    { data: { id: 'e12', source: 'v1', target: 'v2', cpd: 0, cpw: 0.5 } },
    { data: { id: 'e34', source: 'v3', target: 'v4', cpd: 0, cpw: 0.5 } },
    { data: { id: 'e67', source: 'v6', target: 'v7', cpd: 0, cpw: 0.5 } },

    // long edges:
    // initial pairs are [0,9] and [5,8]
    // morphToImage2Conjecture2 will turn them into [0,5] and [8,9]
    { data: { id: 'e05', source: 'v0', target: 'aux9', cpd: 300, cpw: 0.5 } },
    { data: { id: 'e89', source: 'v8', target: 'aux5', cpd: -200, cpw: 0.5 } }
  ],

  style: [
    {
      selector: 'node.visible',
      style: {
        'background-color': '#b3b3b3',
        'width': 18,
        'height': 18,
        'border-width': 0,
        'label': '',
        'opacity': 1
      }
    },
    {
      selector: 'node.aux',
      style: {
        'opacity': 0,
        'width': 2,
        'height': 2,
        'label': ''
      }
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'unbundled-bezier',
        'control-point-distances': 'data(cpd)',
        'control-point-weights': 'data(cpw)',
        'line-color': '#0a0ad8',
        'width': 5,
        'line-cap': 'round',
        'source-arrow-shape': 'none',
        'target-arrow-shape': 'none'
      }
    }
  ],

  layout: {
    name: 'preset',
    fit: false,
    positions: {
      ...visiblePositions,
      aux9: { x: visiblePositions.v9.x, y: Y_POS },
      aux5: { x: visiblePositions.v5.x, y: Y_POS }
    }
  }
});

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function setPos(id, x, y) {
  cy_conjecture2.getElementById(id).position({ x, y });
}

function animateToConjecture2(target, duration = 900) {
  const start = performance.now();

  const from = {
    aux9: cy_conjecture2.getElementById('aux9').position(),
    aux5: cy_conjecture2.getElementById('aux5').position(),
    e05: cy_conjecture2.getElementById('e05').data('cpd'),
    e89: cy_conjecture2.getElementById('e89').data('cpd')
  };

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const u = easeInOutCubic(t);

    cy_conjecture2.batch(() => {
      setPos(
        'aux9',
        lerp(from.aux9.x, target.aux9.x, u),
        lerp(from.aux9.y, target.aux9.y, u)
      );

      setPos(
        'aux5',
        lerp(from.aux5.x, target.aux5.x, u),
        lerp(from.aux5.y, target.aux5.y, u)
      );

      cy_conjecture2.getElementById('e05').data('cpd', lerp(from.e05, target.e05, u));
      cy_conjecture2.getElementById('e89').data('cpd', lerp(from.e89, target.e89, u));
    });

    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

// initial -> transformed
function morphToImage2Conjecture2(duration = 900) {
  animateToConjecture2(
    {
      aux9: { x: visiblePositions.v5.x, y: Y_POS },  // 9 -> 5
      aux5: { x: visiblePositions.v9.x, y: Y_POS },  // 5 -> 9
      e05: 300,
      e89: 0
    },
    duration
  );
}

// transformed -> initial
function morphToImage1Conjecture2(duration = 900) {
  animateToConjecture2(
    {
      aux9: { x: visiblePositions.v9.x, y: Y_POS },
      aux5: { x: visiblePositions.v5.x, y: Y_POS },
      e05: 240,
      e89: -200
    },
    duration
  );
}


var cytoEventHandler = async function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph-conjecture-2-cy') {
    cy_conjecture2.resize();
    cy_conjecture2.fit();
  }
  else if (event.fragment.id == 'graph-conjecture-2-1-cy') {
    morphToImage2Conjecture2()
  }
}

Reveal.addEventListener('fragmentshown', cytoEventHandler);

var cytoEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph-conjecture-2-cy') {
    // cy_conjecture2.resize();
    // cy_conjecture2.fit();
  }
  else if (event.fragment.id == 'graph-conjecture-2-1-cy') {
    morphToImage1Conjecture2()
    }
}


Reveal.addEventListener('fragmenthidden', cytoEventHandlerBack);
