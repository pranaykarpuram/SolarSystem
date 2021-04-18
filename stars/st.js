class Stars{
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
            starState = starState+1;
        });
        this.previous.mousePressed(()=>{
            starState = starState-1;
        });

        if(starState === 1){
            background(stbg1);
            this.title2.hide();
            this.m2.hide();
            this.next.show();
            this.previous.hide();

            this.m1.show();
            this.title1.show();

            this.next.position(width-50, 50);
            this.previous.position(50,50);

            this.title1.html("Stars");
            this.title1.position(width/2-100,0);
            this.title1.style('color','orange');
            this.title1.style('font-family','fantasy');
            this.title1.style('font-size','80px');

            this.m1.html("Beyond our solar system, there are billions of stars such as our sun. Stars begin life in swirling clouds of gas and dust called nebulae. When it dies it shrinks into a tiny spot in space called a black hole.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','yellow');
            this.m1.style('width','500px');
            this.m1.style('font-size','30px');
        }
        if(starState === 2){
            background(stbg2);
            this.title1.hide();
            this.m1.hide();
            this.previous.show();

            this.title2.show();
            this.m2.show();

            this.title2.html("Sun");
            this.title2.position(width/2-100, 0);
            this.title2.style('color','orange');
            this.title2.style('font-family','fantasy');
            this.title2.style('font-size','80px');

            this.m2.html("Our Sun is a medium-sized star. It is a super hot ball of fiery gas. It gives us heat and light Stars such as Antares are 800 times wider than our sun. ");
            this.m2.style('width','300px');
            textAlign(CENTER);
            this.m2.position(width/2-100,height/2);
            this.m2.style('color','yellow');
            this.m2.style('width','500px');
            this.m2.style('font-size','30px');
        }
        if(starState === 3){
            bg = 1;
            starState = 0;
        }
        if(starState === 0){
            this.title2.hide();
            this.m2.hide();
            this.next.hide();
            this.previous.hide();
        }
    }
}