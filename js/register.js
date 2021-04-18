class Register{
    constructor(){
        this.greeting = createElement('h2');

        this.name = createInput("Enter your nickname...");
        this.start = createButton("Enter")
    }
    hide(){
        this.name.show();
        this.start.show();
        this.heading.hide();
        this.greeting.hide();
    }

    display(){

        
        this.name.show();
        this.start.show();

        this.name.position(width/2,height/2);
        this.start.position(width/2,this.name.y+40);
        



  

        this.start.mousePressed(()=>{
            this.name.hide();
            this.start.hide();
            player.name = this.name.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            //this.greeting.html("Hey "+ player.name+" please wait for the other players to join");
            //this.greeting.position(width/2-100, height/2);
            game = 1;
            name = this.name.value();
            

        });
        


    }




}