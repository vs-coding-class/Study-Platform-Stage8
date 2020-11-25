class Checker{
  constructor(){
    this.input = createInput("Answer");
    this.nextProblem = createButton("Next Problem");
    this.checkProblem = createButton("Check Problem");
  }

  display(){
    this.input.position(displayWidth/2,displayHeight/2);
    this.nextProblem.position(displayWidth/4-50,displayHeight/3);
    this.checkProblem.position(displayWidth/4-50,displayHeight/3 + 20);

    if(bottomNumber!==0){
      var percentage = topNumber/bottomNumber*100;
      var twoDecimal = percentage.toFixed(2);
      textSize(25);
      text(twoDecimal+"%",325,65);
    }

    textSize(25);
    text("Score:",120,65);
    text(topNumber,235,50);
    text("______",200,55);
    text(bottomNumber,235,90);

    this.nextProblem.mousePressed(()=>{
      bottomNumber = bottomNumber+1;
      Checker.update();
      firstNumber = Math.round(random(1000,9999));
      secondNumber = Math.round(random(1000,9999));

      bigNumber = firstNumber - secondNumber;
      conversion = bigNumber.toString();
    });

    this.checkProblem.mousePressed(()=>{
      checking = this.input.value();
      if(checking === conversion){
        alert("Correct Answer!");
        topNumber=topNumber+1;
        Checker.update();
        hexagon.body.position.y=50;
      }
      else{
       alert("Wrong!");
      }
    });
  }

  static update(){
    database.ref().update({
      top:topNumber,
      bottom:bottomNumber
    });
  }
}