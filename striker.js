class striker{
    constructor(x,y,width,height){
        var options={
            density:1,
            restitution:0,
            friction:1.2,
            //isStatic:false
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.t=loadImage("polygon.png")
        Matter.World.add(world,this.body)
    }
    
        
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rect(0,0,30,30)
        imageMode(CENTER)
        image(this.t,0,0,55,55)
        pop();
    }
}

