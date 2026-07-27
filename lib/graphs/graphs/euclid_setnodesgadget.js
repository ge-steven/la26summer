var setnodesgadgetmyChart = echarts.init(document.getElementById("blg2"));

var setnodesgadgetoption3d1 = generateOptions(["3-sets"], false, setnodesgadgetseries)
var setnodesgadgetoption3d2 = generateOptions(["3-sets"], false, setnodesgadgetseries2)

setnodesgadgetmyChart.setOption(setnodesgadgetoption3d1);


var echartEventHandler = function(event) {
    if(event.fragment.id === undefined) {
  
    }
    else if (event.fragment.id == 'blg1-4') {
        setnodesgadgetmyChart.setOption(setnodesgadgetoption3d2);
    }
  }
  
  Reveal.addEventListener('fragmentshown', echartEventHandler);
  
  var echartEventHandlerBack = function(event) {
    if(event.fragment.id === undefined) {
  
    }
    else if (event.fragment.id == 'blg1-4') {
        setnodesgadgetmyChart.setOption(setnodesgadgetoption3d1);
    }
  }
  
  
  Reveal.addEventListener('fragmenthidden', echartEventHandlerBack);
  