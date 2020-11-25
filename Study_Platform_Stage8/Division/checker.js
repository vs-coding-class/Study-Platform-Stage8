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
      firstNumber = Math.round(random(10000,99999));
      secondNumber = Math.round(random(10,99));

      var floating = firstNumber / secondNumber;
      bigNumber = floating.toFixed(2);
      conversion = bigNumber.toString();
    });

    this.checkProblem.mousePressed(()=>{
      checking = this.input.value();
      if(checking === conversion){
        alert("Correct Answer!");
        topNumber=topNumber+1;
        Matter.Body.applyForce(paperObj.body3,paperObj.body3.position,{x:0,y:600});
        Matter.Body.applyForce(paperObj.body2,paperObj.body2.position,{x:0,y:450});
        Matter.Body.applyForce(paperObj.body1,paperObj.body1.position,{x:0,y:600});
        Checker.update();
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