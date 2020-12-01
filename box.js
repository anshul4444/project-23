class Box {
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.8,
      'friction':0.8,
      'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push(); // insert a new setting
    translate(pos.x,pos.y)
    rotate(angle);
    rect(0, 0, this.width, this.height);
    pop();// it will again set the default setting

  }
};


//rect : it always and always make straight rectangles
//translate : it translates ur x and y position
// rotate(angle)

