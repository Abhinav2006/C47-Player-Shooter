class Form{
    constructor(){
        this.head = createElement('h1')
        this.input = createInput("Name")
        this.play = createButton('Play')
        this.welcome = createElement('h2')
        this.restart = createButton('Play Again')
    }
    hide(){
        this.head.hide();
        this.input.hide();
        this.play.hide();
        this.welcome.hide();
    }
    display(){
        this.head.html("Player Shooter");
        this.head.position(250, 100);
        this.input.position(300, 200);
        this.play.position(350, 230);
        this.restart.position(10, 10);

        this.play.mousePressed(()=>{
            this.input.hide();
            this.play.hide();
            this.head.hide();
            player1 = new Player()
            playerCount = playerCount + 1
            player1.name = this.input.value();
            player1.index = playerCount
            player1.updateName();
            player1.updateCount(playerCount);
            this.welcome.html("Waiting for Players...");
            this.welcome.position(300, 200);
        })

        this.restart.mousePressed(()=>{
            player1.updateCount(0);
        })
    }
}