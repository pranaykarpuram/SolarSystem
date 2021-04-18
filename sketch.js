var pState = 0;
var state = 0;
var game = 0;
var player1, player2, player3, player4;
var register, player, planet, extras;
var bg1, bg2, bg3;
var database;
var starter;
var playerCount = 0;
var planets = "none";

var extra = 0;
var name;
var bg = 0;
var mState = 0;
var mCraters, mBasin, mAestoroid;
var mbg1, mbg2, mbg3;
var mercury, mSatellite,mSatelliteImg;
var vbg1, vbg2, vbg3, vbg4;
var venus, vSatellite, vSatelliteImg;
var ebg1, ebg2, ebg3, ebg4, ebg5;
var mabg1, mabg2, mabg3, mabg4, mabg5;
var jbg1,jbg2,jbg3,jbg4,jbg5,jbg6;
var sbg1, sbg2, sbg3, sbg4, sbg5, sbg6;
var eState = 0;
var vState = 0;
var maState = 0;
var jState = 0;
var sState = 0;
var uState = 0;
var nState = 0;
var aState=0;
var satState = 0;
var moState = 0;
var rState = 0;
var oState = 0;
var starState = 0;
var gState = 0;
var voState = 0
var earth,mars,jupiter,saturn,uranus,neptune;
var ubg1,ubg2,ubg3,ubg4,ubg5,ubg6;
var nbg1,nbg2,nbg3,nbg4,nbg5;
var moon, moon1, moon2, moon3;
var kState = 0;
var kuiper, ast, dwarf, sat;
var k1, abg1, abg2, sabg1, sabg2, mobg1, mobg2, mobg3;
var rocket, oort, stars, galaxy, probes;
var rbg, obg, stbg1,stbg2, gb1, gb2, pr1,pr2,vo1,vo2,vo3,vo4;
var prState = 0;
function preload(){
  bg1 = loadImage("images/start.jpg");
  bg2 = loadImage("images/main.jpg");
  bg3 = createVideo(["images/ng2.mp4"]);
  mBasin = loadImage("mercury/basin.jpg");
  mCraters = loadAnimation("mercury/crater.png","mercury/crater2.jpg","mercury/crater3.jpg","mercury/crater4.jpg");
  mAestoroid = loadImage("mercury/aestoroid.jpg");
  mbg1 = loadImage("mercury/mbg1.jpg");
  mbg2 = loadImage("mercury/mbg2.jpg");
  mbg3 = loadImage("mercury/mbg3.png");
  mSatelliteImg = loadImage("mercury/satellite.jpg");
  bg3.hide();

  vbg1 = loadImage("venus/vbg1.jpg");
  vbg2 = loadImage("venus/venus.jpg");
  vbg3 = loadImage("venus/atmosphere.jpg");
  vbg4 = loadImage("venus/land.jpg");
  
  ebg1 = loadImage("earth/ebg1.jpg");
  ebg2 = loadImage("earth/ebg2.jpg");
  ebg3 = loadImage("earth/ebg3.jpg");
  ebg4 = loadImage("earth/ebg4.jpg");
  ebg5 = loadImage("earth/ebg5.jpg");
  
  mabg1 = loadImage("mars/mbg1.jpg");
  mabg2 = loadImage("mars/mbg2.jpg");
  mabg3 = loadImage("mars/mbg3.png");
  mabg4 = loadImage("mars/mbg4.jpg");
  mabg5 = loadImage("mars/mbg5.jpg");

  jbg1 = loadImage("jupiter/jbg1.jpg");
  jbg2 = loadImage("jupiter/jbg2.jpg");
  jbg3 = loadImage("jupiter/jbg3.jpg");
  jbg4 = loadImage("jupiter/jbg4.png");
  jbg5 = loadImage("jupiter/jbg5.jpg");
  jbg6 = loadImage("jupiter/jbg6.jpg");

  sbg1 = loadImage("saturn/sbg1.png");
  sbg2 = loadImage("saturn/sbg2.jpg");
  sbg3 = loadImage("saturn/sbg3.jpg");
  sbg4 = loadImage("saturn/sbg4.jpg");
  sbg5 = loadImage("saturn/sbg5.jpg");
  sbg6 = loadImage("saturn/sbg6.jpg");

  ubg1 = loadImage("uranus/ubg1.jpg");
  ubg2 = loadImage("uranus/ubg2.jpeg");
  ubg3 = loadImage("uranus/ubg3.jpg");
  ubg4 = loadImage("uranus/ubg4.png");
  ubg5 = loadImage("uranus/ubg5.jpg");
  ubg6 = loadImage("uranus/ubg6.jpg");

  nbg1 = loadImage("neptune/nbg1.jpg");
  nbg2 = loadImage("neptune/nbg2.jpg");
  nbg3 = loadImage("neptune/nbg3.jpeg");
  nbg4 = loadImage("neptune/nbg4.jpg");
  nbg5 = loadImage("neptune/nbg5.jpg");

  moon1 = loadImage("moon/moon1.jpg");
  moon2 = loadImage("moon/moon2.jpg");
  moon3 = loadImage("moon/moon3.jpg");

  k1 = loadImage("kuiper/k1.jpg");

  abg1 = loadImage("asteroids/a1.jpg");
  abg2 = loadImage("asteroids/a2.jpg");

  sabg1 = loadImage("satellites/s1.jpg");
  sabg2 = loadImage("satellites/s2.jpg");

  mobg1 = loadImage("moon/moon1.jpg");
  mobg2 = loadImage("moon/moon2.jpg");
  mobg3 = loadImage("moon/moon3.jpg");

  rbg = loadImage("rockets/r1.jpg");
  obg = loadImage("oort/o1.jpg");

  stbg1 = loadImage("stars/st1.jpg");
  stbg2 = loadImage("stars/st2.jpg");

  gb1 = loadImage("galaxies/g1.jpg");
  gb2 = loadImage("galaxies/g2.jpg");
  
  pr1 = loadImage("probes/s1.jpg");
  pr2 = loadImage("probes/s2.jpg");


}
function setup() {
  database = firebase.database();
  //mSatellite.visible = false;
  createCanvas(windowWidth,windowHeight);

  starter = new Start();
  extras = new Extra();
  starter.start();
  planet = new Planets();
  mercury = new Mercury();
  earth = new Earth();
  venus = new Venus();
  mars = new Mars();
  jupiter = new Jupiter();
  saturn = new Saturn();
  uranus = new Uranus();
  neptune = new Neptune();

  kuiper = new Kui();
  ast = new Ast();
  sat = new Sat();
  moon = new Moon();

  rocket = new Rockets();
  oort = new Oort();
  stars = new Stars();
  galaxy = new Galaxies();
  probes = new Probes();


}

