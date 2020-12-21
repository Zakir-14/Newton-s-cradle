class Roof{
    constructor(){           
        
        this.image = loadImage("wood2.png");
        this.body = Bodies.rectangle(300,300,500,20,{isStatic:true});
        this.width = 500;
        this.height = 20; 
        this.x = 500;
        this.y = 175;
        World.add(world, this.body);

    }
    display(){
        imageMode(CENTER);
        image(this.image,500,290,this.width,this.height);
    }
}