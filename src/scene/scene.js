import sceneConf from '../../confs/scene-conf.js'
import camera from './camera.js'
import light from './light.js'
import background from '../objects/background.js'

class Scene {
  constructor () {

  }

  init () {
    this.instance = new THREE.Scene()
    const renderer = this.renderer = new THREE.WebGLRenderer(
      {
        antialias: true,
        canvas: canvas,
        preserveDrawingBuffer: true,
      }
    )
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap
    
    this.camera = camera
    this.light = light
    this.camera.init()
    this.light.init()
    this.instance.add(this.camera.instance)
    for(let lightType in this.light.instance) {
      this.instance.add(this.light.instance[lightType])
    }
    this.background = background
    this.background.init()
    this.background.instance.position.z = -84
    this.camera.instance.add(this.background.instance)
  }

  reset () {
    this.camera.reset()
    this.light.reset()
  }

  render () {
    this.renderer.render(this.instance,this.camera.instance)
  }

  updateCameraPosition (targetPosition) {
    this.camera.updatePosition(targetPosition)
    this.light.updatePosition(targetPosition)
  }

  addScore (scoreInstance) {
    this.currentScore = scoreInstance
    this.camera.instance.add(scoreInstance)
    scoreInstance.position.x = -20
    scoreInstance.position.y = 40
  }

  updateScore (scoreInstance) {
    this.camera.instance.remove(this.currentScore)
    this.currentScore = scoreInstance
    this.camera.instance.add(scoreInstance)
    scoreInstance.position.x = -20
    scoreInstance.position.y = 40
  }

}

export default new Scene()