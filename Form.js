class Form{
    constructor(){
        this.input=createInput("NAME")
        this.button=createButton("PLAY")
        this.greeting=createElement("h3")
        this.reset=createButton("RESET")
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title=createElement("h2")
        title.html("SPACE GAME")
        title.position(400,50)
        this.reset.position(600,500)
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
        })
        this.input.position(400,300)
        this.button.position(400,400)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value();
            playerCount+=1
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("HELLO"+ player.name)
            this.greeting.position(400,300)
        })
    }
}