import './App.css'
import LandingPage from './routes/components/LandingPage';

// Reaproveitando estrutura router dom
// import { Outlet } from 'react-router-dom';


function App() {
  return (
    <main className="flex-grow">
      <LandingPage />
      {/* Outras seções */}
    </main>
  );
}


export default App