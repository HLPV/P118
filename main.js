function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
  }

  function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
  }

function draw() {
  strokeWeight(13);
  stroke(0);
  line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  function classifyCanvas() {
    classifier.classify(canvas, gotResult);
  }

  