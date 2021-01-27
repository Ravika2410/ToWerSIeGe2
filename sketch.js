const world=Matter.World,
      engine = Matter.Engine,
      Bodies=Matter.Bodies,
      body = Matter.Body,
      cons=Matter.Constraint;
var myWorld,myEngine;
var g,r,o;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var b21,b2,b23,b24,b25,b26,b27,b28,b29,b30;
var b31,b32,b33,b34,b35,b36,b37,b38,b39,b40;
var b41,b42,b43,b44,b45,b46,b47,b48,b39,b50;
var b51,b52,b53,b54,b55,b56,b57,b58,b59,b60;
var b61,b62,b63,b64,b65,b66,b67,b68;
var poly;
var slings;
var polygon_i;
var gameState=0;

function preload()
{
    polygon_i=loadImage("polygon.png");
}

function setup()
{
    createCanvas(1200,600);

    myEngine=engine.create();
    myWorld=myEngine.world;

    poly=Bodies.circle(50,200,20,{density:1,friction:1,restitution:0});
    world.add(myWorld,poly);

    g=new ground(width/2,590,width,20);
    r=new ground(580,450,400,20);
    o=new ground(1015,300,200,20);

    slings=new sling(this.poly,{x:100,y:200});

    b1=new box(450,418.5);
    b2=new box(480,418.5);
    b3=new box(510,418.5);
    b4=new box(540,418.5);
    b5=new box(570,418.5);
    b6=new box(600,418.5);
    b7=new box(630,418.5);
    b8=new box(660,418.5);
    b9=new box(690,418.5);
    b10=new box(720,418.5);
    
    b11=new box(495,373);
    b12=new box(525,373);
    b13=new box(555,373);
    b14=new box(585,373);
    b15=new box(615,373);
    b16=new box(645,373);
    b17=new box(675,373);
    b18=new box(705,373);
    b19=new box(465,373);

    b35=new box(510,328);
    b36=new box(540,328);
    b37=new box(570,328);
    b38=new box(600,328);
    b39=new box(630,328);
    b40=new box(660,328);
    b41=new box(480,328);
    b42=new box(690,328);

    b43=new box(495,283);
    b44=new box(525,283);
    b45=new box(555,283);
    b46=new box(585,283);
    b47=new box(615,283);
    b48=new box(645,283);
    b49=new box(675,283);

    b50=new box(510,238);
    b51=new box(540,238);
    b52=new box(570,238);
    b53=new box(600,238);
    b54=new box(630,238);
    b55=new box(660,238);

    b56=new box(525,194);
    b57=new box(555,194);
    b58=new box(585,194);
    b59=new box(615,194);
    b60=new box(645,194);

    b61=new box(540,154);
    b62=new box(570,154);
    b63=new box(600,154);
    b64=new box(630,154);

    b65=new box(555,105);
    b66=new box(580,105);
    b67=new box(610,105);

    b68=new box(580,60);

    b20=new box(960,270);
    b21=new box(990,270);
    b22=new box(1020,270);
    b23=new box(1050,270);
    b24=new box(1080,270);

    b25=new box(975,222);
    b26=new box(1005,222);
    b27=new box(1035,222);
    b28=new box(1065,222);

    b29=new box(990,177);
    b30=new box(1020,177);
    b31=new box(1050,177);

    b32=new box(1005,133);
    b33=new box(1035,133);

    b34=new box(1020,99);



}


function draw()
{
    background("#922B21");
    
    engine.update(myEngine);

    imageMode(CENTER);
    image(polygon_i,poly.position.x,poly.position.y,40,40);

    g.display();

    r.display();

    o.display();
    
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();    
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    b26.display();
    b27.display();
    b28.display();
    b29.display();
    b30.display();
    b31.display();
    b32.display();
    b33.display();
    b34.display();
    b35.display();
    b36.display();
    b37.display();
    b38.display();
    b39.display();
    b40.display();
    b41.display();
    b42.display();
    b43.display();
    b44.display();
    b45.display();
    b46.display();
    b47.display();
    b48.display();
    b49.display();
    b50.display();
    b51.display();
    b52.display();
    b53.display();
    b54.display();
    b55.display();
    b56.display();
    b57.display();
    b58.display();
    b59.display();
    b60.display();
    b61.display();
    b62.display();
    b63.display();
    b64.display();
    b65.display();
    b66.display();
    b67.display();
    b68.display();

slings.display();

textSize(30);
text(mouseX+","+mouseY,mouseX,mouseY);

}

function mouseDragged()
{
    if(gameState==0)
    {
        Matter.Body.setPosition(poly,{x:mouseX,y:mouseY})
    }
}

function mouseReleased()
{
    slings.fly();
    gameState=1;
}

function keyPressesd()
{
    if(keyCode===32)
    {
        slings.attach(poly);
    }
}