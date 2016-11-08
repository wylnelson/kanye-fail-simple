var book;
var words = [];
var delimiters = " .,*()-_<>?";
var search = "oh";
var search2 = "huh";
var search3 = "woah";
var search4 = "hey";
var wordCounter = 0;

var head;
var yeHeads = [];

function preload() {
  book = loadStrings('MBDTF/DarkFantasy.txt');
}

function setup() {
  createCanvas(800, 600);
  var everything = join(book).toLowerCase();
  words = splitTokens(everything, delimiters);

  for (var i = 0; i < words.length; i++) {
    text(words[i], 10, i * 20);
    if (words[i] == search) {
      wordCounter++;
    }

  }

}

function draw() {
  background(0);
  fill(255);

  text("This text has " + words.length + " words", 20, height - 30);
  text("The word " + search + " appears" + wordCounter + " times.", 20, height - 60);

  for (var j = 0; j < wordCounter; j++){
    yeHeads[j].display();
    yeHeads.push(new Kanye(random(height,width),random(height,width),30,30));
  }
  
}

function Kanye(x, y, l, h) {
  this.x = x;
  this.y = y;
  this.l = l;
  this.h = h;

  this.display = function() {
    image(head, 0, 0, 30, 30, this.x, this.y, this.l, this.h);
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}