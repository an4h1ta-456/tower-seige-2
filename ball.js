class Ball{
    constructor(x, y){
        var options={
            isStatic: true,
            friction: 0,
            restitution: 1,
            density: 1.2
        }
    
    this.body = Bodies.circle(x, y, 20, options);
    this.x = x;
    this.y = y;
    this.r = 20;

    World.add(world, this.body);
    } 
    
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0,0,this.r);
        pop();
    }
}