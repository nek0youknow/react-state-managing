import { MobxTodos } from './implementations/mobx/ui/MobxTodos'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mobx" element={<MobxTodos />} />
      <Route
        path="/zustand"
        element={
          <div style={{ width: 'min(680px, calc(100vw - 32px))', margin: '48px auto' }}>
            <a href="/">← Home</a>
            <h2 style={{ marginTop: 16 }}>Zustand (coming next)</h2>
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
