class Neptune{
    constructor(){

        this.title1 = createElement('h1');
        this.title2 = createElement('h1');
        this.title3 = createElement('h1');
        this.title4 = createElement('h1');
        this.title5 = createElement('h1');

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
    }
    display(){
        
        this.next.mousePressed(()=>{
            nState = nState+1;
        });
        this.previous.mousePressed(()=>{
            nState = nState-1;
        });

        if(nState === 0){            
            this.title5.hide();
            this.m5.hide();
            this.next.hide();
            this.previous.hide();
        }    
        
        if(nState === 1){
            background(nbg1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Welcome to Neptune!");
            this.title1.position(width/2-100,0);
            this.title1.style('color','blue');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("Neptune is called a mystery planet which was discovered when someone figured out that Uranus was being gravitationally pulled by another planet. ");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');

        }
        if(nState === 2){
            background(nbg4);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();
            this.title3.hide();
            this.m3.hide();

            this.title2.show();
            this.m2.show();

            this.title2.html("Weather");
            this.title2.position(width/2-100, 0);
            this.title2.style('color','blue');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.m2.html("Neptune has the most violent weather in the solar system which has hurricanes that are 10 times faster than earth’s worst hurricanes.");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(nState === 3){
            background(nbg3);
            this.title2.hide();
            this.m2.hide();
            this.title4.hide();            
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();

            this.title3.show();
            this.m3.show();

            this.title3.html("History behind the name Neptune");
            this.title3.position(width/2-100, 0);
            this.title3.style('color','blue');
            this.title3.style('font-family','fantasy');
            this.title3.style('font-size','80px');

            this.m3.html("Neptune was named after the roman god of sea also called Posiedon in greek mythology. It was chosen due to it's blue color. Astronomers thought this blue was water.")
            this.m3.style('width','300px');
            textAlign(CENTER);
            this.m3.position(width/2-100,height/2);
            this.m3.style('width','500px');
            this.m3.style('font-size','30px');
        }
        if(nState === 4){
            background(nbg4);
            this.title3.hide();
            this.m3.hide();
            this.title5.hide();
            this.m5.hide();
            this.title4.show();          
            this.facts1.show();
            this.facts2.show();
            this.facts3.show();
            this.facts4.show();

            this.title4.html("General Facts about Neptune"); 
            this.title4.position(width/2 - 100,0);
            this.title4.style('color','blue');
            this.title4.style('font-family','fantasy');
            this.title4.style('font-size','80px');

            this.facts1.html("Distance from Sun: 4.4756 billion km");
            this.facts1.position(width/2-100,height/2);

            this.facts2.html("Length of a day: 16 hours 7 minutes");
            this.facts2.position(width/2-100, this.facts1.y-20);
            
            this.facts3.html("Length of a year: 165 years");
            this.facts3.position(width/2 - 100,this.facts2.y-20);
            
            this.facts4.html("No. of moons: 14");
            this.facts4.position(width/2-100, this.facts3.y-20);

        }
        if(nState === 5){
            background(nbg5);
            this.title4.hide();            
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();

            this.title5.show();
            this.m5.show();

            this.title5.html("Moon Triton");
            this.title5.position(width/2-100,0);
            this.title5.style('color','blue');
            this.title5.style('font-family','fantasy');
            this.title5.style('font-size','80px');

            this.m5.html("Triton is Neptune's biggest moon. It is also the coldest place in the solar system. It's so cold that the air has frozen around it.");
            this.m5.style('width','300px');
            textAlign(CENTER);
            this.m5.position(width/2-100,height/2);
            this.m5.style('width','500px');
            this.m5.style('font-size','30px');

        }
        if(nState === 6){
            this.title5.hide();
            this.m5.hide();
            game = 1;
            nState = 0;
        }

    }
}