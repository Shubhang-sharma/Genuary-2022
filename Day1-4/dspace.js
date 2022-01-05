let virus;

function preload() {
  virus = loadImage("Day1-4\tel.jpg");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  virus.filter(GRAY);
  // virus.resize(200,0);
  image(virus,0,0);
}
function index(x,y) {
  return(4*(x + (y * virus.width)))
}


function draw() {

  virus.loadPixels();
  let x,y;
  for (y = 0; y < virus.height+1; y++) {
  for (x = 1; x < virus.width-1; x++) {
      let pixelo = virus.pixels;
      oldR = pixelo[index(x,y)];
      oldG = pixelo[index(x,y)+1];
      oldB = pixelo[index(x,y)+2];
      let factor = 1;
      newR = round(factor*oldR / 255) * 255/factor;
      newG = round(factor*oldG / 255) * 255/factor;
      newB = round(factor*oldB / 255) * 255/factor;


      errR = oldR - newR;
      errG = oldG - newG;
      errB = oldB - newB;

      pixelo[index(x,y)] = newR;
      pixelo[index(x,y) + 1] = newG;
      pixelo[index(x,y) +2] = newB

      let idx = index(x+1,y  );
      pixelo[idx] = pixelo[idx] + errR*7/16
      pixelo[idx + 1] = pixelo[idx + 1] + errG*7/16
      pixelo[idx + 2] = pixelo[idx + 2] + errB*7/16

      idx = index(x-1,y+1);
      pixelo[idx] = pixelo[idx] + errR*5/16
      pixelo[idx + 1] = pixelo[idx + 1] + errG*5/16
      pixelo[idx + 2] = pixelo[idx + 2] + errB*5/16


      idx = index(x  ,y+1);
      pixelo[idx] = pixelo[idx] + errR*3/16
      pixelo[idx + 1] = pixelo[idx + 1] + errG*3/16
      pixelo[idx + 2] = pixelo[idx + 2] + errB*3/16

      idx = index(x+1,y+1);
      pixelo[idx] = pixelo[idx] + errR*1/16
      pixelo[idx + 1] = pixelo[idx + 1] + errG*1/16
      pixelo[idx + 2] = pixelo[idx + 2] + errB*1/16

      virus.pixels = pixelo;
  }
  }
  virus.updatePixels();
  image(virus,270,0);
  noLoop();
}
