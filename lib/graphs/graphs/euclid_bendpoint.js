var bendpointmyChart = echarts.init(document.getElementById("blg3"));

var bendpointgadgetoption3d1 = generateOptions(["3-sets"], false, bendpointgadgetseries,
  {
      alpha: 90,
      beta: 0,
      distance: 0,
      minDistance: 0,
      maxDistance: 400,
      center: [0, -15, 0]
  }
)
var bendpointgadgetoption3d2 = generateOptions(["3-sets"], false, bendpointgadgetseries2,
  {
      alpha: 90,
      beta: 0,
      distance: 0,
      minDistance: 0,
      maxDistance: 400,
      center: [0, -15, 0]
  }
)

bendpointmyChart.setOption(bendpointgadgetoption3d1);


var echartEventHandler = function(event) {
    if(event.fragment.id === undefined) {
  
    }
    else if (event.fragment.id == 'blg1-6') {
        bendpointmyChart.setOption(bendpointgadgetoption3d2);
    }
  }
  
  Reveal.addEventListener('fragmentshown', echartEventHandler);
  
  var echartEventHandlerBack = function(event) {
    if(event.fragment.id === undefined) {
  
    }
    else if (event.fragment.id == 'blg1-6') {
        bendpointmyChart.setOption(bendpointgadgetoption3d1);
    }
  }
  
  
  Reveal.addEventListener('fragmenthidden', echartEventHandlerBack);
  