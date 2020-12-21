class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options= {
        bodyA : bodyA,
        bodyB : bodyB,
        pointB:{x:this.offsetX,y:this.offsetY}  
    }
    this.chain = Matter.Constraint.create(options);
    World.add(world,this.chain);
    }
    display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    strokeWeight(3);

    var clamp1X = pointA.x
    var clamp1Y = pointA.y-25
    var clamp2X=pointB.x+this.offsetX
    var clamp2Y=pointB.y+this.offsetY

    line(clamp1X,clamp1Y,clamp2X,clamp2Y);
}
}