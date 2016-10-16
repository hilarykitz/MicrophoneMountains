void setup() {
  size(600,600);

}

void draw() {
background(#1E211E);
strokeWeight(1);
/*stroke(#222222);
line(0, height/2, width, height/2); //line started from y(0), crossing center, ending at y(width).
line(width/2, 0, width/2,height); //vertical center line
stroke(255);*/
int d = mouseY/2+10; //Integer defined by mouseY movement
int iX = width - mouseX; //Integer defined as the inverse of whereever the Xmouse value is
int iY = width - mouseY ; // Same w/ mouseY
int iD = (iY/2)+10; //review...
for(int i=10; i < mouseX; i+=5) {
line(i, i*0.3, i/0.2, iY);
stroke(i,i*2,i/4,150);
}
for(int i=10; i < mouseY; i+=5) {
line(i, i, i*0.3, iX);
stroke(i*10,i/2,i*i,150);
}
for (int i=10; i < mouseY; i+=5) {
	line(2*iX,i*-3,i,iY);
stroke(i*5,i*2, i*-1 ,150);
}

//ellipse(i, height/2, d, d);
//fill(56,168,99,150);
//ellipse(iY, height/2, iD,iD);
//fill(184,61,147,150);
//ellipse(iX, height/2, iD,iD);
//fill(24,50,73,150);


}