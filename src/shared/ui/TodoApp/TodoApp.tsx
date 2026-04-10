import { useMemo, useState } from 'react'
import type { TodoFilter } from '../../types/todo'
import styles from './TodoApp.module.css'

type TodoViewItem = {
  id: string
  title: string
  done: boolean
}

export type TodoAppViewModel = {
  items: TodoViewItem[]
  filter: TodoFilter
  itemsLeft: number
  completedCount: number
  isBusy?: boolean
  setFilter: (filter: TodoFilter) => void
  addTodo: (title: string) => void | Promise<void>
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
}

export function TodoApp({
  title,
  subtitle,
  vm,
}: {
  title: string
  subtitle?: string
  vm: TodoAppViewModel
}) {
  const [text, setText] = useState('')

  const canAdd = text.trim().length > 0 && !vm.isBusy

  const stats = useMemo(() => {
    return `${vm.itemsLeft} left • ${vm.completedCount} done • ${vm.items.length} total`
  }, [vm.completedCount, vm.items.length, vm.itemsLeft])

  async function onAdd() {
    const trimmed = text.trim()
    if (!trimmed) return
    setText('')
    await vm.addTodo(trimmed)
  }

  return (
    <div className={styles.todoApp}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          {subtitle ? <div className={styles.meta}>{subtitle}</div> : null}
        </div>
        <div className={styles.meta}>{stats}</div>
      </div>

      <div className={styles.row}>
        <input
          className={styles.input}
          value={text}
          placeholder="Add a todo…"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && canAdd) onAdd()
          }}
        />
        <button className={styles.btn} disabled={!canAdd} onClick={onAdd}>
          Add
        </button>
      </div>

      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${
            vm.filter === 'all' ? styles.filterBtnActive : ''
          }`}
          onClick={() => vm.setFilter('all')}
        >
          All
        </button>
        <button
          className={`${styles.filterBtn} ${
            vm.filter === 'active' ? styles.filterBtnActive : ''
          }`}
          onClick={() => vm.setFilter('active')}
        >
          Active
        </button>
        <button
          className={`${styles.filterBtn} ${
            vm.filter === 'done' ? styles.filterBtnActive : ''
          }`}
          onClick={() => vm.setFilter('done')}
        >
          Done
        </button>
      </div>

      {vm.items.length === 0 ? (
        <div className={styles.empty}>No todos yet.</div>
      ) : (
        <ul className={styles.list}>
          {vm.items.map((t) => (
            <li key={t.id} className={styles.item}>
              <label className={styles.left}>
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => vm.toggleTodo(t.id)}
                />
                <span
                  className={`${styles.todoTitle} ${
                    t.done ? styles.done : ''
                  }`}
                >
                  {t.title}
                </span>
              </label>
              <button className={styles.btn} onClick={() => vm.removeTodo(t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

