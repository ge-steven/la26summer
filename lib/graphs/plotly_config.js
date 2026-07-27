const config = {
    displayModeBar: false, // this is the line that hides the bar.
  };

  function xyz2rtz(xyz) {
    return {
        r: Math.sqrt(xyz.x * xyz.x + xyz.y * xyz.y),
        t: Math.atan2(xyz.y, xyz.x),
        z: xyz.z
    };
}

function rtz2xyz(rtz) {
    return {
        x: rtz.r * Math.cos(rtz.t),
        y: rtz.r * Math.sin(rtz.t),
        z: rtz.z
    };
}