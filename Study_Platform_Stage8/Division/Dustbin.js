class dustbin{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.bodyWidth=120;
		this.bodyHeight=100;
		this.bodyThickness=5;
		this.angle=0;
		this.image = loadImage("wastebin.png");
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.bodyWidth, this.bodyThickness, {isStatic:true});
		this.leftBody=Bodies.rectangle(this.x-this.bodyWidth/2, this.y-this.bodyHeight/2, this.bodyThickness, this.bodyHeight, {isStatic:true});
		Matter.Body.setAngle(this.leftBody, this.angle);
		

		this.rightBody=Bodies.rectangle(this.x+this.bodyWidth/2, this.y-this.bodyHeight/2, this.bodyThickness, this.bodyHeight, {isStatic:true});
		Matter.Body.setAngle(this.rightBody, -1*this.angle);
		World.add(world, this.bottomBody);
		World.add(world, this.leftBody);
		World.add(world, this.rightBody);

	}

	display(){
		push();
		translate(this.leftBody.position.x,this.leftBody.position.y);
		rectMode(CENTER);
		angleMode(RADIANS);
		fill(255);
		stroke(255);
		rotate(this.angle);
		rect(0,0,this.bodyThickness, this.bodyHeight);
		pop();

		push();
		translate(this.rightBody.position.x,this.rightBody.position.y);
		rectMode(CENTER);
		stroke(255);
		angleMode(RADIANS);
		fill(255);
		rotate(-1*this.angle);
		rect(0,0,this.bodyThickness, this.bodyHeight);
		pop();

		push();
		translate(this.bottomBody.position.x,this.bottomBody.position.y);
		imageMode(CENTER);
		stroke(255);
		angleMode(RADIANS);
		fill(255);
		image(this.image,0,-60,this.bodyWidth, this.bodyThickness + 120);
		pop();	
	}
}