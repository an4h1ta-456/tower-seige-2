class Boxes{
 constructor(x,y){
    var options = {
        isStatic: true,
        restitution:0,
        friction:1,
    }
    this.body = Bodies.rectangle(x, y, 40, 50, options);
    this.width = 40;
    this.height = 50;
    World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
    push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0, 0,this.width,this.height);
        pop();
    }
}