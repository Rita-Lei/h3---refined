function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
  
  noFill();
  rectMode(CENTER);
  
  for(var a = 50; a <= 400; a += 100){ 
		// a decides the position of the big rects
    for(var b = 20; b <= 80; b += 20){ 
			//b decides how many small rects in the big rect do you have
      rect(a,200,b,b);
    }
  }
}
