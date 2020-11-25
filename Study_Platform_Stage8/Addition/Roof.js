class Roof{
	constructor(){
		var options={
			isStatic:true			
		}

		this.body=Bodies.rectangle(width/2,150,700,20,options);
		this.width = 700;
		this.height = 20;
 		World.add(world, this.body);
	}
	display(){
			push();
			translate(this.body.position.x, this.body.position.y);
			rectMode(CENTER);
			fill(255,255,0);
			rect(0,0,this.width, this.height);
			pop();
	}
}