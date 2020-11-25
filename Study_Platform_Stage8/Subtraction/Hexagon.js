class Hexagon{
  constructor() {
    var options = {
      restitution:2.2,
      density:0.01
    }
    this.x = 1250;
    this.y
    this.body = Bodies.rectangle(1250,100,190,90,options);
    this.image = loadImage("hexagon.jpg");
    this.width = 200;
    this.height = 100;
    World.add(world, this.body);

    var secondOptions={
      isStatic:true
    }
    this.secondbody = Bodies.rectangle(1250,850,100,5,secondOptions);
    World.add(world,this.secondbody);
  }

  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    textSize(15);
		text(firstNumber+" - "+secondNumber,-53,5);
    pop();
  }
}