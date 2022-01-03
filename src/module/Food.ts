class Food {
  element: HTMLElement;
  constructor () {
    this.element = document.getElementById('food')!;
  }

  get X () {
    return this.element.offsetLeft;
  }

  get Y () {
    return this.element.offsetTop;
  }

  change () {
    let top = Math.round((Math.random() * 29)) * 10 + 'px';
    let left = Math.round((Math.random() * 29)) * 10 + 'px';
    this.element.style.left = left;
    this.element.style.top = top;

  }
}

export default Food;
