import { useMemo } from 'react'
import { TodoApp } from '../../../shared/ui/TodoApp/TodoApp'
import { selectFilteredTodos, useTodosStore } from '../store/todo-store'

export function ZustandTodos() {
  const filter = useTodosStore((s) => s.filter)
  const isBusy = useTodosStore((s) => s.isBusy)
  const setFilter = useTodosStore((s) => s.setFilter)
  const addTodoAsync = useTodosStore((s) => s.addTodoAsync)
  const toggleTodo = useTodosStore((s) => s.toggleTodo)
  const removeTodo = useTodosStore((s) => s.removeTodo)
  const todos = useTodosStore((s) => s.todos)

  const items = useTodosStore(selectFilteredTodos)

  const itemsLeft = useMemo(
    () => todos.reduce((acc, t) => acc + (t.done ? 0 : 1), 0),
    [todos],
  )

  const completedCount = useMemo(
    () => todos.reduce((acc, t) => acc + (t.done ? 1 : 0), 0),
    [todos],
  )

  return (
    <TodoApp
      title="Zustand Todos"
      subtitle="Store hook + selectors"
      vm={{
        items,
        filter,
        itemsLeft,
        completedCount,
        isBusy,
        setFilter,
        addTodo: addTodoAsync,
        toggleTodo,
        removeTodo,
      }}
    />
  )
}

