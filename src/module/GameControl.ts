import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
  food: Food;
  scorePanel: ScorePanel;
  snake: Snake;
  direction: string = 'ArrowRight'
  isLive = true;
  
  constructor () {
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.snake = new Snake();

    this.init()
    
  }

  init () {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  keydownHandler (event: KeyboardEvent) {
    this.direction = event.key
  }

  run () {
    /* 
      ArrowUp    向上
      ArrowDown  向下
      ArrowLeft  向左
      ArrowRight 向右
    */
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case 'ArrowUp':
        Y -= 10;
        break;
      case 'ArrowDown':
        Y += 10;
        break;
      case 'ArrowLeft':
        X -= 10;
        break;
      case 'ArrowRight':
        X += 10;
        break;
    }
    this.checkEat(X, Y);
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (error) {
      alert(error)
      this.isLive = false
    }
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  checkEat (X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl;
