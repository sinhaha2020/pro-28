class Stone
{
    constructor(x,y,width,height)
    {
        var options ={
            isStatic:false,
            restituion:0,
            friction:1,
            density:1.2
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        width = width;
        height = height;
        this.image = loadImage("Plucking mangoes/stone.png");
        
        World.add(world,this.body);
    }
    display()
    {
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

}