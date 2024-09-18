import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Index from './components/Index'
import CreatePage from './components/CreatePage'
import Thanks from './components/Thanks'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Thanks" element={<Thanks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  )
}

export default App
