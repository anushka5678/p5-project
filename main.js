function preload(){

}

function setup(){
    canvas = createCanvas(450, 350);
    canvas.position(400,300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 25, 25, 400, 300);
     // Set colors
  fill(32, 174, 245);
  stroke(127, 63, 120);
  // A rectangle
  rect(5,0, 450, 20);
  rect(5,330, 450, 20);
  rect(0,0, 20, 450);
  rect(430,0, 20, 450);
}

function take_snapshot() {s
    save('name.png');
}
