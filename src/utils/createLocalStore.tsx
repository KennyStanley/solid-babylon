import { createEffect } from 'solid-js'
import { createStore } from 'solid-js/store'

export function createLocalStore(initState: any) {
  const [state, setState] = createStore(initState)
  if (localStorage.todos) setState(JSON.parse(localStorage.todos))
  createEffect(() => (localStorage.todos = JSON.stringify(state)))
  return [state, setState]
}
