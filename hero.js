class Hero {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,350,options);
      this.r = 350;
      this.image = loadImage("Superhero-01.png");
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      //ellipseMode(CENTER);
      //fill("white");
      //circle(pos.x, pos.y, 50);
      push();
      translate(pos.x, pos.y)
      rotate(angle)
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
  }