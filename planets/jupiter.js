class Jupiter{
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
            jState = jState+1;
        });
        this.previous.mousePressed(()=>{
            jState = jState-1;
        });

        if(jState === 1){
            background(jbg1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Welcome to Jupiter!");
            this.title1.position(width/2-100,0);
            this.title1.style('color','brown');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("Jupiter is the biggest planet in our solar system. All the other planets can be fit inside Jupiter with room to spare.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','yellow');
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');
        }
        if(jState === 2){
            background(jbg4);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();

            this.title2.show();
            this.m2.show();

            this.title2.html("Clouds");
            this.title2.position(width/2-100, 0);
            this.title2.style('color','brown');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.m2.html(" Jupiter is the first gas planet that has red and yellow clouds swirling around it. It has nowhere to land and no hard surface. ");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('color','yellow');
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(jState === 3){
            background(jbg2);
            this.title2.hide();
            this.m2.hide();
            this.title4.hide();            
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();

            this.title3.show();
            this.m3.show();

            this.title3.html("History behind the name Jupiter");
            this.title3.position(width/2-100, 0);
            this.title3.style('color','brown');
            this.title3.style('font-family','fantasy');
            this.title3.style('font-size','80px');

            this.m3.html("Jupiter was named after the king of all roman gods. He was the god of sky and thunder.")
            this.m3.style('width','300px');
            textAlign(CENTER);
            this.m3.position(width/2-100,height/2);
            this.m3.style('color','yellow');
            this.m3.style('width','500px');
            this.m3.style('font-size','30px');

        }
        if(jState === 4){
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

            this.title4.html("General Facts about Jupiter"); 
            this.title4.position(width/2 - 100,0);
            this.title4.style('color','brown');
            this.title4.style('font-family','fantasy');
            this.title4.style('font-size','80px');
            
            this.facts1.html("Distance from Sun: 757.7 million km ");
            this.facts1.position(width/2-100,height/2);
            this.facts1.style('color','yellow');

            this.facts2.html("Length of a day: 9 hours 56 minutes");
            this.facts2.position(width/2-100, this.facts1.y-20);
            this.facts2.style('color','yellow');

            this.facts3.html("Length of a year: 12 years");
            this.facts3.position(width/2 - 100,this.facts2.y-20);
            this.facts3.style('color','yellow');

            this.facts4.html("No. of moons: 79");
            this.facts4.style('color','yellow');
            this.facts4.position(width/2-100, this.facts3.y-20);
        }
        if(jState === 5){
            background(jbg5);
            this.title4.hide();            
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();
            this.title6.hide();
            this.m6.hide();

            this.title5.show();
            this.m5.show();

            this.title5.html("Great Red Spot");
            this.title5.position(width/2-100,0);
            this.title5.style('color','brown');
            this.title5.style('font-family','fantasy');
            this.title5.style('font-size','80px');

            this.m5.html("The Great Red spot is the most famous storm in the solar system. It's twice the size of earth. The wind speeds here are from 270-425mph.")
            this.m5.style('width','300px');
            textAlign(CENTER);
            this.m5.position(width/2-100,height/2);
            this.m5.style('color','yellow');
            this.m5.style('width','500px');
            this.m5.style('font-size','30px');

        }
        if(jState === 6){
            background(jbg6);
            this.title5.hide();
            this.m5.hide();

            this.title6.show();
            this.m6.show();

            
            this.title6.html("Moons of Jupiter");
            this.title6.position(width/2-100,0);
            this.title6.style('color','brown');
            this.title6.style('font-family','fantasy');
            this.title6.style('font-size','80px');

            this.m6.html("Io, Europa, Ganymede and Callisto are four planet sized moons of Jupiter. Io is violently volcanic, Europa is encrusted in ice, Ganymede has a magnetic field, and Callisto is pockmarked with ancient craters.")
            this.m6.style('width','300px');
            textAlign(CENTER);
            this.m6.position(width/2-100,height/2);
            this.m6.style('color','yellow');
            this.m6.style('width','500px');
            this.m6.style('font-size','30px');

        }

        if(jState === 7){
            game = 1;
            jState = 0;
        }
        if(jState === 0){            
            this.title6.hide();
            this.m6.hide();
            this.next.hide();
            this.previous.hide();
        }
    }
}