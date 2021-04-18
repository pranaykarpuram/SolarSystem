class Earth{
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
        this.title4 = createElement('h1');
        this.gravity = createElement('h3');


    }

    display(){
        //mSatellite = createSprite(width*21/160,height*392/625); //MaRINER 10
        //mSatellite.addImage(mSatelliteImg);
        //mSatellite.visible = true;
        this.next.mousePressed(()=>{
            eState = eState+1;
        });
        this.previous.mousePressed(()=>{
            eState = eState-1;
        });

        if(eState === 1){
        background(ebg1);
        this.title2.hide();
        this.wing.hide();
        this.welcome.show();
        this.next.show();
        this.title.show();    
        this.title.html("Welcome to Earth! ");
        this.title.position(width/2 - 100,0);
        this.title.style('color','blue');
        this.title.style('font-family','fantasy');
        this.title.style('font-size','80px');

        this.next.position(width-50, 50);
        this.previous.position(50,50);

        this.welcome.style('color','green');
        this.welcome.style('font-family','fantasy');
        this.welcome.html("Welcome to Earth! Earth is the only planet in the solar system with ocean and life. This makes it very special. ");
        textAlign(CENTER);
        this.welcome.style('width','500px');
        this.welcome.style('font-size','50px');
        this.welcome.position(width/2-100,height/2);
        }

        if(eState === 2){
            background(ebg2);
            this.title.hide();
            this.welcome.hide();
            this.title3.hide();
            this.title2.show();
            this.previous.show();
            this.wing.show();
            
            this.gravity.hide();
            this.title4.hide();
            this.title2.html("Atmosphere");
            this.title2.position(width/2 - 100,0);
            this.title2.style('color','blue');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.wing.style('color','green');
            this.wing.style('font-family','fantasy');
            this.wing.html("Earth's atmosphere consists of Nitrogen (78%) and Oxygen (21%) which are important for life. ");
            textAlign(CENTER);
            this.wing.style('width','500px');
            this.wing.style('font-size','50px');
            this.wing.position(width/2-100,height/2);
        }
        if(eState === 3){
            background(ebg4);
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();
            this.title2.hide();
            this.wing.hide();

            this.title4.html("Gravity");
            this.title4.position(width/2 - 100, 0);
            this.title4.show();
            this.title4.style('color','blue');
            this.title4.style('font-family','fantasy');
            this.title4.style('font-size','80px');

            this.gravity.style('color','green');
            this.gravity.style('font-family','fantasy');
            this.gravity.html("Earth has a force acting in it called gravity. It pulls everything towards the center which helps is walk.");
            textAlign(CENTER);
            this.gravity.style('width','500px');
            this.gravity.style('font-size','50px');
            this.gravity.position(width/2-100,height/2);
            this.gravity.show();


        }

        if(eState === 4){
            background(ebg3);
            this.wing.hide();
            this.title2.hide();
            this.title3.show();
            this.gravity.hide();
            this.title4.hide();

            this.title3.html("General Facts about Earth");
            this.title3.position(width/2 - 100,0);
            this.title3.style('color','blue');
            this.title3.style('font-family','fantasy');
            this.title3.style('font-size','80px');
            
            this.facts1.show();
            this.facts1.html("Distance from Sun: 150 million km ");
            this.facts1.position(width/2-100,height/2);
            this.facts1.style('color','green');
            this.facts1.style('font-family','fantasy');
            this.facts1.style('font-size','20px');
            
            this.facts2.show();
            this.facts2.html("Length of a day: 24 hours");
            this.facts2.position(width/2-100, this.facts1.y-20);
            this.facts2.style('color','green');
            this.facts2.style('font-family','fantasy');
            this.facts2.style('font-size','20px');

            this.facts3.show();
            this.facts3.html("Length of a year: 365.25 days");
            this.facts3.position(width/2 - 100,this.facts2.y-20);
            this.facts3.style('color','green');
            this.facts3.style('font-family','fantasy');
            this.facts3.style('font-size','20px');

            this.facts4.show();
            this.facts4.html("No. of moons: 1");
            this.facts4.position(width/2-100, this.facts3.y-20);
            this.facts4.style('color','green');
            this.facts4.style('font-family','fantasy');
            this.facts4.style('font-size','20px');
        }
        if(eState === 5){ 
            game = 1;
            eState = 0;
        }

        if(eState === 0){
            this.title.hide();
            this.title2.hide();
            this.title3.hide();
            this.title4.hide();
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