function draw() {

  if(game === 0){
    background(bg1);
    mars.next.hide();
    mars.previous.hide();
    neptune.next.hide();
    neptune.previous.hide();
  }
  if(game === 1){
    background(bg2);
    planet.display();
    //mars.next.hide();
    //mars.previous.hide();
    bg3.hide();
    nam = createElement('h3');
    nam.html("Hey! "+name);
    nam.position(50,100);
    nam.style('font-family','cursive');
    nam.style('color','red')
  }
  else{
    planet.hide();
  }
  if(planets = "mercury"){
    
    mercury.display();
  }
  if(planets = "venus"){
    venus.display();
  }
  if(planets = "earth"){
    earth.display();
  }
  if(planets = "mars"){
    mars.display();
  }
  if(planets = "jupiter"){
    jupiter.display();
  }
  if(planets = "saturn"){
    saturn.display();
  }
  if(planets = "uranus"){
    uranus.display();
  }
  if(planets = "neptune"){
    neptune.display();
  }
  if(planets = "kuiper"){
    kuiper.display();
  }
  else{
    kuiper.hide();
  }
  if(planets = "ast"){
    ast.display();
  }
  if(planets = "sat"){
    sat.display();
  }
  if(planets = "moon"){
    moon.display();
  }
  if(bg === 0){
    stars.next.hide();
    stars.previous.hide();
    galaxy.next.hide();
    galaxy.previous.hide();
    probes.next.hide();
    probes.previous.hide();
  }
  if(bg === 1){
    background(bg1);
    image(bg3,10,10);
    bg3.loop();
    extras.display();
    stars.next.hide();
    stars.previous.hide();
    galaxy.next.hide();
    galaxy.previous.hide();
  }
  else{
    bg3.hide();
    extras.hide();
  }

  if(extra === 4){
    rocket.display();
  }
  else{
    rocket.hide();
  }
  if(extra === 2){
    oort.display();
  }
  else{
    oort.hide();
  }
  if(extra === 5){
    stars.display();
  }
  if(extra === 6){
    galaxy.display();
  }
  if(extra === 1){
    probes.display();
  }



  text("x: "+mouseX,mouseX,mouseY);
  text("y: "+mouseY,mouseX+30,mouseY);

  

  drawSprites();
}