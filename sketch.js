var db, gs, plc;
var mainHead, q, op1, op2, op3, op4; 
var inpName, inpOpt, optVal, nameVal, sub;

function setup(){
  createCanvas(850,400);
  
  db = firebase.database();
  db.ref("gameState").on("value", function(data) {
    gs = data.val();
  });

  mainHead = createElement("h1");
  mainHead.html("Quiz Game");
  mainHead.position(350, 30);
  
  inpName = createInput().attribute("placeholder", "Username");
  inpName.position(150, 300);

  inpOpt = createInput().attribute("placeholder", "Option Number");
  inpOpt.position(500, 300);

  q = createElement("h2");
  q.html("Who is the impostor?");
  q.position(150, 80);

  op1 = createElement("h3");
  op1.html("1. Red (Supposedly vented)");
  op1.position(150, 130);

  op2 = createElement("h3");
  op2.html("2. Blue (Submitted Medbay Scan)")
  op2.position(150, 150);

  op3 = createElement("h3");
  op3.html("3. Lime (Emptied Trash at Storage)");
  op3.position(150, 170);

  op4 = createElement("h3");
  op4.html("4. Cyan (No proof of anything)");
  op4.position(150, 190);

  sub = createButton("Submit");
  sub.position(380, 350);
  sub.mousePressed(button);
}


function draw(){
  background("pink");
}

function button() {
  plc++;
  
  nameVal = inpName.value();
  optVal = inpOpt.value();

  db.ref("/").update({plCount : plc});
  db.ref("players/player"+plc).set({name:nameVal, option:optVal});
}
