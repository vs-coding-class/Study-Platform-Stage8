class paperBall{
	constructor(){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}

		this.image = loadImage("paperball.png");
		this.r = 50;
		this.x = 100;

		this.body1 = Bodies.circle(this.x,450,this.r,options);
		World.add(world, this.body1);

		this.body2 = Bodies.circle(this.x+75,450,this.r,options);
		World.add(world, this.body2);

		this.body3 = Bodies.circle(this.x+150,450,this.r,options);
		World.add(world, this.body3);

		this.body4 = Bodies.rectangle(200,700,800,50,{isStatic:true});
		World.add(world,this.body4);
	}

	display(){
		push();
		translate(this.x, this.body1.position.y);
		imageMode(CENTER);
		image(this.image,0,0,70,70);
		fill(255,0,255);
		textSize(15);
		text(firstNumber,0,-45);
		pop();

		push();
		translate(this.x+50, this.body2.position.y);
		imageMode(CENTER);
		image(this.image,0,0,70,70);
		fill(255,0,255);
		textSize(20);
		text("/",0,-45);
		pop();

		push();
		translate(this.x+100, this.body3.position.y);
		imageMode(CENTER);
		image(this.image,0,0,70,70);
		fill(255,0,255);
		textSize(15);
		text(secondNumber,-35,-45);
		pop();
	}
}