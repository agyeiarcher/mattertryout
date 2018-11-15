function Floor(x, y, w, h) {
  var options = {
    isStatic: true,
    restitution:1,
    friction:0,
    density:20,
  };

  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
    var position = this.body.position;
    push();
    translate(position.x, position.y);
    rectMode(CENTER);
    noStroke();
    fill(127);
    rect(0,0,this.w,this.h);
    pop();
  };
}
