var a = 0;var b = 0;var c = 0;var d = 0;var e = 0;var f = 0;var g = 0;var h = 0;var i = 0;var j = 0;var k = 0;


// Functions for dropdown arrows.
function bestPrinterExpand() {
  a++;
  if (a%2 === 1) {
    document.getElementById("dropdownContent").style.display = "block";
    document.getElementById("show").style.visibility = "hidden";
    document.getElementById("collapse").style.visibility = "visible";
  } else {
    document.getElementById("dropdownContent").style.display = "none";
    document.getElementById("show").style.visibility = "visible";
    document.getElementById("collapse").style.visibility = "hidden";
  }
}

function bestFilament() {
  b++;
  if (b%2 === 1) {
    document.getElementById("dropdownContent2").style.display = "block";
    document.getElementById("show2").style.visibility = "hidden";
    document.getElementById("collapse2").style.visibility = "visible";
  } else {
    document.getElementById("dropdownContent2").style.display = "none";
    document.getElementById("show2").style.visibility = "visible";
    document.getElementById("collapse2").style.visibility = "hidden";
  }
}

// Dremel 3D45 //
let dremelOpen = false;
document.addEventListener('click', function(event) {
  var hiddenContent = "dremelHidden";
  var isClickInside = dremelHidden.contains(event.target);
  var isClickHead = dremelHead.contains(event.target);

  if ((isClickHead) && (dremelOpen == false)) {
    document.getElementById(hiddenContent).style.display = "block";
    dremelOpen = true;
  } else if ((isClickHead) && dremelOpen == true) {
      document.getElementById(hiddenContent).style.display = "none";
      dremelOpen = false;
  } else if ((!isClickInside) && (!isClickHead)) {
      document.getElementById(hiddenContent).style.display = "none";
      dremelOpen = false;
  }
});

// Ultimaker S5 //
let s5Open = false;
document.addEventListener('click', function(event) {
  var hiddenContent = "s5Hidden";
  var isClickInside = s5Hidden.contains(event.target);
  var isClickHead = s5head.contains(event.target);

  if ((isClickHead) && (s5Open == false)) {
    document.getElementById(hiddenContent).style.display = "block";
    s5Open = true;
  } else if ((isClickHead) && s5Open == true) {
    document.getElementById(hiddenContent).style.display = "none";
    s5Open = false;
  } else if ((!isClickInside) && (!isClickHead) && (s5Open == true)) {
    document.getElementById(hiddenContent).style.display = "none";
    s5Open = false;
  }
});

//  MarkForged MK II //
let mkfOpen = false;
document.addEventListener('click', function(event) {
  var hiddenContent = "mkfHidden";
  var isClickInside = mkfHidden.contains(event.target);
  var isClickHead = mkfHead.contains(event.target);

  if ((isClickHead) && (mkfOpen == false)) {
    document.getElementById(hiddenContent).style.display = "block";
    mkfOpen = true;
  } else if ((isClickHead) && mkfOpen == true) {
    document.getElementById(hiddenContent).style.display = "none";
    mkfOpen = false;
  } else if ((!isClickInside) && (!isClickHead) && (mkfOpen == true)) {
    document.getElementById(hiddenContent).style.display = "none";
    mkfOpen = false;
  }
});

// Dimension //
let dimensionOpen = false;
document.addEventListener('click', function(event) {
  var hiddenContent = "dimensionHidden";
  var isClickInside = dimensionHidden.contains(event.target);
  var isClickHead = dimensionHead.contains(event.target);

  if ((isClickHead) && (dimensionOpen == false)) {
    document.getElementById(hiddenContent).style.display = "block";
    dimensionOpen = true;
  } else if ((isClickHead) && dimensionOpen == true) {
    document.getElementById(hiddenContent).style.display = "none";
    dimensionOpen = false;
  } else if ((!isClickInside) && (!isClickHead) && (dimensionOpen == true)) {
    document.getElementById(hiddenContent).style.display = "none";
    dimensionOpen = false;
  }
});

