class Uranus{
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
            uState = uState+1;
        });
        this.previous.mousePressed(()=>{
            uState = uState-1;
        });

        if(uState === 1){
            background(ubg1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Welcome to Uranus!");
            this.title1.position(width/2-100,0);
            this.title1.style('color','white');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("Uranus is called the blue planet. This is because it is made of tiny crystal gases in methane which makes it look blue. It was the first planet to be discovered through a telescope in 1781.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','cyan');
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');
        }
        if(uState == 2){
            background(ubg4);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();

            this.title2.show();
            this.m2.show();

            this.title2.html("Rings");
            this.title2.position(width/2-100, 0);
            this.title2.style('color','white');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.m2.html("Uranus also has rings like Saturn which are believed to be made by broken moons. Uranus has 9 bright rings as well as several lighter rings.");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('color','cyan');
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(uState === 3){
            background(ubg2);
            this.title2.hide();
            this.m2.hide();
            this.title4.hide();            
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();

            this.title3.show();
            this.m3.show();

            this.title3.html("History behind the name Uranus");
            this.title3.position(width/2-100, 0);
            this.title3.style('color','white');
            this.title3.style('font-family','fantasy');
            this.title3.style('font-size','80px');

            this.m3.html("Uranus was named after the Roman god of the heavens. Uranus was the husband of Gaia and called Mother Earth.")
            this.m3.style('width','300px');
            textAlign(CENTER);
            this.m3.position(width/2-100,height/2);
            this.m3.style('color','cyan');
            this.m3.style('width','500px');
            this.m3.style('font-size','30px');
        }
        if(uState === 4){
            background(ubg3);
            this.title3.hide();
            this.m3.hide();
            this.title5.hide();
            this.m5.hide();
            this.title4.show();          
            this.facts1.show();
            this.facts2.show();
            this.facts3.show();
            this.facts4.show();

            this.title4.html("General Facts about Uranus"); 
            this.title4.position(width/2 - 100,0);
            this.title4.style('color','white');
            this.title4.style('font-family','fantasy');
            this.title4.style('font-size','80px');
            
            this.facts1.html("Distance from Sun: 757.7 million km ");
            this.facts1.position(width/2-100,height/2);
            this.facts1.style('color','cyan');

            this.facts2.html("Length of a day: 17 hours 14 minutes");
            this.facts2.position(width/2-100, this.facts1.y-20);
            this.facts2.style('color','cyan');

            this.facts3.html("Length of a year: 84 years");
            this.facts3.position(width/2 - 100,this.facts2.y-20);
            this.facts3.style('color','cyan');

            this.facts4.html("No. of moons: 13");
            this.facts4.style('color','cyan');
            this.facts4.position(width/2-100, this.facts3.y-20);
        }
        if(uState === 5){
            background(ubg5);
            this.title4.hide();            
            this.facts1.hide();
            this.facts2.hide();
            this.facts3.hide();
            this.facts4.hide();
            this.title6.hide();
            this.m6.hide();

            this.title5.show();
            this.m5.show();

            this.title5.html("Moon miranda");
            this.title5.position(width/2-100,0);
            this.title5.style('color','white');
            this.title5.style('font-family','fantasy');
            this.title5.style('font-size','80px');

            this.m5.html("Moon Miranda, has many dark areas. These are gigantic cliffs which are twice as tall as Mt. Everest.")
            this.m5.style('width','300px');
            textAlign(CENTER);
            this.m5.position(width/2-100,height/2);
            this.m5.style('color','cyan');
            this.m5.style('width','500px');
            this.m5.style('font-size','30px');
        }
        if(uState === 6){
            background(ubg6);
            this.title5.hide();
            this.m5.hide();

            this.title6.show();
            this.m6.show();

            
            this.title6.html("William Herschel");
            this.title6.position(width/2-100,0);
            this.title6.style('color','white');
            this.title6.style('font-family','fantasy');
            this.title6.style('font-size','80px');

            this.m6.html("William Herschel discovered Uranus on March 13st 1781. He discovered Uranus using a telescope he made by himself. He also formed the theory of stellar evolution.")
            this.m6.style('width','300px');
            textAlign(CENTER);
            this.m6.position(width/2-100,height/2);
            this.m6.style('color','cyan');
            this.m6.style('width','500px');
            this.m6.style('font-size','30px');

        }
        if(uState === 7){
            game = 1;
            uState = 0;
        }
        if(uState === 0){            
            this.title6.hide();
            this.m6.hide();
            this.next.hide();
            this.previous.hide();
        }        


    }
}