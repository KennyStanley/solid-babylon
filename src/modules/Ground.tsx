import { Component, createEffect, onCleanup } from 'solid-js'
import * as BABYLON from '@babylonjs/core'

import { getScene } from '../scene'

export const Ground: Component = () => {
  createEffect(() => {
    console.log('Ground.tsx: createEffect')

    const scene = getScene()

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    const ground = BABYLON.MeshBuilder.CreateGround(
      'ground1',
      { width: 6, height: 6, subdivisions: 2 },
      scene
    )

    onCleanup(() => {
      console.log('Ground.tsx: onCleanup')
      ground.dispose()
    })
  })

  return null
}
