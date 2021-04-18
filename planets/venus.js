class Venus{
    constructor(){
        this.title = createElement('h1');
        this.title2 = createElement('h1');
        this.title3 = createElement('h1');
        this.title4 = createElement('h1');
        this.next = createButton("NEXT ->");
        this.previous = createButton("<- PREVIOUS");
        this.welcome = createElement('h2');
        this.love = createElement('h2');
        this.facts1 = createElement('h3');
        this.facts2 = createElement('h3');
        this.facts3 = createElement('h3');
        this.facts4 = createElement('h3');
        this.atmosphere = createElement('h3');
    }

    display(){

        this.next.mousePressed(()=>{
            vState = vState+1;
        });
        this.previous.mousePressed(()=>{
            vState = vState-1;
        });

        if(vState === 1){
            background(vbg1);
            this.title2.hide();
            this.love.hide();
            this.title.show();
            this.previous.hide();
            this.welcome.show();
            this.title.html("Welcome to Venus!");
            this.title.position(width/2 - 100,0);
            this.title.style('color','yellow');
            this.title.style('font-family','fantasy');
            this.title.style('font-size','80px');
            
        
            this.next.position(width-50, 50);
            this.next.show();

            this.welcome.html("Welcome to Venus! Venus is the second closest planet to the sun and the hottest plabet in the solar system!");
            textAlign(CENTER);
            this.welcome.style('width','500px');
            this.welcome.style('font-size','50px');
            this.welcome.position(width/2-100,height/2);
            this.welcome.style('color','red');
            this.welcome.style('font-family','cursive'); 

        }

        if(vState === 2){
            background(vbg2);
            this.previous.position(50,50);
            this.previous.show();
            this.title2.show();
            this.love.show();
            this.title4.hide();
            this.atmosphere.hide();
            this.title.hide();
            this.welcome.hide();
            this.title2.html("History behind the name Venus");
            this.title2.position(width/2 - 100,0);
            this.title2.style('color','yellow');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.love.style('color','red');
            this.love.style('font-family','cursive'); 
            this.love.html("Venus was named after the Goddess of love. She was the Roman counterpart to the Greek Aphrodite");
            textAlign(CENTER);
            this.love.style('width','500px');
            this.love.style('font-size','50px');
            this.love.position(width/2-100,height/2);
        }

        if(vState === 3){
            background(vbg3);
            this.title4.show();
            this.atmosphere.show();
            this.title2.hide();
            this.love.hide();
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();

            this.title4.html("Venus's Atmosphere");
            this.title4.position(width/2-50,0);
            this.title4.style('color','yellow');
            this.title4.style('font-family','fantasy');
            this.title4.style('font-size','80px');

            this.atmosphere.style('color','red');
            this.atmosphere.style('font-family','cursive'); 
            this.atmosphere.html("Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of mostly sulfuric acid that trap heat, causing a runaway greenhouse effect.")
            textAlign(CENTER);
            this.atmosphere.style('width','500px');
            this.atmosphere.style('font-size','30px');
            this.atmosphere.position(width/2-100,height/2);
        }



        if(vState === 4){
            background(vbg4);
            this.title3.show();
            this.title3.html("Facts about Venus");
            this.title3.style('color','yellow');
            this.title3.style('font-family','fantasy');
            this.title3.style('font-size','80px');

            this.title3.position(width/2 - 100, 0);
            this.title4.hide();
            this.atmosphere.hide();


            this.facts1.show();
            this.facts1.html("Distance from Sun: 107 million km ");
            this.facts1.position(width/2-100,height/2);
            this.facts1.style('color','red');
            this.facts1.style('font-family','cursive'); 
            
            this.facts2.show();
            this.facts2.html("Length of a day: 243 Earth Days");
            this.facts2.position(width/2-100, this.facts1.y-20);
            this.facts2.style('color','red');
            this.facts2.style('font-family','cursive');  
            
            this.facts3.show();
            this.facts3.html("Length of a year: 225 days");
            this.facts3.position(width/2 - 100,this.facts2.y-20);
            this.facts3.style('color','red');
            this.facts3.style('font-family','cursive'); 
            
            this.facts4.show();
            this.facts4.html("No. of moons: 0");
            this.facts4.position(width/2-100, this.facts3.y-20);
            this.facts4.style('color','red');
            this.facts4.style('font-family','cursive'); 
        }
        if(vState === 5){
            vState = 0;
            game = 1;

        }
        if(vState === 0){
            this.title.hide();
            this.title2.hide();
            this.title3.hide();
            this.title4.hide();
            this.next.hide();
            this.previous.hide();
            this.welcome.hide();
            this.love.hide();
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();
            this.atmosphere.hide();
        }
    }

}