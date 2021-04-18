class Saturn{
    constructor(){
        
        this.title1 = createElement('h1');
        this.title2 = createElement('h1');
        this.title3 = createElement('h1');
        this.title4 = createElement('h1');
        this.title5 = createElement('h1');
        this.title6 = createElement('h1');

        this.next = createButton("NEXT ->");
        this.previous = createButton("<- PREVIOUS");

        this.m1 = createElement('h3');
        this.m2 = createElement('h3');
        this.m3 = createElement('h3');

        this.facts1 = createElement('h3');
        this.facts2 = createElement('h3');
        this.facts3 = createElement('h3');
        this.facts4 = createElement('h3');

        this.m4 = createElement('h3');
        this.m5 = createElement('h3');
        this.m6 = createElement('h3');
    }
    display(){
        this.next.mousePressed(()=>{
            sState = sState+1;
        });
        this.previous.mousePressed(()=>{
            sState = sState-1;
        });

        if(sState === 1){
            background(sbg1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Welcome to Saturn!");
            this.title1.position(width/2-100,0);
            this.title1.style('color','orange');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("Saturn is considered the most beautiful planet in the solar system due to its rings. Saturn is the farthest planet we can see with our naked eye. It’s so light it would float on a pool.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','blue');
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');
        }
        if(sState === 2){
            background(sbg4);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();

            this.title2.show();
            this.m2.show();

            this.title2.html("Saturn's rings");
            this.title2.position(width/2-100, 0);
            this.title2.style('color','orange');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.m2.html("Saturn has 7 rings. Saturn’s rings are 0.8km thick and 290km wide. These rings are made of millions of pieces of ice. Sizes varying from as small as dust particles to cars.");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('color','blue');
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(sState === 3){
            background(sbg2);
            this.title2.hide();
            this.m2.hide();
            this.title4.hide();            
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();

            this.title3.show();
            this.m3.show();

            this.title3.html("History behind the name Saturn");
            this.title3.position(width/2-100, 0);
            this.title3.style('color','orange');
            this.title3.style('font-family','fantasy');
            this.title3.style('font-size','80px');

            this.m3.html("Saturn was named after the god of sowing or seed. She was the agricultural deity of Saturn.");
            this.m3.style('width','300px');
            textAlign(CENTER);
            this.m3.position(width/2-100,height/2);
            this.m3.style('color','blue');
            this.m3.style('width','500px');
            this.m3.style('font-size','30px');

        }
        if(sState === 4){
            background(jbg3);
            this.title3.hide();
            this.m3.hide();
            this.title5.hide();
            this.m5.hide();
            this.title4.show();          
            this.facts1.show();
            this.facts2.show();
            this.facts3.show();
            this.facts4.show();

            this.title4.html("General Facts about Saturn"); 
            this.title4.position(width/2 - 100,0);
            this.title4.style('color','orange');
            this.title4.style('font-family','fantasy');
            this.title4.style('font-size','80px');
            
            this.facts1.html("Distance from Sun: 1.488 billion km ");
            this.facts1.position(width/2-100,height/2);
            this.facts1.style('color','blue');

            this.facts2.html("Length of a day: 10 hours 39 minutes");
            this.facts2.position(width/2-100, this.facts1.y-20);
            this.facts2.style('color','blue');

            this.facts3.html("Length of a year: 29.5 Years");
            this.facts3.position(width/2 - 100,this.facts2.y-20);
            this.facts3.style('color','blue');

            this.facts4.html("No. of moons: 82");
            this.facts4.position(width/2-100, this.facts3.y-20);
            this.facts4.style('color','blue');
        }
        if(sState === 5){
            background(sbg5);
            this.title4.hide();            
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();
            this.title6.hide();
            this.m6.hide();

            this.title5.show();
            this.m5.show();

            this.title5.html("Mimas");
            this.title5.position(width/2-100,0);
            this.title5.style('color','orange');
            this.title5.style('font-family','fantasy');
            this.title5.style('font-size','80px');

            this.m5.html("Mimas is one of saturns moon which looks like an eye due to the huge crater. It's thought that the planet is entirely made of water ice.");
            this.m5.style('width','300px');
            textAlign(CENTER);
            this.m5.position(width/2-100,height/2);
            this.m5.style('color','blue');
            this.m5.style('width','500px');
            this.m5.style('font-size','30px');

        }
        if(sState === 6){
            background(sbg6);
            this.title5.hide();
            this.m5.hide();

            this.title6.show();
            this.m6.show();

            
            this.title6.html("Enceladus");
            this.title6.position(width/2-100,0);
            this.title6.style('color','orange');
            this.title6.style('font-family','fantasy');
            this.title6.style('font-size','80px');

            this.m6.html("Enceladus is the sixth largest moon of Saturn. It's knon for it's south polar geysers. This subsurface ocean on the south is 10km thick.");
            this.m6.style('width','300px');
            textAlign(CENTER);
            this.m6.position(width/2-100,height/2);
            this.m6.style('color','blue');
            this.m6.style('width','500px');
            this.m6.style('font-size','30px');

        }

        if(sState === 7){
            game = 1;
            sState = 0;
        }
        if(sState === 0){            
            this.title6.hide();
            this.m6.hide();
            this.next.hide();
            this.previous.hide();
        }
    }
}