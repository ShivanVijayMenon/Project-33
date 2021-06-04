class Ground {

    constructor(x, y, width, height, ){

        var Options = {

            isStatic : true

        }

        this.ground = Bodies.rectangle(x, y, width, height, Options);

        this.width = width;
        this.height = height;

        World.add(world, this.ground);

        this.color = (255, 255, 255);

    }

    display(){

        var pos = this.ground.position;

        fill(this.color);
        stroke(this.color);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);

    }

}