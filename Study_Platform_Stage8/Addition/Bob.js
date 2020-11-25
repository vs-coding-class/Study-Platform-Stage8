class Bob{
	constructor(x,y){
		var options={
			isStatic:false,
            restitution:1,
            density:1.2,
		}
        this.x = x;
        this.y = y;
		this.r = 100;
		this.body = Bodies.circle(this.x,this.y,this.r/2,options);
		World.add(world, this.body);
	}

	display(){
		push();
		translate(this.body.position.x, this.body.position.y);
		ellipseMode(CENTER);
		fill(255,0,255);
		ellipse(0,0,this.r, this.r);
		fill(255);
		textSize(13);
		text(firstNumber+" + "+secondNumber,-45,20);
		pop();
	}	
}
