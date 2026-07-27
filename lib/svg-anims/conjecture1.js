// var conjecture1_1 = undefined;

// document.addEventListener("slidechanged", function(event) {
//   if (event.currentSlide.id === 'ppbot0') {
//     if (ppbot0 == undefined) {
//       ppbot0 = new Vivus('ppbot0-anim', { type: 'oneByOne', duration: 300, animTimingFunction: Vivus.LINEAR, file: 'images/graphs/bottom1-v1.svg', reverseStack: false });
//     } else {
//       ppbot0.reset().play()
//     }
//   }
// });

function animateUntilPercent(vivus, percent) {
  if (!vivus || !vivus.map || vivus.map.length === 0) return;

  const p = Math.max(0, Math.min(100, percent)) / 100;
  const stopFrame = vivus.frameLength * p;

  vivus.stop();
  vivus.play(1);

  const monitor = () => {
    if (vivus.currentFrame >= stopFrame) {
      vivus.stop();
      vivus.setFrameProgress(p);
      return;
    }
    requestAnimationFrame(monitor);
  };

  requestAnimationFrame(monitor);
}

function resumeVivus(vivus) {
  if (!vivus) return;
  vivus.play(1);
}

var conjecture1fig0;

document.addEventListener("fragmentshown", function (event) {
  if (event.fragment && event.fragment.id === "conjecture1-fig0-anim") {
    document.getElementById("conjecture1-fig0-anim").innerHTML = "";

    conjecture1fig0 = new Vivus("conjecture1-fig0-anim", {
      type: "oneByOne",
      duration: 200,
      animTimingFunction: Vivus.LINEAR,
      file: "images/graphs/conjecture1-fig1.svg",
      reverseStack: false
    });
  }
});

document.addEventListener("fragmenthidden", function (event) {
  if (event.fragment && event.fragment.id === "conjecture1-fig0-anim") {
    document.getElementById("conjecture1-fig0-anim").innerHTML = "";

    conjecture1fig0 = new Vivus("conjecture1-fig0-anim", {
      type: "oneByOne",
      duration: 200,
      animTimingFunction: Vivus.LINEAR,
      file: "images/graphs/conjecture1-fig1.svg",
      reverseStack: false
    });
  }
});



var conjecture1fig1;

document.addEventListener("fragmentshown", function (event) {
  if (event.fragment && event.fragment.id === "conjecture1-fig1-anim") {
    document.getElementById("conjecture1-fig1-anim").innerHTML = "";

    conjecture1fig1 = new Vivus("conjecture1-fig1-anim", {
      type: "oneByOne",
      duration: 200,
      animTimingFunction: Vivus.LINEAR,
      file: "images/graphs/conjecture1-fig2-backup.svg",
      reverseStack: false,
      start: "manual"
    });
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig1-anim-1") {
    animateUntilPercent(conjecture1fig1, 67);
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig1-anim-2") {
    animateUntilPercent(conjecture1fig1, 95.2);
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig1-anim-3") {
    animateUntilPercent(conjecture1fig1, 100);
  }
});

document.addEventListener("fragmenthidden", function (event) {
  if (event.fragment && event.fragment.id === "conjecture1-fig1-anim") {
    document.getElementById("conjecture1-fig1-anim").innerHTML = "";

    conjecture1fig1 = new Vivus("conjecture1-fig1-anim", {
      type: "oneByOne",
      duration: 200,
      animTimingFunction: Vivus.LINEAR,
      file: "images/graphs/conjecture1-fig2-backup.svg",
      reverseStack: false,
      start: "manual"
    });
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig1-anim-1") {
    animateUntilPercent(conjecture1fig1, 0);
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig1-anim-2") {
    animateUntilPercent(conjecture1fig1, 67);
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig1-anim-3") {
    animateUntilPercent(conjecture1fig1, 95.2);  }
});



var conjecture1fig2;


document.addEventListener("fragmentshown", function (event) {
  if (event.fragment && event.fragment.id === "conjecture1-fig2-anim") {
    document.getElementById("conjecture1-fig2-anim").innerHTML = "";

    conjecture1fig2 = new Vivus("conjecture1-fig2-anim", {
      type: "oneByOne",
      duration: 200,
      animTimingFunction: Vivus.LINEAR,
      file: "images/graphs/conjecture1-fig3-backup2.svg",
      reverseStack: false,
      start: "manual"
    });
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig2-anim-1") {
    animateUntilPercent(conjecture1fig2, 79);
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig2-anim-2") {
    animateUntilPercent(conjecture1fig2, 98.7);
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig2-anim-3") {
    animateUntilPercent(conjecture1fig2, 100);
  }
});


document.addEventListener("fragmenthidden", function (event) {
  if (event.fragment && event.fragment.id === "conjecture1-fig2-anim") {
    document.getElementById("conjecture1-fig2-anim").innerHTML = "";

    conjecture1fig2 = new Vivus("conjecture1-fig2-anim", {
      type: "oneByOne",
      duration: 200,
      animTimingFunction: Vivus.LINEAR,
      file: "images/graphs/conjecture1-fig3-backup2.svg",
      reverseStack: false,
      start: "manual"
    });
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig2-anim-1") {
    animateUntilPercent(conjecture1fig2, 0);
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig2-anim-2") {
    animateUntilPercent(conjecture1fig2, 79);
  }
  if (event.fragment && event.fragment.id === "conjecture1-fig2-anim-3") {
    animateUntilPercent(conjecture1fig2, 98.7);
  }
});