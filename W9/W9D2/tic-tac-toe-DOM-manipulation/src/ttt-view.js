class View {
  constructor(game, el) { // el = .ttt
    this.game = game 
    this.el = el 
    this.setupBoard()
  }

  setupBoard() {
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
    addEventListener('click', handleClick)
  }

  handleClick(e) {
    e.stopPropagation()
    let ele = e.target
    ele.classList.add('clicked')
    this.game.playMove(data-pos.value)
  }

  makeMove(square) {}
    if  {alert(‘Invalid move’)}

}

module.exports = View;
