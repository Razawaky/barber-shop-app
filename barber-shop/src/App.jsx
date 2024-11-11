import './App.css'
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage'
import Calendar from './components/CalendarComponents/CalendarComponent'
import Card from "./components/LandingPageComponents/WorkmanCard"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App flex-grow">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/calendario' element={<Calendar />} />
          <Route path='/card=1' element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App