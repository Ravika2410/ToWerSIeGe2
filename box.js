class box
{
    constructor(x,y,w,h)
    {
        this.ing=loadImage("b.png");
        var property={
        restitution:0,
        };
        this.width=30;
        this.height=45;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,property);
        Matter.World.add(myWorld,this.body);
        this.visible=255;
    }
    display()
    {
    push();
    imageMode(CENTER);
    image(this.ing,this.body.position.x,this.body.position.y,this.width,this.height);
    pop();

    if(this.body.position.y>470)
    {
        Matter.World.remove(myWorld,this.body);
        tint(255,this.visible);
        imageMode(CENTER);
        image(this.ing,this.body.position.x,this.body.position.y,this.width,this.height);
        this.visible-=5;
    }

    }
}

