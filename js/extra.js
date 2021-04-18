class Extra{
    constructor(){
        this.back = createButton("Back to planets");

        this.probes = createButton("Space Probes");
        this.oort = createButton("Oort Clouds");
    
        this.rockets = createButton("Rockets");
        this.stars = createButton("Stars");
        this.galaxy = createButton("Galaxies");
    }
    display(){
        this.back.show();
        this.back.position(width*2250/2400,height*60/1171);
        this.back.style('background-color','cyan');
        this.back.style('color','purple');
        this.back.mousePressed(()=>{
            game = 1;
            bg = 0;
        });

        this.probes.show();
        this.probes.position(width*500/2400,height*750/1171);
        this.probes.style('background-color','yellow');
        this.probes.style('color','purple');
        this.probes.mousePressed(()=>{
            extra = 1;
            bg = 2;
            prState = 1;
            this.back.hide();
            this.probes.hide();
            this.oort.hide();
            this.voyager.hide();
            this.rockets.hide();
            this.stars.hide();
            this.galaxy.hide();
        });

        this.oort.show();
        this.oort.position(width*508/2400, height*345/1171);
        this.oort.style('background-color','red');
        this.oort.style('color','green');
        this.oort.mousePressed(()=>{
            extra = 2;
            bg = 2;
            oState = 1;
            this.back.hide();
            this.probes.hide();
            this.oort.hide();
            this.voyager.hide();
            this.rockets.hide();
            this.stars.hide();
            this.galaxy.hide();
        });

  

        this.rockets.show();
        this.rockets.position(width*650/2400,height*1100/1171);
        this.rockets.style('background-color','red');
        this.rockets.style('color','white');
        this.rockets.mousePressed(()=>{
            extra = 4;
            bg = 2;
            rState = 1;
            this.back.hide();
            this.probes.hide();
            this.oort.hide();
            this.voyager.hide();
            this.rockets.hide();
            this.stars.hide();
            this.galaxy.hide();
        });
        
        this.stars.show();
        this.stars.position(width*1850/2400,height*1100/1171);
        this.stars.style('background-color','orange');
        this.stars.style('color','yellow');
        this.stars.mousePressed(()=>{
            extra = 5;
            bg = 2;
            starState = 1;
            this.back.hide();
            this.probes.hide();
            this.oort.hide();
            this.voyager.hide();
            this.rockets.hide();
            this.stars.hide();
            this.galaxy.hide();
        });
        
        this.galaxy.show();
        this.galaxy.position(width*1415/2400,height*390/1171);
        this.galaxy.style('background-color','cyan');
        this.galaxy.style('color','pink');
        this.galaxy.mousePressed(()=>{
            extra = 6;
            bg = 2;
            gState = 1;
            this.back.hide();
            this.probes.hide();
            this.oort.hide();
            this.voyager.hide();
            this.rockets.hide();
            this.stars.hide();
            this.galaxy.hide();
        });

    }
    hide(){
        this.back.hide();
        this.probes.hide();
        this.oort.hide();
        this.rockets.hide();
        this.stars.hide();
        this.galaxy.hide();
    }

}