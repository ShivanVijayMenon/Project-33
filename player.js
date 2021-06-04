class Player {

    constructor(x, y){

        var Options = {

            restitution : 0.2,
            friction : 1,
            density : 1

        }

        this.width = 200;
        this.height = 300;

        this.body = Bodies.rectangle(x, y, this.width, this.height, Options);

        World.add(world, this.body);

        this.images = loadImage("download.png");
        this.imagesLeft = loadImage("download3.png");
        this.imageRight = loadImage("download2.png");

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        
        push ();

        translate (pos.x, pos.y);
        rotate(angle);

        var images = this.images;

            if(keyCode === LEFT_ARROW){

                images = this.imagesLeft
    
            }

            if(keyCode === RIGHT_ARROW){

                images = this.imageRight;

            }


        imageMode(CENTER);
        image(images, 0, 0+20, 200, 300);

        pop ();

    }

}