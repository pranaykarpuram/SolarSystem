class Sat{
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
            satState = satState+1;
        });
        this.previous.mousePressed(()=>{
            satState = satState-1;
        });

        if(satState === 1){
            background(sabg1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Satellites");
            this.title1.position(width/2-100,0);
            this.title1.style('color','red');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("A Satellite is an object that orbits another object in space. There are two types of satellites, artificial and natural. Moon is an example of a natural satellite.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','cyan');
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');
        }
        if(satState === 2){
            background(sabg2);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();

            this.title2.show();
            this.m2.show();

            this.title2.html("Artificial Satellites");
            this.title2.position(width/2-100, 0);
            this.title2.style('color','red');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');


            this.m2.html("Artificial satellites is one made by human and sent into space by rockets. Communication, weather, Navigation, Watching Earth, Spy Satellites, and space discovery are uses of artificial satellites.");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('color','cyan');
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(satState === 3){
            game = 1;
            satState = 0;
        }
        if(satState === 0){
            this.title2.hide();
            this.m2.hide();
            this.next.hide();
            this.previous.hide();
        }
    }
}