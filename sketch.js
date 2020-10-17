new p5();
var letItSnow=[];
var images=[];
var total=1000;

function preload(){
  images=[loadImage('snowflake1.png'),
    loadImage('snowflake2.png'),
    loadImage('snowflake3.png')]
}

function setup() {
  createCanvas(600, 400);
 for(var i=0; i<total;i++){
  letItSnow[i] = new snowFlake();
  }
}
function draw() {
  background(0);
  for(var i=0;i<letItSnow.length;i++){
  //letItSnow[i].display();
  letItSnow[i].move();
  letItSnow[i].displayImage();
}
}

class snowFlake{
	constructor(){
  	this.x=random(width);
    this.y=random(-400,-100);
    this.speed=random(1,4);
    this.diameter=random(5,20);
    this.image=random(images);
  }
  
  displayImage(){
  image(this.image,this.x,this.y,this.diameter,this.diameter);
  }

  display(){
  fill(255,255,255);
  ellipse(this.x,this.y,this.diameter);
  }
  
  move(){
  this.y+=this.speed;
    if(this.y>height){
    this.y=-this.diameter;
    this.x=random(width);
    }
  } 
}