class Snowflakes {

    constructor(x, y){

        var options = {

            restitution : 0,
            density : 0.1, 
            friction : 1.5,

        }

        this.r = 50;
        this.snow = Bodies.circle(x, y, this.r/2 -20, options)
        
        World.add(world, this.snow);

        this.snowfalls = [];

        this.snow1 = loadImage("snow4.webp");
        this.snow2 = loadImage("snow5.webp");
        
        this.Random = random(0, 3);

        this.Visibility = 255;

    }

    display(){

        var pos = this.snow.position;
        var angle = this.snow.angle;

        push ();

        translate(pos.x, pos.y);

        rotate(angle);

        if(this.Random <= 1){

            var Images = this.snow1;
      
        }
        else{
      
            Images = this.snow2;
      
        }

        if(frameCount % 300 === 0 && pos.y > height - 50){

            World.remove(world, this.snow);
            
        }
        else{
        
        imageMode(CENTER);
        image(Images, 0, 0, 50, 50);

        }

        pop ();

        
    }

}   