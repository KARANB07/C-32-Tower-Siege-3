class box{
constructor(x,y,width,height){
var options={
    density:1,
    restitution:0,
    friction:0.3
}
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.Visiblity=500;
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
}
score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
      score++;
    }
  }
display(){
    var angle=this.body.angle
    if(this.body.speed < 6){
      push();
      translate(this.body.position.x,this.body.position.y)
      rectMode(CENTER)
      rect(0,0,this.width,this.height)
      rotate(angle)
      fill(255,0,0)
      pop();
       }
       else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255, this.Visiblity);
        
        fill("purple");
        pop();
       }
}
}

