function Box(x, y, w, h) {
  var options = {
    friction: 0.0001,
    restitution: 0.6,
  }
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.body = Bodies.rectangle(x, y, w, h, options);


  World.add(world, this.body);

  this.show = function() {
    var position = this.body.position;
    var angle = this.body.angle;
    push();
    translate(position.x, position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }
}
