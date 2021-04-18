class Ast{
    constructor(){
        this.title1 = createElement('h1');
        this.title2 = createElement('h1');

        this.next = createButton("NEXT ->");
        this.previous = createButton("<- PREVIOUS");

        this.m1 = createElement('h3');
        this.m2 = createElement('h3');

    }
    display(){
        this.next.mousePressed(()=>{
            aState = aState+1;
        });
        this.previous.mousePressed(()=>{
            aState = aState-1;
        });

        if(aState === 1){
            background(abg1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Asteroid Belt");
            this.title1.position(width/2-100,0);
            this.title1.style('color','brown');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("Most asteroids in our solar system exist in a ring between Mars and Jupiter. They circle our sun like all the planets. When asteroids hit the earth it makes a huge crater.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','red');
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');
        }
        if(aState === 2){
            background(abg2);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();

            this.title2.show();
            this.m2.show();

            this.title2.html("Meteorites");
            this.title2.position(width/2-100, 0);
            this.title1.style('color','brown');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m2.html("People believe dinosaurs died as a result of enormous meteorites hitting the earth. 99% of meteorites originally came from asteroid belts.");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('color','red');
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(aState === 3){
            game = 1;
            aState = 0;
        }
        if(aState === 0){
            this.title2.hide();
            this.m2.hide();
            this.next.hide();
            this.previous.hide();
        }
    }
}