// Form 3 //
let f3open = false;
document.addEventListener('click', function(event) {
  var hiddenContent = "form3Hidden";
  var isClickInside = form3Hidden.contains(event.target);
  var isClickHead = f3Head.contains(event.target);

  if ((isClickHead) && (f3open == false)) {
    document.getElementById(hiddenContent).style.display = "block";
    f3open = true;
  } else if ((isClickHead) && f3open == true) {
    document.getElementById(hiddenContent).style.display = "none";
    f3open = false;
  } else if ((!isClickInside) && (!isClickHead) && (f3open == true)) {
    document.getElementById(hiddenContent).style.display = "none";
    f3open = false;
  }
});

// ProJet 2500 //
let pj2500open = false;
document.addEventListener('click', function(event) {
  var hiddenContent = "projet2500Hidden";
  var isClickInside = projet2500Hidden.contains(event.target);
  var isClickHead = projet2500Head.contains(event.target);

  if ((isClickHead) && (pj2500open == false)) {
    document.getElementById(hiddenContent).style.display = "block";
    pj2500open = true;
  } else if ((isClickHead) && pj2500open == true) {
    document.getElementById(hiddenContent).style.display = "none";
    pj2500open = false;
  } else if ((!isClickInside) && (!isClickHead) && (pj2500open == true)) {
    document.getElementById(hiddenContent).style.display = "none";
    pj2500open = false;
  }
});

// Form 3L //
let f3lOpen = false;
document.addEventListener('click', function(event) {
  var hiddenContent = "form3LHidden";
  var isClickInside = form3LHidden.contains(event.target);
  var isClickHead = f3LHead.contains(event.target);

  if ((isClickHead) && (f3lOpen == false)) {
    document.getElementById(hiddenContent).style.display = "block";
    f3lOpen = true;
  } else if ((isClickHead) && f3lOpen == true) {
    document.getElementById(hiddenContent).style.display = "none";
    f3lOpen = false;
  } else if ((!isClickInside) && (!isClickHead) && (f3lOpen == true)) {
    document.getElementById(hiddenContent).style.display = "none";
    f3lOpen = false;
  }
});

// BlackBelt //
let blackBeltopen = false;
document.addEventListener('click', function(event) {
  var hiddenContent = "blackBeltHidden";
  var isClickInside = blackBeltHidden.contains(event.target);
  var isClickHead = blackBeltHead.contains(event.target);

  if ((isClickHead) && (blackBeltopen == false)) {
    document.getElementById(hiddenContent).style.display = "block";
    blackBeltopen = true;
  } else if ((isClickHead) && blackBeltopen == true) {
    document.getElementById(hiddenContent).style.display = "none";
    blackBeltopen = false;
  } else if ((!isClickInside) && (!isClickHead) && (blackBeltopen == true)) {
    document.getElementById(hiddenContent).style.display = "none";
    blackBeltopen = false;
  }
});

// ProJet 460 Plus //
let pj460open = false;
document.addEventListener('click', function(event) {
  var hiddenContent = "pj460Hidden";
  var isClickInside = pj460Hidden.contains(event.target);
  var isClickHead = pj460Head.contains(event.target);

  if ((isClickHead) && (pj460open == false)) {
    document.getElementById(hiddenContent).style.display = "block";
    pj460open = true;
  } else if ((isClickHead) && pj460open == true) {
    document.getElementById(hiddenContent).style.display = "none";
    pj460open = false;
  } else if ((!isClickInside) && (!isClickHead) && (pj460open == true)) {
    document.getElementById(hiddenContent).style.display = "none";
    pj460open = false;
  }
});

/*/ Lock Functions //
let lockDremel = false;
function lockDremelFunction() {
  if (lockDremel == false) {
    lockDremel = true;
  } else {
    lockDremel = true;
  }
}*/
