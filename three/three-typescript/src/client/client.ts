import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import './style/style.css'

const scene = new THREE.Scene()
scene.background = new THREE.Color('#000')

const camera1 = new THREE.PerspectiveCamera(-1, 1, 1, 10)
const camera2 = new THREE.PerspectiveCamera(-2, 2, 2, -2)
const camera3 = new THREE.PerspectiveCamera(-2, 2, 2, -2)
const camera4 = new THREE.PerspectiveCamera(-2, 2, 2, -2)

camera1.position.z = 2
camera2.position.z = 2
camera3.position.z = 2
camera4.position.z = 2

const canvas1 = document.getElementById('c1') as HTMLCanvasElement
const canvas2 = document.getElementById('c2') as HTMLCanvasElement
const canvas3 = document.getElementById('c3') as HTMLCanvasElement
const canvas4 = document.getElementById('c4') as HTMLCanvasElement

const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 })
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 })
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 })
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 })

renderer1.setSize(200, 200)
renderer2.setSize(200, 200)
renderer3.setSize(200, 200)
renderer4.setSize(200, 200)
// document.body.appendChild(renderer.domElement)

new OrbitControls(camera1, renderer1.domElement)
new OrbitControls(camera2, renderer2.domElement)
new OrbitControls(camera1, renderer3.domElement)
new OrbitControls(camera1, renderer4.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  camera1.aspect = window.innerWidth / window.innerHeight
  camera2.aspect = window.innerWidth / window.innerHeight
  camera1.updateProjectionMatrix()
  camera2.updateProjectionMatrix()
  renderer1.setSize(window.innerWidth, window.innerHeight)
  renderer2.setSize(window.innerWidth, window.innerHeight)
  renderer3.setSize(window.innerWidth, window.innerHeight)
  renderer4.setSize(window.innerWidth, window.innerHeight)
  render()
}

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  render()
}

function render() {
  renderer1.render(scene, camera1)
  renderer2.render(scene, camera2)
  renderer3.render(scene, camera1)
  renderer4.render(scene, camera1)
}

animate()
