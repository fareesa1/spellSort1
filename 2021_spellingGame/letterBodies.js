class LetterBody{

    constructor(x,y){
        var options={
            isStatic : true  
        }
        this.body=Bodies.rectangle(x,y,displayWidth/6,displayWidth/6,options)
        this.width = displayWidth/6;
        this.height = displayWidth/6;
        World.add(world,this.body);
        
    }

    display(){
        push();
        // translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill("red");
        stroke("black");
        rect(this.body.position.x,this.body.position.y,this.width,this,height);
        //fill("white");
        //stroke("black");
        //text("A");
        pop();
    }

}