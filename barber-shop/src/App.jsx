import './App.css'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Calendar from './pages/CalendarComponent'
import Card from "./components/LandingPageComponents/WorkmanCard"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Test from "./pages/loginteste"

function App() {
  return (
    <div className="App flex-grow">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/Register' element={<RegisterPage />} />
          <Route path='/calendario' element={<Calendar />} />
          <Route path='/card' element={<Card />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App