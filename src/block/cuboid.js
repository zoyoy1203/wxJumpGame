
import BaseBlock from './base.js'

export default class Cuboid extends BaseBlock {
  constructor (x,y,z,width) {
    super('cuboid')
    const size = width || this.width
    const geometry = new THREE.BoxGeometry(size,this.height,size)
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff
    })
    this.instance = new THREE.Mesh(geometry,material)
    this.instance.name = 'block'
    this.x = x
    this.y = y
    this.z = z
    this.instance.position.x = this.x
    this.instance.position.y = this.y
    this.instance.position.z = this.z

  }

}
