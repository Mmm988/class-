class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref("playerCount").once("value")
            if(playerCountRef.exists){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
        player1=createSprite(300,800)
        player1.addImage(player1Img)
        player2=createSprite(400,800)
        player2.addImage(player2Img)
        allPlayer=[player1,player2]
    }
    play(){
        form.hide();
        Player.getPlayerInfo()
        if(allPlayer!==undefined){
            var index=0
            var x=300;
            var y;
            for(var plr in allPlayer){
                index=index+1;
                x=x+200
                y=800
                allPlayer[index-1].x=x
                allPlayer[index-1].y=y
                if(index===player.index){
                    stroke(10)
                    fill("red")
                    ellipse(x,y,50,50)
                    textSize(20)
                    text(player.name,x-50,y+50)
                    player[index-1].shapeColor="red";
                }
            }
        }
        if(frameCount%500===0){
        monster1.velocityY=monster1.velocityY+0.3
        monster2.velocityY=monster2.velocityY+0.4
        bomb.velocityY=bomb.velocityY+0.5
        }
        if(keyIsDown(LEFT_ARROW) && player.index!==null){
            player.distance-=20;
            player.update()
        }
        if(keyIsDown(RIGHT_ARROW) && player.index!==null){
            player.distance+=20;
            player.update()
        }
        drawSprites();
    }
    end(){
        fill("white")
        textSize(50)
        text("GAME OVER",250,400)
    }
}