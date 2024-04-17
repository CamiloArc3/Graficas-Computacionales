function Ship () {
  this.x = 0;
  this.y = 0;
  this.width = 25;
  this.height = 20;
  this.rotation = 0;
  this.showFlame = false;
}

Ship.prototype.draw = function (context) {
  var nave = new Image();
  nave.src = "Nave.png";

  var naveflama = new Image();
  naveflama.src = "turbo.png";

  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  
  context.drawImage(nave, -nave.width/2, -nave.height/2);
  
  if (this.showFlame) {
    context.drawImage(naveflama, -naveflama.width/2, -naveflama.height/2);
  }
  context.restore();
};
