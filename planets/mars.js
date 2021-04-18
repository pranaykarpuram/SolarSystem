class Mars{
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
            maState = maState+1;
        });
        this.previous.mousePressed(()=>{
            maState = maState-1;
        });

        if(maState === 1){
            background(mabg1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Welcome to Mars!");
            this.title1.position(width/2-100,0);
            this.title1.style('color','Grey');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("Mars is known as the red planet. This is due to the rusted iron in the rocks that cover it. Mars is half the size of the earth.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','red');
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');
            
        }
        if(maState === 2){
            background(mabg4);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();

            this.title2.show();
            this.m2.show();

            this.title2.html("Weather");
            this.title2.position(width/2-100, 0);
            this.title2.style('color','Grey');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');


            this.m2.html("Though it shows an impression of being a hot planet it’s very cold. Dust storms rage across the planet.");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('color','red');
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(maState === 3){
            background(mabg2);
            this.title2.hide();
            this.m2.hide();
            this.title4.hide();            
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();

            this.title3.show();
            this.m3.show();

            this.title3.html("History behind the name Mars");
            this.title3.position(width/2-100, 0);
            this.title3.style('color','Grey');
            this.title3.style('font-family','fantasy');
            this.title3.style('font-size','80px');


            this.m3.html("Mars was named after the Roman god of war. He was also the agricultural guardian. This most prominent Roman god was the son of Jupiter and Juno.")
            this.m3.style('width','300px');
            textAlign(CENTER);
            this.m3.position(width/2-100,height/2);
            this.m3.style('color','red');
            this.m3.style('width','500px');
            this.m3.style('font-size','30px');
            
        }
        if(maState === 4){
            background(mabg3);
            this.title3.hide();
            this.m3.hide();
            this.title5.hide();
            this.m5.hide();
            this.title4.show();          
            this.facts1.show();
            this.facts2.show();
            this.facts3.show();
            this.facts4.show();

            this.title4.html("General Facts about Mars"); 
            this.title4.position(width/2 - 100,0);
            this.title4.style('color','Grey');
            this.title4.style('font-family','fantasy');
            this.title4.style('font-size','80px');
            
            this.facts1.html("Distance from Sun: 228 million km ");
            this.facts1.position(width/2-100,height/2);
            this.facts1.style('color','red');
            
            this.facts2.html("Length of a day: 24 and half hours");
            this.facts2.position(width/2-100, this.facts1.y-20);
            this.facts2.style('color','red');

            this.facts3.html("Length of a year: 687 days");
            this.facts3.position(width/2 - 100,this.facts2.y-20);
            this.facts3.style('color','red');

            this.facts4.html("No. of moons: 2");
            this.facts4.style('color','red');
            this.facts4.position(width/2-100, this.facts3.y-20);
        }
        if(maState === 5){
            background(mabg5);
            this.title4.hide();            
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();

            this.title5.show();
            this.m5.show();

            this.title5.html("Olympic Mons");
            this.title5.position(width/2-100,0);
            this.title5.style('color','Grey');
            this.title5.style('font-family','fantasy');
            this.title5.style('font-size','80px');

            this.m5.html("Olympic Mons Largest volcano in the solar system. Dozen large volcanos. Olympus Mons rises three times higher than Earth's highest mountain, Mount Everest")
            this.m5.style('width','300px');
            textAlign(CENTER);
            this.m5.position(width/2-100,height/2);
            this.m5.style('color','red');
            this.m5.style('width','500px');
            this.m5.style('font-size','30px');
            
        }
        if(maState === 6){
            game = 1;
            jState = 0;
            
            this.title5.hide();
            this.m5.hide();
            this.next.hide();
            this.previous.hide();
        }
    }

}