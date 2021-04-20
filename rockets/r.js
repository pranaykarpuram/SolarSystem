class Rockets{
    constructor(){
        this.title = createElement('h1');
        this.m1 = createElement('h3');
        this.back = createButton("Back");
    }
    display(){
        if(rState ===1 ){
            background(rbg);
            this.title.show();
            this.title.html("Rockets");
            this.title.position(width/2-100,0);
            this.title.style('color','white');
            this.title.style('font-family','fantasy');
            this.title.style('font-size','80px');
    
            this.back.show();
            this.back.position(50,50);
            this.back.mousePressed(()=>{
                bg = 1;
                rState = 0;
                this.title.hide();
                this.back.hide();
                this.m1.hide();
            });
    
            this.m1.show();
            this.m1.html("Rockets are the means through which all space crafts such as satellites are blasted away from the earth.  Most rocket engines turn the fuel into a hot gas. Pushing the gas out of the back of the engine makes the rocket move forward.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','red');
            this.m1.style('font-family','fantasy');
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
