class Block {
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;

    var options = {
      restitution: 0.4,
      friction: 1,
      density: 0.8
    }

    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.col = random(["yellow", "red", "blue", "green"]);
    World.add(world, this.body);
  }

  display() {
    rectMode(CENTER);
    fill(this.col);
    noStroke();
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
  }
}
