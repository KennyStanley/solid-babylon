import { Component, createEffect, onCleanup } from 'solid-js'
import * as BABYLON from '@babylonjs/core'

import { getScene } from '../scene'

export const Sphere: Component = () => {
  createEffect(() => {
    console.log('Sphere.tsx: createEffect')
    const scene = getScene()

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    const sphere = BABYLON.MeshBuilder.CreateSphere(
      'sphere1',
      { diameter: 2, segments: 16 },
      scene
    )

    // Move the sphere upward 1/2 its height
    sphere.position.y = 2

    onCleanup(() => {
      console.log('Sphere.tsx: onCleanup')
      sphere.dispose()
    })
  })

  return null
}
