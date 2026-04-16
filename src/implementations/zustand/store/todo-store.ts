import { create } from 'zustand'
import type { Todo, TodoFilter } from '../../../shared/types/todo'
import { createId } from '../../../shared/lib/id'
import { sleep } from '../../../shared/lib/sleep'

type TodosState = {
  todos: Todo[]
  filter: TodoFilter
  isBusy: boolean
  setFilter: (filter: TodoFilter) => void
  addTodo: (title: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
  addTodoAsync: (title: string) => Promise<void>
}

export const useTodosStore = create<TodosState>((set, get) => ({
  todos: [
    { id: createId(), title: 'Learn Zustand basics', done: false },
    { id: createId(), title: 'Compare with MobX', done: false },
  ],
  filter: 'all',
  isBusy: false,
  setFilter: (filter) => set({ filter }),
  addTodo: (title) =>
    set((s) => ({ todos: [{ id: createId(), title, done: false }, ...s.todos] })),
  toggleTodo: (id) =>
    set((s) => ({
      todos: s.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    })),
  removeTodo: (id) => set((s) => ({ todos: s.todos.filter((t) => t.id !== id) })),
  addTodoAsync: async (title) => {
    set({ isBusy: true })
    try {
      await sleep(500)
      get().addTodo(title)
    } finally {
      set({ isBusy: false })
    }
  },
}))

export function selectFilteredTodos(state: TodosState) {
  switch (state.filter) {
    case 'active':
      return state.todos.filter((t) => !t.done)
    case 'done':
      return state.todos.filter((t) => t.done)
    default:
      return state.todos
  }
}
