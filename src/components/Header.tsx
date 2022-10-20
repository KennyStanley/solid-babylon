import { Component } from 'solid-js'

export const Header: Component = () => {
  return (
    <header class="flex flex-col gap-2 p-8 text-white text-center">
      <h1 class="text-3xl ">Welcome to solid-babylon!</h1>
      <p class="">
        This is a template for building BabylonJS apps with SolidJS.
      </p>
    </header>
  )
}
