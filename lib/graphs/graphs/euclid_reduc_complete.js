var myChart_comp = echarts.init(document.getElementById("comp"));
var option_comp0 = generateOptions_comp([], true, [])
var option_comp1 = generateOptions_comp([], true, comp_series_bottom)
var option_comp2 = generateOptions_comp([], true, comp_series_bottom_top)
var option_comp3 = generateOptions_comp([], true, comp_series_bottom_top_ascending1_1)
var option_comp4 = generateOptions_comp([], true, comp_series_bottom_top_ascending1)
var option_comp5 = generateOptions_comp([], true, comp_series_bottom_top_ascending2)
var option_comp6 = generateOptions_comp([], true, comp_series_bottom_top_ascending3)
var option_comp7 = generateOptions_comp([], true, comp_series_bottom_top_ascending4)
var option_comp8 = generateOptions_comp([], true, comp_series_bottom_top_ascending5)
var option_comp9 = generateOptions_comp([], true, comp_series_bottom_top_ascending6)

myChart_comp.setOption(option_comp0);

var plotlyCompRedEventHandler = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'comp1') {
    myChart_comp.setOption(option_comp1);
  }
  else if (event.fragment.id == 'comp2') {
    myChart_comp.setOption(option_comp2);
  }
  else if (event.fragment.id == 'comp3') {
    myChart_comp.setOption(option_comp3);
  }
  else if (event.fragment.id == 'comp4') {
    myChart_comp.setOption(option_comp4);
  }
  else if (event.fragment.id == 'comp5') {
    myChart_comp.setOption(option_comp5);
  }
  else if (event.fragment.id == 'comp6') {
    myChart_comp.setOption(option_comp6);
  }
  else if (event.fragment.id == 'comp7') {
    myChart_comp.setOption(option_comp7);
  }
  else if (event.fragment.id == 'comp8') {
    myChart_comp.setOption(option_comp8);
  }
  else if (event.fragment.id == 'comp9') {
    myChart_comp.setOption(option_comp9);
  }
}

Reveal.addEventListener('fragmentshown', plotlyCompRedEventHandler);

var plotlyCompRedEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'comp1') {
    myChart_comp.setOption({}, true);
    myChart_comp.setOption(option_comp0);
  }
  else if (event.fragment.id == 'comp2') {
    myChart_comp.setOption({}, true);
    myChart_comp.setOption(option_comp1);
  }
  else if (event.fragment.id == 'comp3') {
    myChart_comp.setOption({}, true);
    myChart_comp.setOption(option_comp2);
  }
  else if (event.fragment.id == 'comp4') {
    myChart_comp.setOption({}, true);
    myChart_comp.setOption(option_comp3);
  }
  else if (event.fragment.id == 'comp5') {
    myChart_comp.setOption({}, true);
    myChart_comp.setOption(option_comp4);
  }
  else if (event.fragment.id == 'comp6') {
    myChart_comp.setOption({}, true);
    myChart_comp.setOption(option_comp5);
  }
  else if (event.fragment.id == 'comp7') {
    myChart_comp.setOption({}, true);
    myChart_comp.setOption(option_comp6);
  }
  else if (event.fragment.id == 'comp8') {
    myChart_comp.setOption({}, true);
    myChart_comp.setOption(option_comp7);
  }
  else if (event.fragment.id == 'comp9') {
    myChart_comp.setOption({}, true);
    myChart_comp.setOption(option_comp8);
  }
}

Reveal.addEventListener('fragmenthidden', plotlyCompRedEventHandlerBack);