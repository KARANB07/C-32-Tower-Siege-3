class rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB
        this.rope=Constraint.create(options)
        World.add(world,this.rope)

    }
    fly(){
        this.rope.bodyA=null
        
        }
        attach(body){
            this.rope.bodyA = body;
        }
    display(){
        if(this.rope.BodyA){
        var p1=this.rope.bodyA.position
        var p1x=p1.x
        var p1y=p1.y
        var p2x=this.pointB.x
        var p2y=this.pointB.y
        push();
        stroke(255,255,0)
        line(p1x,p1y,p2x,p2y)
        pop();
        }
    }
}

