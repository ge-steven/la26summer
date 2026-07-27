var layout_graph2 = {
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

var fig_graph2 = Plotly.newPlot('graph2-plotly', cover_page_data, layout_graph2, config);

var gd_graph2 = document.getElementById('graph2-plotly');

function run_graph2() {
    rotate_graph2('scene', Math.PI / 200);
    requestAnimationFrame(run_graph2);
}
run_graph2()

function rotate_graph2(id, angle) {
    var eye0 = gd_graph2.layout[id].camera.eye
    var rtz = xyz2rtz(eye0);
    rtz.t += angle;
    
    var eye1 = rtz2xyz(rtz);
    Plotly.relayout(gd_graph2, id + '.camera.eye', eye1)
}