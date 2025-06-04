import { Suspense } from 'react'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div className="container px-3 mx-auto">
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </div>
  )
}

export default App
