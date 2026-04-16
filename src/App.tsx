import { MobxTodos } from './implementations/mobx/ui/MobxTodos'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ZustandTodos } from './implementations/zustand/ui/ZustandTodos'
import { Home } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mobx" element={<MobxTodos />} />
      <Route path="/zustand" element={<ZustandTodos />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
