import * as BABYLON from '@babylonjs/core'
import { createSignal } from 'solid-js'

// Create a Solid.js signal for the scene to share with the entire app
export const [getScene, setScene] = createSignal(createScene())

// Function to create the scene from the existing canvas
export function createScene(): BABYLON.Scene {
  const canvas = document.getElementById('babylon') as HTMLCanvasElement
  const engine = new BABYLON.Engine(canvas)
  const scene = new BABYLON.Scene(engine)

  // This creates and positions a free camera (non-mesh)
  var camera = new BABYLON.FreeCamera(
    'camera1',
    new BABYLON.Vector3(0, 5, -10),
    scene
  )

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero())

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true)

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new BABYLON.HemisphericLight(
    'light1',
    new BABYLON.Vector3(0, 1, 0),
    scene
  )

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7

  // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
  var sphere = BABYLON.MeshBuilder.CreateSphere(
    'sphere1',
    { diameter: 2, segments: 16 },
    scene
  )

  // Move the sphere upward 1/2 its height
  sphere.position.y = 2

  // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
  BABYLON.MeshBuilder.CreateGround(
    'ground1',
    { width: 6, height: 6, subdivisions: 2 },
    scene
  )

  engine.runRenderLoop(() => {
    scene.render()
  })

  return scene
}
