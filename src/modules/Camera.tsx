import { Component, createEffect, onCleanup } from 'solid-js'
import * as BABYLON from '@babylonjs/core'

import { getScene } from '../scene'

export const Camera: Component = () => {
  createEffect(() => {
    console.log('Camera.tsx: createEffect')
    const scene = getScene()

    // This creates and positions a free camera (non-mesh)
    const camera = new BABYLON.FreeCamera(
      'camera1',
      new BABYLON.Vector3(0, 5, -10),
      scene
    )

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero())

    // This attaches the camera to the canvas
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true)

    onCleanup(() => {
      console.log('Camera.tsx: onCleanup')

      if (camera) camera.dispose()
    })
  })

  return null
}
