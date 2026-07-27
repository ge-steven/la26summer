const cy_lemma1 = cytoscape({
  container: document.getElementById('graph-lemma-1-cy'),

  elements: [
    // visible vertices
    { data: { id: 'i', label: 'aᵢ' }, classes: 'visible above' },
    { data: { id: 'j', label: 'aⱼ' }, classes: 'visible below' },
    { data: { id: 'k', label: 'aₖ' }, classes: 'visible above' },
    { data: { id: 'l', label: 'aₗ' }, classes: 'visible below' },

    // invisible auxiliary vertices
    { data: { id: 'auxK' }, classes: 'aux' }, // starts at aₖ
    { data: { id: 'auxJ' }, classes: 'aux' }, // starts at aⱼ

    // edges
    { data: { id: 'e1', source: 'i', target: 'auxK', cpd: 200, cpw: 0.5 } },
    { data: { id: 'e2', source: 'l', target: 'auxJ', cpd: 200, cpw: 0.5 } }
  ],

  style: [
    {
      selector: 'node.visible',
      style: {
        'background-color': '#b3b3b3',
        'width': 28,
        'height': 28,
        'border-width': 0,
        'label': 'data(label)',
        'font-family': 'Times New Roman, serif',
        'font-style': 'italic',
        'font-size': 28,
        'text-valign': 'center',
        'text-halign': 'center',
        'text-background-opacity': 0
      }
    },
    { selector: 'node.above', style: { 'text-margin-y': -34 } },
    { selector: 'node.below', style: { 'text-margin-y': 34 } },
    {
      selector: 'node.aux',
      style: {
        'opacity': 0,
        'width': 2,
        'height': 2,
        'border-width': 0,
        'label': ''
      }
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'unbundled-bezier',
        'control-point-distances': 'data(cpd)',
        'control-point-weights': 'data(cpw)',
        'line-color': '#0000cc',
        'width': 5,
        'line-cap': 'round',
        'source-arrow-shape': 'none',
        'target-arrow-shape': 'none'
      }
    }
  ],

  layout: {
    name: 'preset',
    fit: true,
    positions: {
      i: { x: 110, y: 340 },
      j: { x: 390, y: 340 },
      k: { x: 690, y: 340 },
      l: { x: 980, y: 340 },

      auxK: { x: 690, y: 340 },
      auxJ: { x: 390, y: 340 }
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

function animateToLemma1(target, duration = 900) {
  const start = performance.now();

  const from = {
    auxK: cy_lemma1.getElementById('auxK').position(),
    auxJ: cy_lemma1.getElementById('auxJ').position(),
    e1: cy_lemma1.getElementById('e1').data('cpd'),
    e2: cy_lemma1.getElementById('e2').data('cpd')
  };

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const u = easeInOutCubic(t);

    cy_lemma1.batch(() => {
      cy_lemma1.getElementById('auxK').position({
        x: lerp(from.auxK.x, target.auxK.x, u),
        y: lerp(from.auxK.y, target.auxK.y, u)
      });

      cy_lemma1.getElementById('auxJ').position({
        x: lerp(from.auxJ.x, target.auxJ.x, u),
        y: lerp(from.auxJ.y, target.auxJ.y, u)
      });

      cy_lemma1.getElementById('e1').data('cpd', lerp(from.e1, target.e1, u));
      cy_lemma1.getElementById('e2').data('cpd', lerp(from.e2, target.e2, u));
    });

    if (t < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function morphToImage2Lemma1(duration = 900) {
  animateToLemma1(
    {
      auxK: { x: 390, y: 340 },  // aₖ -> aⱼ
      auxJ: { x: 690, y: 340 },  // aⱼ -> aₖ
      e1: 0,
      e2: 0
    },
    duration
  );
}

function morphToImage1Lemma1(duration = 900) {
  animateToLemma1(
    {
      auxK: { x: 690, y: 340 },  // back to aₖ
      auxJ: { x: 390, y: 340 },  // back to aⱼ
      e1: 200,
      e2: 200
    },
    duration
  );
}

var cytoEventHandler = async function(event) {
  if (event.fragment && event.fragment.id === 'graph-lemma-1-cy') {
    cy_lemma1.resize();
    cy_lemma1.fit();
  }
  else if (event.fragment && event.fragment.id === 'graph-lemma-1-1-cy') {
    morphToImage2Lemma1();
  }
};

Reveal.addEventListener('fragmentshown', cytoEventHandler);

var cytoEventHandlerBack = function(event) {
  if (event.fragment && event.fragment.id === 'graph-lemma-1-cy') {
    cy_lemma1.resize();
    cy_lemma1.fit();
  }
  else if (event.fragment && event.fragment.id === 'graph-lemma-1-1-cy') {
    morphToImage1Lemma1();
  }
};

Reveal.addEventListener('fragmenthidden', cytoEventHandlerBack);