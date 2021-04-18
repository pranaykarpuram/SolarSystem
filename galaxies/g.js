class Galaxies{
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
            gState = gState+1;
        });
        this.previous.mousePressed(()=>{
            gState = gState-1;
        });

        if(gState === 1){
            background(gb1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Galaxies");
            this.title1.position(width/2-100,0);
            this.title1.style('color','cyan');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("There are millions of other galaxies such as our milky way galaxy in the dollar system. Andromeda is the closest is spiral, Magellanic Cloud is irregular in shape and The Mice Galaxies are elliptic.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','pink');
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');
        }
        if(gState === 2){
            background(gb2);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();

            this.title2.show();
            this.m2.show();

            this.title2.html("Hubble Telescope");
            this.title2.position(width/2-100, 0);
            this.title2.style('color','cyan');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.m2.html("A Galaxies are millions of miles away from us can be spotted using Hubble Telescope. When we look up in the sky we see all the other stars in the milky way galaxy.");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('color','pink');
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(gState === 3){
            bg = 1;
            gState = 0;
        }
        if(gState === 0){
            this.title2.hide();
            this.m2.hide();
            this.next.hide();
            this.previous.hide();
        }
    }
}