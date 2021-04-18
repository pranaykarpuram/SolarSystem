class Oort{
    constructor(){
        this.title = createElement('h1');
        this.m1 = createElement('h3');
        this.back = createButton("Back");
    }
    display(){
        if(oState ===1 ){
            background(obg);
            this.title.show();
            this.title.html("Oort Clouds");
            this.title.position(width/2-100,0); 
            this.title.style('color','red');
            this.title.style('font-family','fantasy');
            this.title.style('font-size','80px');
    
            this.back.show();
            this.back.position(50,50);
            this.back.mousePressed(()=>{
                bg = 1;
                oState = 0;
                this.title.hide();
                this.back.hide();
                this.m1.hide();
            });
    
            this.m1.show();
            this.m1.html("The Oort cloud is at the edge of the solar system. These are the farthest objects in our Sun’s gravity. It was discovered by Dutch astronomer Jan Oort. The Oort Cloud is a predicted collection of icy objects farther away than everything else in the solar system.");
            this.m1.style('width','200px');
            textAlign(CENTER);
            this.m1.position(width/2-100,height/2);
            this.m1.style('color','green');
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