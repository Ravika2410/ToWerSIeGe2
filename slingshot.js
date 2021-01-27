class sling{
    constructor(a,b)
    {
        this.ing=loadImage("polygon.png");
        this.thread=Matter.Constraint.create(
        {
            bodyA:a,
            pointB:b,
            stiffness:0.5,
            length:40
        }
        );
        Matter.World.add(myWorld,this.thread);
        
    }
    display()
    {
        if(this.thread.bodyA)
        {
         var a=this.thread.bodyA.position;
         var b=this.thread.pointB;
        //line(a.x,a.y,b.x,b.y);
        push();
        strokeWeight(4);
        stroke("#00FBFF");
        line(a.x,a.y,b.x,b.y);
        pop();
        }

    }

    
    fly()
    {
        this.thread.bodyA=null;
    }
    
}                   