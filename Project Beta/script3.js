// Open the side tree view and see index.html.

let checkboxBeetroot_patty, checkboxbeetroot_patty;
let jam;
let spinach;
let x1, y1;


//from gravity
var yValF;
var velocityF;

var yValTopPatty;
var velocityTopPatty;

var yValBottomPatty;
var velocityBottomPatty;

var yValTomatoJam;
var velocityTomatoJam;

var yValCheese;
var velocityCheese;

var yValOnion;
var velocityOnion;

var yValSpinach;
var velocitySpinach;

var accel;
var mass;
//end gravity



function setup() {
  let canva = createCanvas(400, 500);

  //from gravity
  yVal = 0;
  velocity = 0;
  mass = 100;
  accel = mass * 0.1;
  //end gravity


  canva.position(windowWidth/2-200, 0);
  img = loadImage("tomato jam.png");
  checkboxBeetroot_patty = document.getElementById("checkboxBeetroot_patty");
  checkboxbeetroot_patty = document.getElementById("checkbox-beetroot_patty");
  checkboxfalafel = document.getElementById("checkboxFalafel");
  checkboxjam = document.getElementById("checkboxJam");
  checkboxcheese = document.getElementById("checkboxCheese");
  checkboxOnion = document.getElementById("checkboxOnion");
  document.getElementById("checkboxSpinach");
  checkboxSpinach = document.getElementById("checkboxSpinach");
}

