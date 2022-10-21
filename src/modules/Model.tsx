import { Component, createEffect, onCleanup } from 'solid-js'
import * as BABYLON from '@babylonjs/core'
import { getScene } from '../scene'

export const Model: Component = () => {
  createEffect(() => {
    console.log('Model.tsx: createEffect')

    const scene = getScene()

    // Create mutable variables for anything that needs to be accessed in the cleanup function
    let meshes: BABYLON.AbstractMesh[] = []
    let animationGroups: BABYLON.AnimationGroup[] = []
    let skeletons: BABYLON.Skeleton[] = []
    BABYLON.SceneLoader.ImportMeshAsync(
      '',
      '/',
      'kenny-avatar.glb',
      scene,
      event => {}
    ).then(result => {
      meshes = result.meshes
      animationGroups = result.animationGroups
      skeletons = result.skeletons
      const mesh = meshes[0]
      mesh.position = new BABYLON.Vector3(0, 0, -2)
      mesh.rotation = new BABYLON.Vector3(0, Math.PI, 0)
      mesh.scaling = new BABYLON.Vector3(1, 1, 1)
    })

    onCleanup(() => {
      console.log('Model.tsx: onCleanup')
      meshes.forEach(mesh => mesh.dispose())
      animationGroups.forEach(animationGroup => animationGroup.dispose())
      skeletons.forEach(skeleton => skeleton.dispose())
    })
  })

  return <></>
}
