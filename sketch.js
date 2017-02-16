var fondo;

 var widht = 400
 var height = 400
  var a;
  var b;
  var c;

  var rect_widht = 60;
  var rect_height = 10;
  
function setup () {
  createCanvas(windowWidth, windowHeight);
  fondo = color(204);
 // createButton("Change Background");
}

function mousePressed () {
  //if touches[x, y, rect_widht, rect_height]
 // if (mouseX >= x && mouseX <= x + rect_widht && mouseY >= x && mouseY <= x + rect_height)
  
  if (mouseX >= a-30 && mouseX <= a-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height)
 fondo = color(random(0, 170), random(0, 170), random(0, 170));

  if (mouseX >= c-30 && mouseX <= c-30 + rect_widht && mouseY >= b-8 && mouseY <= b-8 + rect_height)
 fondo = color(random(0, 170), random(0, 170), random(0, 170));

}

function draw () {
  background(fondo);

 // rectMode(CENTER); 
 // rect(x,x,rect_widht,rect_height)
  
  
  a = (width/8)*2
  b = ((height/15)*14)-3
  c = (width/8)*6

  
  //
  
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
