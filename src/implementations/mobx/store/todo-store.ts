import { makeAutoObservable } from 'mobx'
import type { Todo, TodoFilter } from '../../../shared/types/todo'
import { createId } from '../../../shared/lib/id'
import { sleep } from '../../../shared/lib/sleep'

export class TodosStore {
  todos: Todo[] = [
    { id: createId(), title: 'Learn MobX basics', done: false },
    { id: createId(), title: 'Build the same Todo app in other libs', done: false },
  ]

  filter: TodoFilter = 'all'
  isBusy = false

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  get filteredTodos() {
    switch (this.filter) {
      case 'active':
        return this.todos.filter((t) => !t.done)
      case 'done':
        return this.todos.filter((t) => t.done)
      default:
        return this.todos
    }
  }

  get itemsLeft() {
    return this.todos.reduce((acc, t) => acc + (t.done ? 0 : 1), 0)
  }

  get completedCount() {
    return this.todos.reduce((acc, t) => acc + (t.done ? 1 : 0), 0)
  }

  setFilter(filter: TodoFilter) {
    this.filter = filter
  }

  addTodo(title: string) {
    this.todos.unshift({ id: createId(), title, done: false })
  }

  toggleTodo(id: string) {
    const t = this.todos.find((x) => x.id === id)
    if (!t) return
    t.done = !t.done
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((t) => t.id !== id)
  }

  async addTodoAsync(title: string) {
    this.isBusy = true
    try {
      await sleep(500)
      this.addTodo(title)
    } finally {
      this.isBusy = false
    }
  }
}

