class Chooser{
    constructor(){
        this.easy = createButton("Easy Mode");
        this.medium = createButton("Normal Mode");
        this.hard = createButton("Hard Mode")
    }

    display(){
        this.easy.position(displayWidth/2,displayHeight/2-20);
        this.medium.position(displayWidth/2,displayHeight/2);
        this.hard.position(displayWidth/2,displayHeight/2+20);

        this.easy.mousePressed(()=>{
            gameState = "easy";
            chooserObject.hiding();
        });

        this.medium.mousePressed(()=>{
            gameState = "medium";
            chooserObject.hiding();
        });

        this.hard.mousePressed(()=>{
            gameState = "hard";
            chooserObject.hiding();
        });
    }

    hiding(){
        this.easy.hide();
        this.medium.hide();
        this.hard.hide();
    }
}