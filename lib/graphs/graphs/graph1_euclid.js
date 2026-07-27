var layout_graph1 = {
  showlegend: false,
  autosize: true,
  height: 800,
  scene: {
      aspectratio: {
          x: 1,
          y: 1,
          z: 1
      },
      camera: {
          center: {
              x: 0,
              y: 0,
              z: 0
          },
          eye: {
              x: 1.5,
              y: 1.5,
              z: 1.5
          },
          up: {
              x: 0,
              y: 0,
              z: 1
          }
      },
      xaxis: {
          type: 'linear',
          zeroline: false
      },
      yaxis: {
          type: 'linear',
          zeroline: false
      },
      zaxis: {
          type: 'linear',
          zeroline: false
      }
  },
  width: 800
};

var fig_graph1 = Plotly.newPlot('graph1-plotly', graph1_euclid_vertices_data, layout_graph1, config);

var gd_graph1 = document.getElementById('graph1-plotly');

// function run() {
//   rotate(gd_graph1, 'scene', Math.PI / 200);
//   requestAnimationFrame(run);
// } 
// run();

var eventHandler = async function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph1-plotly-1') {
    fig_graph1 = Plotly.newPlot('graph1-plotly', graph1_euclid_vertices_data_label, layout_graph1, config);
  }
  else if (event.fragment.id == 'graph1-plotly-2') {
    for (let i=0; i < 5; i++){
      fig_graph1 = Plotly.newPlot('graph1-plotly', graph1_euclid_hull[i], layout_graph1, config);
      await sleep(500);
    }
  }
  else if (event.fragment.id == 'graph1-plotly-3') {
    fig_graph1 = Plotly.newPlot('graph1-plotly', graph1_euclid_hull1, layout_graph1, config);
  }
  else if (event.fragment.id == 'graph1-plotly-4') {
    fig_graph1 = Plotly.newPlot('graph1-plotly', cover_page_data, layout_graph1, config);
    run_graph1()
  }
}

Reveal.addEventListener('fragmentshown', eventHandler);

var eventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph1-plotly-1') {
    fig_graph1 = Plotly.newPlot('graph1-plotly', graph1_euclid_vertices_data, layout_graph1, config);
  }
  else if (event.fragment.id == 'graph1-plotly-2') {
    fig_graph1 = Plotly.newPlot('graph1-plotly', graph1_euclid_vertices_data_label, layout_graph1, config);
  }
  else if (event.fragment.id == 'graph1-plotly-3') {
    fig_graph1 = Plotly.newPlot('graph1-plotly', graph1_euclid_hull[4], layout_graph1, config);
  }
  else if (event.fragment.id == 'graph1-plotly-4') {
    fig_graph1 = Plotly.newPlot('graph1-plotly', graph1_euclid_hull1, layout_graph1, config);
    graph1_euclid_frames = 400
  }
}

Reveal.addEventListener('fragmenthidden', eventHandlerBack);

var graph1_euclid_frames = 400

function run_graph1() {
    if (graph1_euclid_frames > 0) {
      graph1_euclid_frames -= 1;
      rotate_graph1('scene', Math.PI / 200);
      requestAnimationFrame(run_graph1);
    } else {
      return;
    }
}

function rotate_graph1(id, angle) {
    var eye0 = gd_graph1.layout[id].camera.eye
    var rtz = xyz2rtz(eye0);
    rtz.t += angle;
    
    var eye1 = rtz2xyz(rtz);
    Plotly.relayout(gd_graph1, id + '.camera.eye', eye1)
}