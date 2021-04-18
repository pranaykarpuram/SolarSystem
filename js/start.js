class Start{
    constructor(){

    }

    async start(){
      register = new Register();
      register.display();
        if(state === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once('value');
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }


        }    
    }





}