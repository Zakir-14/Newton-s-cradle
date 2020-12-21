class Bob{
   constructor(x,y){
    this.body = Bodies.rectangle(x,y,200,20);
    this.x = x
    this.y = y
    this.image = loadImage("bob.png");
    World.add(world, this.body);
   }
   display(){
      image(this.image,this.x,this.y,65,60);
      imageMode(CENTER);

   }
}