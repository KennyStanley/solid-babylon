import { Component } from 'solid-js'

import { Camera, Light, Ground, Sphere } from './modules'
import { Header } from './components'

const App: Component = () => {
  return (
    <>
      {/* --- BABYLON MODULES ---
       * aka "Solid Components with BabylonJS side-effects that can return null or DOM UI elements"
       *
       * Use getScene() to get the current scene.
       * Each module is responsible for creating and disposing of its own resources.
       * This can be done by using onMount and onCleanup, however, it is
       * recommended to use createEffect and onCleanup instead. This will ensure that
       * the module updates when its dependencies change.
       */}
      <Camera /> {/* Nothing will render without a camera */}
      <Light />
      <Ground />
      <Sphere />
      {/* --- DOM UI COMPONENTS --- */}
      <Header />
      {/* ----------------------- */}
    </>
  )
}

export default App
