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
  recording = loadSound("assets/drone.mp3");
}

function setup() {
  createCanvas(480, 480);
  colorMode(RGB);
  angleMode(DEGREES);
  button = createButton("toggle");
  button.mousePressed(toggleRecording);
  recording.play();
  fft = new p5.FFT();
  
}

function draw() {
  background(0);

  noStroke();
  let spectrum = fft.analyze();
  console.log(spectrum);

  function radialLines() {
    translate((width/2), height/2); //centers objects within display window
    //rotate(rotAng);

  

    for (let i = spectrum.length - 1; i > 0; i-=2) {
       
      let amp = spectrum[i];
      let x = 0;
      let y = 0;
      
      if (amp > 10) {
      
        //first set
        fill(255, 255, 255);
        rotate(rotAng/rotAng2)
        rect(x-10, y-10, random(42,50), random(42,50));
        rotate(rotAng)
        rect(x-20, y-20, random(40,50), random(40,50));
        rotate(rotAng2)
        rect(x, y, random(40,50), random(40,50));
        rotate(rotAng * 2);
        rect(x-10, y-10, random(45, 50), random(45, 50));
        rotate(0)
        fill(0)
        ellipse(x, y, random(60, 70), random(60, 70))
        
        
        //second set
         fill(255, 255, 255);
         rotate(rotAng);
         rect(x-20, y-20, random(42, 50), random(42, 50));
         rotate(rotAng / rotAng2);
         rect(x -20, y - 20, random(40, 50), random(40, 50));
         rotate(rotAng2);
         rect(x, y, random(40, 50), random(40, 50));
         rotate(rotAng2 * 2);
         rect(x-20, y-20, random(45, 50), random(45, 50));
         rotate(0);
         fill(0);
         ellipse(x, y, random(60, 70), random(60, 70))
         //ellipse(x+90, y+90, random(30, 40), random(30, 40));
      } 
    }
    rotAng += 100;
    rotAng2 -= 107;
  }

 function radialLines2() {
    //translate(70, 0); //centers objects within display window
    //rotate(rotAng);

    for (let i = spectrum.length - 1; i > 0; i--) {
      //from center maps angles to a circle
      let amp = spectrum[i];
      let x = 0;
      let y = 0;

      if (amp > 10) {
        //color of ellipse

        //first set
        fill(255, 255, 255);
        rotate(rotAng / rotAng2);
        rect(x - 10, y - 10, random(42, 50), random(42, 50));
        rotate(rotAng);
        rect(x - 20, y - 20, random(40, 50), random(40, 50));
        rotate(rotAng2);
        rect(x, y, random(40, 50), random(40, 50));
        rotate(rotAng * 2);
        rect(x - 10, y - 10, random(45, 50), random(45, 50));
        rotate(0);
        fill(0);
        ellipse(x, y, random(60, 70), random(60, 70));

        //second set
        fill(255, 255, 255);
        rotate(rotAng);
        rect(x - 20, y - 20, random(42, 50), random(42, 50));
        rotate(rotAng / rotAng2);
        rect(x - 20, y - 20, random(40, 50), random(40, 50));
        rotate(rotAng2);
        rect(x, y, random(40, 50), random(40, 50));
        rotate(rotAng2 * 2);
        rect(x - 20, y - 20, random(45, 50), random(45, 50));
        rotate(0);
        fill(0);
        ellipse(x, y, random(60, 70), random(60, 70));
        //ellipse(x+90, y+90, random(30, 40), random(30, 40));
      }
    }
    rotAng += 100;
    rotAng2 -= 107;
  }



  /*function lowFreqResponse() {
    let fBass = fft.getEnergy("bass");
    let fLowMid = fft.getEnergy("lowMid");
    if (fBass > 20) {
      for (let i = 0; i < fBass; i++) fill(0, 0, 255);
      rect(fbass, fbass, 30, 30);
    } 
    print("bass: " + fBass);
    print("lowMid: " + fLowMid);
  }*/

  //function radialEllipses(){
  //  translate(width/2, height/2);
  //  for(let i=spectrum.length; i>0; i--){

  //  }

  // }

  radialLines();
  radialLines2();
  //lowFreqResponse();
  //radialEllipses()
}
