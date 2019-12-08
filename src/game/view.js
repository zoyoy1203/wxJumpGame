
import GamePage from '../pages/game-page.js'
import GameOverPage from '../pages/game-over-page.js'

class GameView {

  constructor () {

  }

  showGameOverPage () {
    this.gamePage.hide()
    this.gameOverPage.show()
  }

  showGamePage () {
    this.gameOverPage.hide()
    this.gamePage.restart()
    this.gamePage.show()
  }

  restartGame () {
    this.gamePage.restart()
  }

  initGameOverPage (callbacks) {
    this.gameOverPage = new GameOverPage (callbacks);
    this.gameOverPage.init({
      camera: this.gamePage.scene.camera.instance,
      scene: this.gamePage.scene
    })
  }

  initGamePage (callbacks) {
    this.gamePage = new GamePage(callbacks)
    this.gamePage.init()
  }
}

export default new GameView()