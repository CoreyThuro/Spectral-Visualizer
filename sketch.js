let recording;
let fft;
let button, button2;
let rotAng = 0;
let rotAng2 = 0;
let w;

//idea, eventually allow users to control paramaters of vis display
//eg. color, line, position, shape, etc. 
//for now, go for chaotic but beautiful display

function toggleRecording() {
  if (recording.isPlaying()) {
    recording.pause();
  } else {
    recording.play();
  }
}
//TODO allow user to choose their own file path
function preload() {
  recording = loadSound("assets/sporeswsarah.wav");
}


function setup() {
  createCanvas(480, 480);
  colorMode(RGB)
  angleMode(DEGREES);
  button = createButton("toggle");
  button.mousePressed(toggleRecording);
  button2 = createButton("upload a recording");
  button2.mousePressed()
  recording.play();
  fft = new p5.FFT();
}

function draw() {
  background(0);
 
  noStroke()
  let spectrum = fft.analyze();
  console.log(spectrum)
  
  function radialLines(){
  translate(random(width), random(height)) //centers objects within display window
  rotate(rotAng)
  
  for (let i = spectrum.length-1; i > 0; i--) {
    let angle = map(i, 0, spectrum.length, 0, width/2); //from center maps angles to a circle
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 40, 150);
    if (amp > 10) {
      var x = random(r * cos(angle * random(angle)));
      var y = random(r * sin(angle * random(angle)));
       //color of ellipse
      
      fill(255, 0, 255, random(255));
      ellipse(0, 0, random(5), random(5));
      ellipse(0, 0, x*0.9, y*0.9);
      rotate(rotAng2)
      ellipse(0, 0, x/2, y/2);
    } else {
      var x = amp;
      var y = amp;
      }
    }
    rotAng += 100;
    rotAng2 -= 107;
  }

  function radialLines2() {
    translate(random(width), random(height)) //centers objects within display window
    rotate(rotAng);

    for (let i = spectrum.length - 1; i > 0; i--) {
      let angle = map(i, 0, spectrum.length, 0, width / 2); //from center maps angles to a circle
      let amp = spectrum[i];
      let r = map(amp, 0, 256, 40, 150);
      if (amp > 10) {
        var x = random(r * cos(angle * random(angle)));
        var y = random(r * sin(angle * random(angle)));
        //color of <lines> </lines>
      
        fill(155,0, 155, random(255));
        ellipse(x, y, random(5), random(5));
        ellipse(0, 0, x/10, y/10);
        rotate(rotAng2);
        ellipse(0, 0, x/2, y/2);
      } else {
        var x = amp;
        var y = amp;
      }
    }
    rotAng += 100;
    rotAng2 -= 107;
  }


  function lowFreqResponse() {
   let fBass = fft.getEnergy("bass");
   let fLowMid = fft.getEnergy("lowMid")
    if(fBass > 20){
    for(let i = 0; i < fBass; i++)
    fill(0, 0, 255)
     rect(fbass, fbass, 30, 30)
    } 
    print('bass: ' + fBass)
    print('lowMid: ' + fLowMid)
  }

  //function radialEllipses(){
  //  translate(width/2, height/2);
  //  for(let i=spectrum.length; i>0; i--){

 //  }

 // }
  
radialLines()
radialLines2()
lowFreqResponse();
//radialEllipses()

}
