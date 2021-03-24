class Drop{
    constructor(x,y,radius){
        var options = {
            'fiction' : 0.1,
            'isStatic' : false,
            'restitution' : 0.1,
            'density' : 0.4
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("blue");
        stroke("black");
        ellipse( 0, 0,7.5);
        pop();
    }
    update(){
        if(this.body.position.y>400){
           Matter.Body.setPosition(this.body,{x: random(0,490),
           y: random(-0,0)})
         }
    }
}