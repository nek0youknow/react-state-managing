import { MobxTodos } from './implementations/mobx/ui/MobxTodos'
import { Link, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ width: 'min(680px, calc(100vw - 32px))', margin: '48px auto' }}>
            <h1 style={{ margin: 0, fontSize: 20 }}>Choose a state manager</h1>
            <p style={{ opacity: 0.8, marginTop: 8 }}>
              Separate pages are coming next. For now:
            </p>
            <ul style={{ display: 'grid', gap: 8, paddingLeft: 18 }}>
              <li>
                <Link to="/mobx">MobX</Link>
              </li>
              <li>
                <Link to="/zustand">Zustand</Link>
              </li>
            </ul>
          </div>
        }
      />
      <Route path="/mobx" element={<MobxTodos />} />
      <Route
        path="/zustand"
        element={
          <div style={{ width: 'min(680px, calc(100vw - 32px))', margin: '48px auto' }}>
            <Link to="/">← Home</Link>
            <h2 style={{ marginTop: 16 }}>Zustand (coming next)</h2>
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
