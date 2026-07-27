var myChart_comp_appendix = echarts.init(document.getElementById("comp-appendix"));
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

myChart_comp_appendix.setOption(option_comp0);

var plotlyCompRedEventHandler = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'comp-appendix1') {
    myChart_comp_appendix.setOption(option_comp1);
  }
  else if (event.fragment.id == 'comp-appendix2') {
    myChart_comp_appendix.setOption(option_comp2);
  }
  else if (event.fragment.id == 'comp-appendix3') {
    myChart_comp_appendix.setOption(option_comp3);
  }
  else if (event.fragment.id == 'comp-appendix4') {
    myChart_comp_appendix.setOption(option_comp4);
  }
  else if (event.fragment.id == 'comp-appendix5') {
    myChart_comp_appendix.setOption(option_comp5);
  }
  else if (event.fragment.id == 'comp-appendix6') {
    myChart_comp_appendix.setOption(option_comp6);
  }
  else if (event.fragment.id == 'comp-appendix7') {
    myChart_comp_appendix.setOption(option_comp7);
  }
  else if (event.fragment.id == 'comp-appendix8') {
    myChart_comp_appendix.setOption(option_comp8);
  }
  else if (event.fragment.id == 'comp-appendix9') {
    myChart_comp_appendix.setOption(option_comp9);
  }
}

Reveal.addEventListener('fragmentshown', plotlyCompRedEventHandler);

var plotlyCompRedEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'comp-appendix1') {
    myChart_comp_appendix.setOption({}, true);
    myChart_comp_appendix.setOption(option_comp0);
  }
  else if (event.fragment.id == 'comp-appendix2') {
    myChart_comp_appendix.setOption({}, true);
    myChart_comp_appendix.setOption(option_comp1);
  }
  else if (event.fragment.id == 'comp-appendix3') {
    myChart_comp_appendix.setOption({}, true);
    myChart_comp_appendix.setOption(option_comp2);
  }
  else if (event.fragment.id == 'comp-appendix4') {
    myChart_comp_appendix.setOption({}, true);
    myChart_comp_appendix.setOption(option_comp3);
  }
  else if (event.fragment.id == 'comp-appendix5') {
    myChart_comp_appendix.setOption({}, true);
    myChart_comp_appendix.setOption(option_comp4);
  }
  else if (event.fragment.id == 'comp-appendix6') {
    myChart_comp_appendix.setOption({}, true);
    myChart_comp_appendix.setOption(option_comp5);
  }
  else if (event.fragment.id == 'comp-appendix7') {
    myChart_comp_appendix.setOption({}, true);
    myChart_comp_appendix.setOption(option_comp6);
  }
  else if (event.fragment.id == 'comp-appendix8') {
    myChart_comp_appendix.setOption({}, true);
    myChart_comp_appendix.setOption(option_comp7);
  }
  else if (event.fragment.id == 'comp-appendix9') {
    myChart_comp_appendix.setOption({}, true);
    myChart_comp_appendix.setOption(option_comp8);
  }
}

Reveal.addEventListener('fragmenthidden', plotlyCompRedEventHandlerBack);