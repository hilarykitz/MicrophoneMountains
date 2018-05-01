void setup() {
  size(10000,10000);
}

void draw() {
background(#1E211E);
strokeWeight(1);
stroke(#FFFFFF);
line(0, height/2, width, height/2); //line started from y(0), crossing center, ending at y(width).
line(width/2, 0, width/2,height); //vertical center line
stroke(255);
int d = mouseY/Math.PI + 7; //Integer defined by mouseY movement
int iX = width - 2*mouseX; //Integer defined as the inverse of whereever the Xmouse value is
int iY = width + 0.3*mouseY ; // Same w/ mouseY
int iD = (iY/20)+10; //review...

// for(int i=10; i < mouseX; i+=5) {
// 	line(i, i*0.3, i/0.2, iY);
// 	stroke(i,i*2,i/4,150);

// }
// for(int i=-10; i < mouseY; i+=3) {
// 	line(i, i*2, i*0.5, iX);
// 	stroke(i*100,i*2,i*i,150);
// 	curveVertex(iX, iY, 3, 3);
// 	fill(56,168,99,0);
// }
// for (int i=-100; i < mouseY; i+=5) {
// 	line(2*iX,i*-3,i,iY);
// 	stroke(i*5,i*2, i*-1 ,150);
// }

beginShape();
stroke(#FFFFFF);
vertex(30, 70); // first point
for (int i=-10; i < mouseY; i+=0.22) {
	// bezierVertex(25*i, 25*i, 100*i, 50*mouseX, 50*i, 100*i);
	bezierVertex(20*i*PI, PI*i, 75*i+mouseX, 14*mouseX, 12*i, 12*i);
	fill(56*i,168,99,1.5/mouseX);
	stroke(i*5,i*2, i*-1 ,150);
}
endShape();





// curveVertex(iX, iY, 3, 3);
// arc(35, 35, 50, 50, 0, PI / 2.0);
// fill(56,168,99,150);
// ellipse(iY/60, height/120, iD + iY,iD);
// fill(184,61,147,150);
// ellipse(iX/60, height/120, iD,iD);
// fill(24,50,73,150);


}