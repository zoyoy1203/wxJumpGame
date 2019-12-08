import * as THREE from '../libs/three.js'
import game from './game/game.js'
window.THREE = THREE;


export default class Main {
  constructor() {
    game.init()
  }
}