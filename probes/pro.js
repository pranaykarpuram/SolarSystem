class Probes{
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
            prState = prState+1;
        });
        this.previous.mousePressed(()=>{
            prState = prState-1;
        });

        if(prState === 1){
            background(pr1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Space Probes");
            this.title1.position(width/2-100,0);
            this.title1.style('color','yellow');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("Space probes are spacecraft that don’t have any humans on board. It gathers information around space and sends information to earth. Rosetta, Galileo, Voyager, and Messenger are some examples of space probes.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','purple');
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');
        }
        if(prState === 2){
            background(pr2);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();

            this.title2.show();
            this.m2.show();

            this.title2.html("Space Agencies");
            this.title2.position(width/2-100, 0);
            this.title2.style('color','yellow');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.m2.html("Space agencies such as the National Aeronautics and Space Administration (NASA), European Space Agency(ESA), Japan Aerospace Exploration Agency (Jaxa), Canadian Space Agency (CSA), and Indian Space Research Organisation (ISRO) are some space agencies that send space probes.");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('color','purple');
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(prState === 3){
            bg = 1;
            prState = 0;
        }
        if(prState === 0){
            this.title2.hide();
            this.m2.hide();
            this.next.hide();
            this.previous.hide();
        }
    }
}