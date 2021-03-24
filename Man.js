//class for the man with an umbrella
class Man{
  constructor(x, y,width,height){
      var options = { 
      'isStatic': true
      }

      this.body = Bodies.circle(x, y, 50, options);
      this.radius = 5;
      this.image = loadImage("man.gif");
      World.add(world, this.body);
  }

    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y+35,120,180);
    }
}