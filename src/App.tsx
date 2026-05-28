import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfessionalPage from './pages/Professional'
import SplashPage from './pages/Splash'
import PacientesPage from './pages/Pacientes'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<SplashPage />} />
          <Route path="/profissional" element={<ProfessionalPage />} />
          <Route path="/pacientes" element={<PacientesPage />} />
        </Routes>
      </BrowserRouter>

      <Footer/>
      
    </>
  )
} 

export default App
