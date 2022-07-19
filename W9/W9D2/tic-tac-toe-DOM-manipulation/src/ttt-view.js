class View {
  constructor(game, el) { // el = .ttt
    this.game = game 
    this.el = el 
    this.setupBoard()
    console.log('hi')
    this.bindEvents()
  }

  setupBoard() {
    debugger
    const board = document.createElement('ul')
    for (let r = 0; r < 3; r++ ) {
      for (let c = 0; c < 3; c++) {
        const cell = document.createElement('li');
        cell.dataset.pos = JSON.stringify([r, c]);
        board.append(cell);
      }
    }
    this.el.append(board)
  }
  
  bindEvents() {
    debugger;
    this.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick(e) {
    let ele = e.target // this is where the event occured 
    ele.classList.add("clicked")
    alert('hi')
    // if (!ele.innerText){ // if there is no mark 
    //   ele.innerText = this.game.currentPlayer; // set mark to the current player
    //   this.game.playMove(data-pos.value); // gives us the position at data-pos 
    //   this.makeMove(ele); 
    // }
  } 

  makeMove(square) {
    square.classList.add("clicked");
  }
}

module.exports = View;
