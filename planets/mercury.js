class Mercury{
    constructor(){
        this.title = createElement('h1');
        this.title2 = createElement('h1');
        this.title3 = createElement('h1');
        this.welcome = createElement('h3');
        this.next = createButton("NEXT ->");
        this.previous = createButton("<- PREVIOUS");
        this.wing = createElement('h3');
        this.facts1 = createElement('h3');
        this.facts2 = createElement('h3');
        this.facts3 = createElement('h3');
        this.facts4 = createElement('h3');


    }

    display(){
        //mSatellite = createSprite(width*21/160,height*392/625); //MaRINER 10
        //mSatellite.addImage(mSatelliteImg);
        //mSatellite.visible = true;
        this.next.mousePressed(()=>{
            mState = mState+1;
        });
        this.previous.mousePressed(()=>{
            mState = mState-1;
        });

        if(mState === 1){
        background(mbg1);
        this.title2.hide();
        this.wing.hide();
        this.welcome.show();
        this.next.show();
        this.title.show();    
        this.title.html("Welcome to Mercury! ");
        this.title.position(width/2 - 100,0);
        this.title.style('color','red');
        this.title.style('font-family','fantasy');
        this.title.style('font-size','80px');

        this.next.position(width-50, 50);
        this.previous.position(50,50);

        this.welcome.style('color','yellow');
        this.welcome.style('font-family','cursive');    
        this.welcome.html("Welcome to Mercury! Mercury is the closest planet to the sun and is the smallest planet in the solar system. ");
        textAlign(CENTER);
        this.welcome.style('width','500px');
        this.welcome.style('font-size','50px');
        this.welcome.position(width/2-100,height/2);
        }

        if(mState === 2){
            background(mbg2);
            this.title.hide();
            this.welcome.hide();
            this.title3.hide();
            this.title2.show();
            this.previous.show();
            this.wing.show();
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();
            this.title2.html("History behind the name Mercury");
            this.title2.position(width/2 - 100,0);
            this.title2.style('color','red');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.wing.style('color','yellow');
            this.wing.style('font-family','cursive');  
            this.wing.html("Mercury was named after the Roman God Mercury. The Roman god Mercury was the son of Maia Maiestas and Jupiter in Roman mythology, and most of his aspects were based on the Greek god Hermes. ");
            textAlign(CENTER);
            this.wing.style('width','500px');
            this.wing.style('font-size','30px');
            this.wing.position(width/2-100,height/2);
        }

        if(mState === 3){
            background(mbg3);
            this.wing.hide();
            this.title2.hide();
            this.title3.show();
            this.title3.html("General Facts about mercury");
            this.title3.position(width/2 - 100,0);
            this.title3.style('color','red');
            this.title3.style('font-family','fantasy');
            this.title3.style('font-size','80px');

            this.facts1.style('color','yellow');
            this.facts1.style('font-family','cursive');  
            this.facts1.show();
            this.facts1.html("Distance from Sun: 60 million km ");
            this.facts1.position(width/2-100,height/2);
            

            this.facts2.style('color','yellow');
            this.facts2.style('font-family','cursive'); 
            this.facts2.show();
            this.facts2.html("Length of a day: 59 Earth Days");
            this.facts2.position(width/2-100, this.facts1.y-20);
            
            this.facts3.style('color','yellow');
            this.facts3.style('font-family','cursive'); 
            this.facts3.show();
            this.facts3.html("Length of a year: 88 days");
            this.facts3.position(width/2 - 100,this.facts2.y-20);
            
            this.facts4.style('color','yellow');
            this.facts4.style('font-family','cursive'); 
            this.facts4.show();
            this.facts4.html("No. of moons: 0");
            this.facts4.html(width/2-100, this.facts3.y-20);

        }
        if(mState === 4){
            game = 1;
            mState = 0;
        }
        if(mState === 0){
            this.title.hide();
            this.title2.hide();
            this.title3.hide();
            this.previous.hide();
            this.next.hide();
            this.welcome.hide();
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();

        }







    }



}