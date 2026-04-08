import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BackgroundOrbs } from './components/ui/BackgroundOrbs'
import ProfessionalPage from './pages/Professional'
import AvaliacoesPage from './pages/Avaliacoes'
import SplashPage from './pages/Splash'
import './App.css'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<SplashPage />} />
          <Route path="/professional" element={<ProfessionalPage />} />
          <Route path="/avaliacoes" element={<AvaliacoesPage />} />
        </Routes>
      </BrowserRouter>

      <BackgroundOrbs />

      
    </>
  )
} 

export default App
