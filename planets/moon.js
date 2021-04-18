class Moon{
    constructor(){
        this.title1 = createElement('h1');
        this.title2 = createElement('h1');
        this.title3 = createElement('h1');
        this.next = createButton("NEXT ->");
        this.previous = createButton("<- PREVIOUS");

        this.m1 = createElement('h3');
        this.m2 = createElement('h3');
        this.m3 = createElement('h3');
    }
    display(){
        this.next.mousePressed(()=>{
            moState = moState+1;
        });
        this.previous.mousePressed(()=>{
            moState = moState-1;
        });

        if(moState === 1){
            background(moon1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Welcome to Moon!");
            this.title1.position(width/2-100,0);
            this.title1.style('color','white');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("Our Moon is the closest neighbor to us in space. It’s covered in dents called craters. It has dark patches that we call seas. We only see one side of the moon from earth.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','white');
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');            
        }
        if(moState === 2){
            background(moon2);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();

            this.title2.show();
            this.m2.show();

            this.title2.html("Ecllipse");
            this.title2.position(width/2-100, 0);
            this.title2.style('color','white');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.m2.html("When the moon moves right between the earth and the sun, it blocks out the light from the sun for up to eight minutes called an eclipse.");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('color','white');
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(moState === 3){
            background(moon3);
            this.title2.hide();
            this.m2.hide();


            this.title3.show();
            this.m3.show();

            this.title3.html("Phases of Moon");
            this.title3.position(width/2-100, 0);
            this.title3.style('color','white');
            this.title3.style('font-family','fantasy');
            this.title3.style('font-size','80px');

            this.m3.html("It’s a natural satellite that changes phases from no moon to full moon. It takes about 29 ½ days for a moon to be full again.")
            this.m3.style('width','300px');
            textAlign(CENTER);
            this.m3.position(width/2-100,height/2);
            this.m3.style('color','white');
            this.m3.style('width','500px');
            this.m3.style('font-size','30px');
            
        }
        if(moState === 4){
            game = 1;
            moState = 0;
        }
        if(moState === 0){
            this.title3.hide();
            this.m3.hide();
            this.next.hide();
            this.previous.hide();
        }
    }
}