var fondo;

var dots = [];
var energy = 0; //starting value of energy
var singleShake = 0;
var maxEnergy= 1000; //max energy for eathquake
var button1;
var button2;
var cover;

var myImage1;
var myImage2;

var fontTitle;

var seeresults
var tryagain

  var a;
  var b;
  var c;

  var rect_widht;
  var rect_height;
  
function setup () {
  createCanvas(windowWidth, windowHeight);
  fondo = color(204);
 // createButton("Change Background");
}

function preload() {
    //cover = createImg("gif.gif");
    cover = loadImage("Tavola disegno 18-100.jpg");
    myImage1 = loadImage("prova1.png");
    myImage2 = loadImage("prova2.jpg");
    fontTitle = loadFont("OCRBStd.otf");
}

function mousePressed () {
  //if touches[x, y, rect_widht, rect_height]
 // if (mouseX >= x && mouseX <= x + rect_widht && mouseY >= x && mouseY <= x + rect_height)
  
  if (mouseX >= a-30 && mouseX <= a-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height)
 fondo = color(random(0, 170), random(0, 170), random(0, 170));
  

  if (mouseX >= c-30 && mouseX <= c-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height)
 fondo = color(random(0, 170), random(0, 170), random(0, 170)); 
    //fondo = color(204);
    //  energy = 0;
}

function draw () {
  background(fondo);
  
  /*
      var magnitude = int(map(energy, 0, 1000, 0, 10)); 
    
     if (energy < 0.5) {
   image(cover,0,0,windowWidth,windowHeight);
        // cover.position (0,0);
        // cover.size(windowWidth,windowHeight);
  
     } 
    else if (energy > 0.5 && energy < maxEnergy){
    */

 // rectMode(CENTER); 
 // rect(x,x,rect_widht,rect_height)
  
  
  a = (width/8)*2
  b = ((height/15)*14)-3
  c = (width/8)*6
 
  rect_widht = (widht/7)
  rect_height = (height/35)

  
  //
  
     textFont(fontTitle);
     textSize(height/30);
     textAlign(CENTER);
     textStyle(BOLD);
     fill(0);
     noStroke();
     text("EARTHQUAKE INTENSITY", width/2,height - height/1.1);
     
    fill(0);
    noStroke();    
    
    textSize(height/30);
    textAlign(CENTER);
    textStyle(NORMAL);
    text("Magnitude", width/2, height - height/5);
        
    textSize(height/20);
    textAlign(CENTER);
    textStyle(BOLD);
    text("1",width/2, height - height/6.7);
  
//botones


//a y b
    fill(0);
    noStroke();
    textSize(height/40);
    //textAlign(CENTER);
    textStyle(BOLD);
    text("see results",(width/8)*2, (height/15)*14);
    //rectMode(CENTER);
    noFill();
    stroke(255);
    rect(((width/8)*2)-30, ((height/15)*14)-8, rect_widht, rect_height);
    
//c y b
    
    fill(0);
    noStroke();
    textSize(height/40);
    //textAlign(CENTER);
    textStyle(BOLD);
    text("try again",(width/8)*6, (height/15)*14);
    //rectMode(CENTER);
    noFill();
    stroke(255);
    rect(((width/8)*6)-30, ((height/15)*14)-8, rect_widht, rect_height);


// translate ellipse
   
     translate(0, -40);
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse (width/2, height/2, 100* 2, 100 * 2);
  

}
