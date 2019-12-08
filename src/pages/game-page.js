import { scene } from '../scene/index.js'
import Cuboid from '../block/cuboid.js'
import Cylinder from '../block/cylinder.js'
export default class GamePage {
  constructor (callbacks) {
    this.callbacks = callbacks
  }

  init () {
    this.scene = scene
    this.scene.init()
    this.addInitBlock()
    this.render()
  }

  render () {
    this.scene.render()
    requestAnimationFrame(this.render.bind(this))
  }

  addInitBlock () {
    const cuboidBlock = new Cuboid(-15,0,0)
    const cylinderBlock = new Cylinder(23,0,0)
    this.scene.instance.add(cuboidBlock.instance)
    this.scene.instance.add(cylinderBlock.instance)
  }

}