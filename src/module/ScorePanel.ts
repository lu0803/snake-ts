class ScorePanel {
  score = 0;
  level = 0;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxLevel: number;
  upScore: number;

  constructor (maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  addScore () {
    this.scoreEle.innerHTML = ++this.score + '';
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  levelUp () {
    console.log(1)
    if (this.level >= this.maxLevel) {
      return
    }
    this.levelEle.innerHTML = ++this.level + '';
  }
}

export default ScorePanel
