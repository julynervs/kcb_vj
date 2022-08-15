let capture;
let c;

function setup() {
  c = createCanvas(windowWidth, windowHeight); // putting createCanvas inside a variable will enable us to save the canvas as an image in takePic()
  capture = createCapture(VIDEO);
  capture.elt.setAttribute('playsinline', ''); // add this for iphone compatibility
  capture.hide();

}

function draw() {
  background(0);

  if (key === "1") {
    image(capture, 0, 0, width, height); 
    filter(INVERT);
  } else if (key === "2") { 
    image(capture, 0, 0, width, height);
    filter(THRESHOLD);
  } else if (key === "3") {
    image(capture, 0, 0, width, height);
    filter(POSTERIZE, 3);
    // filter(GRAY);
  } else if (key === "4") {
    // filter(DILATE);
    image(capture, 0, 0, width, height);
    filter(POSTERIZE, 2);
  } 
  else if (key === "5") {
    // filter(DILATE);
    image(capture, 0, 0, width, height);
    filter(GRAY);
  } 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    switch (key) {
        case 'f':
            let fs = fullscreen();
            document.getElementById("header").style.display = "none";
            fullscreen(!fs);
            break;
    }
}