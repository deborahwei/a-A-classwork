export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  animate() {
    this.drawBackground(  )
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}