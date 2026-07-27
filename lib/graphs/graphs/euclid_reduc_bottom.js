var myChart = echarts.init(document.getElementById("blg1"));

var option3d1 = generateOptions(["agents", "3-sets"], false, series)
var option3d2 = generateOptions(["agents", "3-sets"], true, series2)
var option3d3 = generateOptions(["agents", "3-sets"], true, series3)
var option3d4 = generateOptions(["agents", "3-sets"], true, series4)
var option3d5 = generateOptions(["agents", "3-sets"], true, series5)
var option3d6 = generateOptions(["agents", "3-sets"], true, series6)
var option3d7 = generateOptions(["agents", "3-sets", "bend points"], true, series7)
var option3d8 = generateOptions(["agents", "3-sets", "bend points"], true, series8)
var option3d9 = generateOptions(["agents", "3-sets", "bend points"], true, series9)


myChart.setOption(option3d1);


var echartEventHandler = function(event) {
    if(event.fragment.id === undefined) {
  
    }
    else if (event.fragment.id == 'blg1-1') {
        myChart.setOption(option3d2);
    }
    else if (event.fragment.id == 'blg1-2') {
        myChart.setOption(option3d3);
    }
    else if (event.fragment.id == 'blg1-3') {
        myChart.setOption(option3d4);
    }
    else if (event.fragment.id == 'blg1-5') {
        myChart.setOption(option3d5);
        myChart.setOption(option3d6);
    }
    else if (event.fragment.id == 'blg1-7') {
        myChart.setOption(option3d7);
    }
    else if (event.fragment.id == 'blg1-10') {
        myChart.setOption({}, true);
        myChart.setOption(option3d8);
    }
    else if (event.fragment.id == 'blg1-11') {
        myChart.setOption(option3d9);
    }
  }
  
  Reveal.addEventListener('fragmentshown', echartEventHandler);
  
  var echartEventHandlerBack = function(event) {
    if(event.fragment.id === undefined) {
  
    }
    else if (event.fragment.id == 'blg1-1') {
        myChart.setOption(option3d1);
    }
    else if (event.fragment.id == 'blg1-2') {
        myChart.setOption(option3d2);
    }
    else if (event.fragment.id == 'blg1-3') {
        myChart.setOption(option3d3);
    }
    else if (event.fragment.id == 'blg1-5') {
        myChart.setOption(option3d4);
    }
    else if (event.fragment.id == 'blg1-7') {
        myChart.setOption(option3d6);
    }
    else if (event.fragment.id == 'blg1-10') {
        myChart.setOption(option3d7);
    }
    else if (event.fragment.id == 'blg1-11') {
        myChart.setOption({}, true);
        myChart.setOption(option3d8);
    }
  }
  
  
  Reveal.addEventListener('fragmenthidden', echartEventHandlerBack);
  