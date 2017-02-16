var fondo;
var widht = 400;
var height = 400;

var dots = [];
var energy = 0; //starting value of energy
var singleShake = 0;
var maxEnergy= 1000; //max energy for eathquake
var button1;
var button2;
var cover;

var myImage1;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var myImage6;

var fontTitle;
var fontMeta;

var seeresults;
var tryagain;

  var a;
  var b;
  var c;

  var rect_widht;
  var rect_height;
  

function preload() {
    //cover = createImg("gif.gif");  // I found that for gif we have to use "create"
    cover = loadImage("Tavola disegno 18-100.jpg");
    myImage1 = loadImage("prova1.png");
    myImage2 = loadImage("prova2.jpg");
    fontTitle = loadFont("OCRBStd.otf");
    fontMeta = loadFont("Meta-Normal.otf");
  
}

function setup () {
  createCanvas(windowWidth, windowHeight);
  fondo = color(204);
}


function mousePressed () { // function touchStarted () {
  //if touches[x, y, rect_widht, rect_height]
 // if (mouseX >= x && mouseX <= x + rect_widht && mouseY >= x && mouseY <= x + rect_height)
 
  
  if (mouseX >= a-30 && mouseX <= a-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height){
 fondo = color(random(0, 170), random(0, 170), random(0, 170));
    
   // else (magnitude <= 6){
  //       image(myImage1,0,0,windowWidth,windowHeight);
   // } else {
     //    image(myImage2,0,0,windowWidth,windowHeight);
    
    
    /*
    
    //opcion 1
    for var fondo {
    if (mouseX >= a-30 && mouseX <= a-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height){
   
   }else if (magnitude <= 6) {
        image(myImage1,0,0,windowWidth,windowHeight);
  
   }if(mangnitude => 6 && < 7) {
        image(myImage2,0,0,windowWidth,windowHeight);   
        
   }if(mangnitude => 7 && < 8) {
        image(myImage3,0,0,windowWidth,windowHeight);  
        
   }if(mangnitude => 8 && < 9) {
        image(myImage4,0,0,windowWidth,windowHeight);  
        
   }if(mangnitude => 9 && < 10) {
        image(myImage5,0,0,windowWidth,windowHeight);  
        
   }if(mangnitude => 10 &&) {
        image(myImage6,0,0,windowWidth,windowHeight); 
        
        
        // otra opcion2
        
        for (var fondo = myImage1) {
        if (magnitude <= 6);
        } else if (mouseX >= a-30 && mouseX <= a-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height);
        }
        
        for (var fondo = myImage2) {
        if (mangnitude => 6 && < 7);
        } else if (mouseX >= a-30 && mouseX <= a-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height);
        }
        
        for (var fondo = myImage3) {
        if (mangnitude => 7 && < 8);
        } else if (mouseX >= a-30 && mouseX <= a-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height);
        }
        
        for (var fondo = myImage4) {
        if (mangnitude => 8 && < 9);
        } else if (mouseX >= a-30 && mouseX <= a-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height);
        }
        
        for (var fondo = myImage5) {
        if (mangnitude => 9 && < 10);
        } else if (mouseX >= a-30 && mouseX <= a-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height);
        }
        
        for (var fondo = myImage6) {
        if (mangnitude => 10);
        } else if (mouseX >= a-30 && mouseX <= a-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height);
        }
        
 
    
    
    */

} else if (mouseX >= c-30 && mouseX <= c-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height){
    fondo = color(204);
    energy = 0;
  }
}

function draw () {
  background(fondo);
  
 
      var magnitude = int(map(energy, 0, 1000, 0, 10)); 
    
     if (energy < 0.5) {
   image(cover,0,0,windowWidth,windowHeight);
       // for gif is:
        // cover.position (0,0);
        // cover.size(windowWidth,windowHeight);
  
     } 
    else if (energy > 0.5 && energy < maxEnergy){
   
  
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
    text(magnitude,width/2, height - height/6.7);
  
//botones


//a y b
    textFont(fontMeta);
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


   
       //CREATE THE ELLIPSE AREA
    var x = width/2;
    var y = height/2;
    var r = energy * 2; 
  
  
    translate(0, height/10);
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse (width/2, height/2, 100* 2, 100 * 2);
  
  } else if(energy >= maxEnergy) {
    textSize(height/20);
    textAlign(CENTER);
    textStyle(BOLD);
    text("10",width/2, height - height/6.7)
    energy = maxEnergy;
    background(204,0,0);
   }
    
    //draw dots and given methods (actions)
      noStroke();
      fill(0);
      for (var i = 0; i < energy * 100; i++){
        dots[i].move();
        dots[i]. display();  
      }
 
}


function deviceShaken(){
    
   singleShake = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
   energy += singleShake; 
   
    //create objects
    for (var i = 0; i < energy*100; i++){
        dots.push(new QuakeDots());
    } 
    
}
    
function QuakeDots(){ 
    var a = random(0,360);
    var b = random(0,energy * 1.6);
    var x = sin(a) * b; // mi dà un numero che va da -b a b
    var y = cos(a) * b; // mi dà un numero che va da -b a b
    var d = dist(width/2,height/2, width/2, height/2 + x/2);
    
    this.xdot = random(width/2 - d, width/2 + d); //according to ellipse area
    this.ydot = random(height/2 - d, height/2 + d); //according to ellipse area
    this.diameter = 6;
    this.speed = 4; //according to magnitude

    this.move = function(){
    this.xdot += random(-this.speed,this.speed);
    this.ydot += random(-this.speed,this.speed);
 
    }

    this.display = function(){
    if(this.xdot > width/2 + d || this.xdot < width/2 - d || this.ydot > height/2 + d || this.ydot < height/2 - d){
       this.xdot = random(width/2 - d, width/2 + d);
       this.ydot = random(height/2 - d, height/2 + d); 
       }
    ellipse(this.xdot, this.ydot, this.diameter, this.diameter);
    };
 
}


 /*
    // result buttons
 function results() {
     if (magnitude <= 6){
         image(myImage1,0,0,windowWidth,windowHeight);
     } else {
         image(myImage2,0,0,windowWidth,windowHeight);
     }
  
 }


function clearEverything() {
    background(204);
    energy = 0;
 }
 
 */

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  }
