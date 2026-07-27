var ppbot0 = undefined;
var ppbot1 = undefined;
var ppbot2 = undefined;
var ppbot3 = undefined;
var ppbot4 = undefined;
var ppascending0 = undefined;
var ppascending1 = undefined;
var pptop0 = undefined;
var pptop1 = undefined;

document.addEventListener("slidechanged", function(event) {
if (event.currentSlide.id === 'ppbot0') {
  if (ppbot0 == undefined) {
    ppbot0 = new Vivus('ppbot0-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom1-v1.svg', reverseStack: false });
  } else {
    ppbot0.reset().play()
  }
}
if (event.currentSlide.id === 'ppbot1') {
  if (ppbot1 == undefined) {
    ppbot1 = new Vivus('ppbot1-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom2-anim-1.svg', reverseStack: false });
  } else {
    ppbot1.reset().play()
  }
}
if (event.currentSlide.id === 'ppbot2') {
  if (ppbot2 == undefined) {
    ppbot2 = new Vivus('ppbot2-anim', { type: 'oneByOne', duration: 150, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom2-anim-2.svg', reverseStack: false });
  } else {
    ppbot2.reset().play()
  }
}
if (event.currentSlide.id === 'ppbot3') {
  if (ppbot3 == undefined) {
    ppbot3 = new Vivus('ppbot3-anim', { type: 'oneByOne', duration: 200, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom2-anim-3.svg', reverseStack: false });
  } else {
    ppbot3.reset().play()
  }
}
if (event.currentSlide.id === 'ppbot4') {
  if (ppbot4 == undefined) {
    ppbot4 = new Vivus('ppbot4-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom2-anim-4.svg', reverseStack: false });
  } else {
    ppbot4.reset().play()
  }
}

if (event.currentSlide.id === 'ppascending0') {
  if (ppascending0 == undefined) {
    ppascending0 = new Vivus('ppascending0-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/ascending4-v1.svg', reverseStack: false });
  } else {
    ppascending0.reset().play()
  }
}
if (event.currentSlide.id === 'ppascending1') {
  if (ppascending1 == undefined) {
    ppascending1 = new Vivus('ppascending1-anim', { type: 'oneByOne', duration: 450, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/ascending7-v2.svg', reverseStack: false });
  } else {
    ppascending1.reset().play()
  }
}


if (event.currentSlide.id === 'pptop0') {
  if (pptop0 == undefined) {
    pptop0 = new Vivus('pptop0-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/top4-v1.svg', reverseStack: true });
  } else {
    pptop0.reset().play()
  }
}
if (event.currentSlide.id === 'pptop1') {
  if (pptop1 == undefined) {
    pptop1 = new Vivus('pptop1-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/top6.svg', reverseStack: true });
  } else {
    pptop1.reset().play()
  }
}
});


var reducedbot0 = undefined;
var reducedbot1 = undefined;
var reducedbot2 = undefined;
var reducedbot3 = undefined;
var reducedbot4 = undefined;
var reducedbot5 = undefined;
var reducedascending0 = undefined;
var reducedascending1 = undefined;
var reducedtop0 = undefined;
var reducedtop1 = undefined;

document.addEventListener("slidechanged", function(event) {
if (event.currentSlide.id === 'reducedbot0') {
  if (reducedbot0 == undefined) {
    reducedbot0 = new Vivus('reducedbot0-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom1-v2.svg', reverseStack: false });
  } else {
    reducedbot0.reset().play()
  }
}
if (event.currentSlide.id === 'reducedbot1') {
  if (reducedbot1 == undefined) {
    reducedbot1 = new Vivus('reducedbot1-anim', { type: 'oneByOne', duration: 100, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom3-anim-1.svg', reverseStack: false });
  } else {
    reducedbot1.reset().play()
  }
}
if (event.currentSlide.id === 'reducedbot2') {
  if (reducedbot2 == undefined) {
    reducedbot2 = new Vivus('reducedbot2-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom3-anim-2.svg', reverseStack: true });
  } else {
    reducedbot2.reset().play()
  }
}
if (event.currentSlide.id === 'reducedbot3') {
  if (reducedbot3 == undefined) {
    reducedbot3 = new Vivus('reducedbot3-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom3-anim-3.svg', reverseStack: true });
  } else {
    reducedbot3.reset().play()
  }
}
if (event.currentSlide.id === 'reducedbot4') {
  if (reducedbot4 == undefined) {
    reducedbot4 = new Vivus('reducedbot4-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom3-anim-4.svg', reverseStack: false });
  } else {
    reducedbot4.reset().play()
  }
}
if (event.currentSlide.id === 'reducedbot5') {
  if (reducedbot5 == undefined) {
    reducedbot5 = new Vivus('reducedbot5-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom3-anim-5.svg', reverseStack: false });
  } else {
    reducedbot5.reset().play()
  }
}

if (event.currentSlide.id === 'reducedascending0') {
  if (reducedascending0 == undefined) {
    reducedascending0 = new Vivus('reducedascending0-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/ascending4-v2.svg', reverseStack: false });
  } else {
    reducedascending0.reset().play()
  }
}
if (event.currentSlide.id === 'reducedascending1') {
  if (reducedascending1 == undefined) {
    reducedascending1 = new Vivus('reducedascending1-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/ascending10-v1.svg', reverseStack: false });
  } else {
    reducedascending1.reset().play()
  }
}

if (event.currentSlide.id === 'reducedtop0') {
  if (reducedtop0 == undefined) {
    reducedtop0 = new Vivus('reducedtop0-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/top4-v2.svg', reverseStack: true });
  } else {
    reducedtop0.reset().play()
  }
}
if (event.currentSlide.id === 'reducedtop1') {
  if (reducedtop1 == undefined) {
    reducedtop1 = new Vivus('reducedtop1-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/top5.svg', reverseStack: true });
  } else {
    reducedtop1.reset().play()
  }
}
});



var blg5anim0 = undefined
var blg5anim1 = undefined
var blg5anim2 = undefined

document.addEventListener("fragmentshown",  function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'blg5-anim0') {
    document.getElementById("blg5-anim0").innerHTML = "";
    blg5anim0 = new Vivus('blg5-anim0', { type: 'oneByOne', duration: 200, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom-anim0.svg', reverseStack: false });

  }
  else if (event.fragment.id == 'blg5-anim1') {
    document.getElementById("blg5-anim0").innerHTML = "";
    blg5anim1 = new Vivus('blg5-anim0', { type: 'oneByOne', duration: 200, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom-anim1.svg', reverseStack: false });
    
  }
  else if (event.fragment.id == 'blg5-anim2') {
    document.getElementById("blg5-anim0").innerHTML = "";
    blg5anim2 = new Vivus('blg5-anim0', { type: 'oneByOne', duration: 200, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom-anim2.svg', reverseStack: false });
    
  }
}
);
  


document.addEventListener("fragmenthidden",  function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'blg5-anim0') {
  }
  else if (event.fragment.id == 'blg5-anim1') {
    document.getElementById("blg5-anim0").innerHTML = "";
    blg5anim0 = new Vivus('blg5-anim0', { type: 'oneByOne', duration: 200, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom-anim0.svg', reverseStack: false });
  }
  else if (event.fragment.id == 'blg5-anim2') {
    document.getElementById("blg5-anim0").innerHTML = "";
    blg5anim1 = new Vivus('blg5-anim0', { type: 'oneByOne', duration: 200, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom-anim1.svg', reverseStack: false });
    
  }
}
);
