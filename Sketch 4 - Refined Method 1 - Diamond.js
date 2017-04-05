function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
  for(var x = 0; x <= 200; x +=10) {
   line(x,200+x,200,200+x); // lower and left
	 line(400-x,200+x,200,200+x); // lower and right
	 line(x,200-x,200,200-x); // upper and left
	 line(400-x,200-x,200,200-x); // upper and right
  }
}
