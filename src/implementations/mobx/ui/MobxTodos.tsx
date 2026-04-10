import { observer } from 'mobx-react-lite'
import { TodoApp } from '../../../shared/ui/TodoApp/TodoApp'
import { TodosStore } from '../store/todo-store'

const store = new TodosStore()

export const MobxTodos = observer(function MobxTodos() {
  return (
    <TodoApp
      title="MobX Todos"
      subtitle="Simple store + computed values"
      vm={{
        items: store.filteredTodos,
        filter: store.filter,
        itemsLeft: store.itemsLeft,
        completedCount: store.completedCount,
        isBusy: store.isBusy,
        setFilter: store.setFilter,
        addTodo: store.addTodoAsync,
        toggleTodo: store.toggleTodo,
        removeTodo: store.removeTodo,
      }}
    />
  )
})

