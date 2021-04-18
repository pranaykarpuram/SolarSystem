class Planets{
    constructor(){
        this.mercury = createButton("Mercury");
        this.venus = createButton("Venus");
        this.earth = createButton("Earth");
        this.mars = createButton("Mars");
        this.jupiter = createButton("Jupiter");
        this.saturn = createButton("Saturn");
        this.uranus = createButton("Uranus");
        this.neptune = createButton("Neptune");

        this.extra = createButton("Beyond the Planets");

        this.moon = createButton("Moon");
        this.satellites = createButton("Satellites");
        this.kuiper = createButton("Kuiper Belt");
        this.ast = createButton("Asteroids");
      }
      hide(){
          this.mercury.hide();
          this.venus.hide();
          this.earth.hide();
          this.mars.hide();
          this.jupiter.hide();
          this.saturn.hide();
          this.uranus.hide();
          this.neptune.hide();
          this.extra.hide();
          this.moon.hide();
          this.satellites.hide();
          this.kuiper.hide();
          this.ast.hide();

      }

     display(){
        this.mercury.position(width*1366/2400, height*450/1171);
        this.mercury.style('background-color','red');
        this.mercury.style('color','yellow');
        this.mercury.size(width*150/2400, height*35/1171);
        this.mercury.style('font-size','20px')

        this.venus.position(width*786/2400, height*71/125);
        this.venus.style('background-color','yellow');
        this.venus.style('color','red');
        this.venus.size(width*106/2400, height*35/1171);
        this.venus.style('font-size','20px')
        
        this.earth.position(width*1610/2400, height*515/1171);
        this.earth.style('background-color','blue');
        this.earth.style('color','green');
        this.earth.size(width*106/2400, height*35/1171);
        this.earth.style('font-size','20px')

        this.mars.position(width*631/2400,height*75/125);
        this.mars.style('background-color','grey');
        this.mars.style('color','red');
        this.mars.size(width*92/2400, height*35/1171);
        this.mars.style('font-size','20px')

        this.jupiter.position(width*1910/2400,height*30/125);
        this.jupiter.style('background-color','brown');
        this.jupiter.style('color','yellow');
        this.jupiter.size(width*150/2400, height*35/1171);
        this.jupiter.style('font-size','20px')

        this.saturn.position(width*233/2400,height*775/1171);
        this.saturn.style('background-color','orange');
        this.saturn.style('color','blue');
        this.saturn.size(width*150/2400, height*35/1171);
        this.saturn.style('font-size','20px')
        
        this.uranus.position(width*2178/2400, height*628/1171);
        this.uranus.style('background-color','black');
        this.uranus.style('color','cyan');
        this.uranus.size(width*150/2400, height*35/1171);
        this.uranus.style('font-size','20px')

        this.neptune.position(width*80/2400, height*1005/1171);
        this.neptune.style('background-color','black');
        this.neptune.style('color','blue');
        this.neptune.size(width*150/2400, height*35/1171);
        this.neptune.style('font-size','20px')

        this.extra.position(width*2250/2400,height*60/1171);
        this.extra.style('background-color','cyan');
        this.extra.style('color','purple');

        this.moon.position(width*1748/2400,height*562/1171);
        this.moon.style('background-color','white');
        this.moon.style('color','black');

        this.satellites.position(width*1545/2400, height*652/1171);
        this.satellites.style('background-color','cyan');
        this.satellites.style('color','red');

        this.kuiper.position(width*2316/2400, height*180/1171);
        this.kuiper.style('background-color','purple');
        this.kuiper.style('color','cyan');

        this.ast.position(width*1190/2400,height*352/1171);
        this.ast.style('background-color','brown');
        this.ast.style('color','red');

        this.mercury.mousePressed(()=>{
            planets = "mercury";
            game = 2;
            mState = 1;
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.venus.mousePressed(()=>{
            planets = "venus";
            game = 2;
            vState = 1;
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.earth.mousePressed(()=>{
            planets = "earth";
            game = 2;
            eState = 1;
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.mars.mousePressed(()=>{
            planets = "mars";
            game = 2;
            maState = 1;
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.jupiter.mousePressed(()=>{
            planets = "jupiter";
            game = 2;
            jState = 1;
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.saturn.mousePressed(()=>{
            planets = "saturn";
            game = 2;
            sState = 1;
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.uranus.mousePressed(()=>{
            planets = "uranus";
            game = 2;
            uState = 1;
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.neptune.mousePressed(()=>{
            planets = "neptune";
            game = 2;
            nState = 1;
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.extra.mousePressed(()=>{
            bg = 1;
            game = 2;
        });
        this.moon.mousePressed(()=>{
            planets = "moon";
            moState = 1;
            game = 2;
        });
        this.kuiper.mousePressed(()=>{
            planets = "kuiper";
            game = 2;
            kState = 1;
        });
        this.satellites.mousePressed(()=>{
            planets = "sat";
            satState = 1;
            game = 2;
        });
        this.ast.mousePressed(()=>{
            planets = "ast";
            aState = 1;
            game = 2;
        });
        if(game === 1){
            this.mercury.show();
            this.venus.show();
            this.earth.show();
            this.mars.show();
            this.jupiter.show();
            this.saturn.show();
            this.uranus.show();
            this.neptune.show();
            this.extra.show();
            this.moon.show();
            this.satellites.show();
            this.kuiper.show();
            this.ast.show();
        }
        else{
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
            this.moon.hide();
            this.satellites.hide();
            this.kuiper.hide();
            this.ast.hide();
        }


     } 
     
    





}