import * as BABYLON from '@babylonjs/core'
import '@babylonjs/loaders/glTF'
import { createSignal } from 'solid-js'

// Create a Solid.js signal for the scene to share with the entire app
export const [getScene, setScene] = createSignal(createScene())

// Function to create a new scene
export function createScene(): BABYLON.Scene {

  console.log('CREATE SCENE')

  // If the canvas element does not exist, create it
  let canvas = document.getElementById('canvas') as HTMLCanvasElement
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.id = 'canvas'

    // Make the canvas fill the window
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100vw'
    canvas.style.height = '100vh'

    // Decrease Z index of the canvas to make it appear behind the DOM UI
    canvas.style.zIndex = '-1'

    // Add the canvas to the DOM body as the first child
    document.body.insertBefore(canvas, document.body.firstChild)
  }

  const engine = new BABYLON.Engine(canvas)
  const scene = new BABYLON.Scene(engine)

  // Render the scene whenever the active camera changes
  scene.onActiveCameraChanged.add(() => {
    engine.runRenderLoop(() => {
      scene.render()
    })
  })

  // Handle window resize
  window.addEventListener('resize', () => {
    engine.resize()
  })

  return scene
}
