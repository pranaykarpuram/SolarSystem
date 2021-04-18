class Kui{
    constructor(){
        this.title = createElement('h1');
        this.m1 = createElement('h3');
        this.back = createButton("Back");
    }
    display(){
    if(kState ===1 ){
        background(k1);
        this.title.show();
        this.title.html("Kuiper Belt");
        this.title.position(width/2-100,0);
        this.title.style('color','cyan');
        this.title.style('font-family','fantasy');
        this.title.style('font-size','80px');

        this.back.show();
        this.back.position(50,50);
        this.back.mousePressed(()=>{
            game = 1;
            kState = 0;
            this.title.hide();
            this.back.hide();
            this.m1.hide();
        });

        this.m1.html("The Kuiper belt is an area beyond Neptune. Millions of icy bits and pieces float around together here around the sun. Dwarf planets such as Pluto lie in this area. The Kuiper belt is a place humans have just begun to explore and understand. ")
        this.m1.style('width','200px');
        textAlign(CENTER);
        this.m1.position(width/2-100,height/2);
        this.m1.style('color','purple');
        this.m1.style('width','500px');
        this.m1.style('font-size','30px');
        }
        else{
            this.back.hide();
        }
    }

    hide(){
        this.title.hide();
        this.back.hide();
        this.m1.hide();
    }
}