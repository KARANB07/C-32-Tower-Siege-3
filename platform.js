
class platform{
   constructor(x,y,width,height){
    var options={
       density:1,
        restitution:1,
        friction:0.00000000000001,
        isStatic:true
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
    }
    display(){
        //var angle=this.body.angle
        push();
        rectMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        
        //rotate(angle)
        fill(255,255,0)
        rect(0,0,this.width,this.height)
        this.y=this.y+50
        pop();
    
    }
    }


   //// class platform {
      //  constructor(x, y, width, height) {
      ////    var options = {
      ///      isStatic: true,
       ////   };
       ////   this.body = Bodies.rectangle(x, y, width, height, options);
       //////   this.width = width;
       //////   this.height = height;
       ///////   World.add(world, this.body);
      ///  }
       //// display() {
        //  var angle = this.body.angle;
        ////  push();
        //  translate(this.body.position.x, this.body.position.y);
        //  rotate(angle);
         // rectMode(CENTER);
         // rect(0, 0, this.width, this.height);
         // pop();
       // }
      //}
      
    