class Rectangle{
	constructor(){
		var options={
			isStatic:true			
		}

		this.x = 1200;
		this.y = 100;
		this.width = 100;
		this.height = 50;

		this.body1 = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
		World.add(world, this.body1);
		 
		this.body2 = Bodies.rectangle(this.x,this.y+100,this.width,this.height,options);
		World.add(world, this.body2);

		this.body3 = Bodies.rectangle(this.x,this.y+200,this.width,this.height,options);
 		World.add(world, this.body3);
	}
	display(){
		push();
		translate(this.x, this.y);
		rectMode(CENTER);
		fill(255,255,0);
		rect(0,0,this.width, this.height);
		textSize(20);
		fill(255,46,99);
		text(firstNumber,-45,0);
		pop();

		push();
		translate(this.x, this.y+100);
		rectMode(CENTER);
		fill(255,255,0);
		rect(0,0,this.width, this.height);
		textSize(20);
		fill(255,46,99);
		text("*",-45,0);
		pop();

		push();
		translate(this.x, this.y+200);
		rectMode(CENTER);
		fill(255,255,0);
		rect(0,0,this.width, this.height);
		textSize(20);
		fill(255,46,99);
		text(secondNumber,0,0);
		pop();
	}
}