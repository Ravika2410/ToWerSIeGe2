class ground{
    constructor(x,y,w,h)
    {
        //console.log("ground constructor called");
        this.body=Matter.Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.width=w;
        this.height=h;
        Matter.World.add(myWorld,this.body);
    }
    display()
    {
        push();
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
    }