function draw() {
  background(239, 235, 216);

  console.log(mouseX, mouseY);
  fill(181, 45, 113);

  if (checkboxbeetroot_patty.checked) {

    velocityBottomPatty += accel;
  yValBottomPatty += velocityBottomPatty;

    if (yValBottomPatty > 365) {
    // A little dampening when hitting the bottom
    velocityBottomPatty *= -0.6;
    yValBottomPatty = 365;
  }



    push();
    translate(0,yValBottomPatty);
    ellipse(200, 35, 280, 90);
    fill(0, 0, 0);


    pop();
  }

  else{velocityBottomPatty = 0;yValBottomPatty = 0;}

  if (checkboxfalafel.checked) {
    velocityF += accel;
  yValF += velocityF;

    if (yValF > 365) {
    // A little dampening when hitting the bottom
    velocityF *= -0.6;
    yValF = 365;
  }
    push();
    translate(0,yValF);
    fill(170, 119, 17);
    ellipse(200, 0, 280, 85);
    //ellipse(200, 365, 280, 85);
    pop();
  }
  else {velocityF = 0;yValF = 0; }

  if (checkboxSpinach.checked) {

    velocitySpinach += accel;
  yValSpinach += velocitySpinach;
    if (yValSpinach > 336) {
    // A little dampening when hitting the bottom
    velocitySpinach *= -0.6;
    yValSpinach = 336;
  }

    push();
    translate(0,yValSpinach);

    push();
    translate(133,0);
    scale(0.5);
    rotate(PI/3);

    beginShape();

      stroke(0, 0, 0);
      fill(0, 100, 0);
      stroke(0, 0, 0);
      fill(0, 100, 0);
      //ellipse(133, 286, 50, 100);
      ellipse(0,0,-83,-186);
      //line(133, 238, 132, 351);
      line(0,0,-1,113);
    endShape(CLOSE);
    pop();

    push();
    translate(293,0);
    scale(0.5);
    rotate(-PI/3);

    beginShape();

      stroke(0, 0, 0);
      fill(0, 100, 0);
      stroke(0, 0, 0);
      fill(0, 100, 0);
      //ellipse(133, 286, 50, 100);
      ellipse(0,0,-83,-186);
      //line(133, 238, 132, 351);
      line(0,0,-1,113);
    endShape(CLOSE);
    pop();

    push();
    translate(193,0);
    rotate(-PI/5);
    scale(0.4);


    beginShape();

      stroke(0, 0, 0);
      fill(0, 100, 0);
      stroke(0, 0, 0);
      fill(0, 100, 0);
      //ellipse(133, 286, 50, 100);
      ellipse(0,0,-83,-186);
      //line(133, 238, 132, 351);
      line(0,0,-1,113);
    endShape(CLOSE);
    pop();

    push();
    translate(193,0);
    rotate(PI/4);
    scale(0.4);


    beginShape();

      stroke(0, 0, 0);
      fill(0, 100, 0);
      stroke(0, 0, 0);
      fill(0, 100, 0);
      //ellipse(133, 286, 50, 100);
      ellipse(0,0,-83,-186);
      //line(133, 238, 132, 351);
      line(0,0,-1,113);
    endShape(CLOSE);
    pop();

    pop();


  }

  else{velocitySpinach = 0;yValSpinach = 0;}


  if (checkboxjam.checked) {

    velocityTomatoJam += accel;
  yValTomatoJam += velocityTomatoJam;

    if (yValTomatoJam > 340) {
    // A little dampening when hitting the bottom
    velocityTomatoJam *= -0.6;
    yValTomatoJam = 340;
  }

    push();
    translate(30, yValTomatoJam);
    scale(0.85);

    image(img, 0, -353);
    pop();
  }
  else{velocityTomatoJam = 0;yValTomatoJam = 0;}


  if (checkboxcheese.checked) {

    velocityCheese += accel;
  yValCheese += velocityCheese;

    if (yValCheese > 365) {
    // A little dampening when hitting the bottom
    velocityCheese *= -0.6;
    yValCheese = 365;
  }

    push();
    translate(0,yValCheese);
    //Cheese(100, 100);

    stroke(255, 229, 204);
    fill(255, 165, 0);

    beginShape();
    vertex(68, 4); //(x,y)
    vertex(336, 4);
    vertex(309, -27);
    vertex(88, -22);
    // feel free to add vertex as many as you want
    endShape(CLOSE);

    fill(135,159,132)
    ellipse(149,0,3,3);
    ellipse(220,-5,3,3);
    ellipse(239,-21,3,3);
    ellipse(272,-21,3,3)
    ellipse(303,-8,3,3);
    ellipse(100,-8,3,3);

    pop();
  } else{velocityCheese = 0;yValCheese = 0;}


  if (checkboxOnion.checked) {

    velocityOnion += accel;
  yValOnion += velocityOnion;

    if (yValOnion > 365) {
    // A little dampening when hitting the bottom
    velocityOnion *= -0.6;
    yValOnion = 365;
  }
    push();
    translate(0,yValOnion);
    fill(248, 223, 198);
    rect(132, 7, 20, 20);
    rect(162, 7, 20, 20);
    rect(100, 7, 20, 20);
    rect(192, 7, 20, 20);
    rect(226, 7, 20, 20);
    rect(257, 7, 20, 20);
    rect(261, -7, 20, 20);
    rect(191, -15, 20, 20);
    rect(104, -5, 20, 20);
    rect(248, -5, 20, 20);
    rect(158,-17,20,20);
    rect(172,-21,20,20);
    rect(161,-43,20,20);

    pop();
  }
  else{velocityOnion = 0;yValOnion = 0;}



  if (checkboxBeetroot_patty.checked) {

    velocityTopPatty += accel;
  yValTopPatty += velocityTopPatty;

    if (yValTopPatty > 190) {
    // A little dampening when hitting the bottom
    velocityTopPatty *= -0.6;
    yValTopPatty = 190;
  }


    push();
    translate(0,yValTopPatty);
    ellipse(200, 75, 280, 90);
    fill(0, 0, 0);
    ellipse(218, 78, 5, 5);
    ellipse(242, 55, 5, 5);
    ellipse(268, 68, 5, 5);
    ellipse(110, 67, 5, 5);
    ellipse(165, 56, 5, 5);
    ellipse(140, 83, 5, 5);
    ellipse(76, 73, 5, 5);
    ellipse(150, 50, 5, 5);
    ellipse(189, 64, 5, 5);
    ellipse(205, 40, 5, 5);
    ellipse(304, 88, 5, 5);
    ellipse(272, 93, 5, 5);
    ellipse(175, 108, 5, 5);
    ellipse(214, 99, 5, 5);
    pop();
  }

  else{velocityTopPatty = 0;yValTopPatty = 0;}

}

class Cheese {
  constructor(x, y) {
    this.location = createVector(x, y);
  }
  run() {}
  display() {
    push();
    noStroke();
    fill("#8080ff");
    pop();
  }
}
