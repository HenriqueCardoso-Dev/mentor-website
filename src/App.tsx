import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BackgroundOrbs } from './components/ui/BackgroundOrbs'
import ProfessionalPage from './pages/Professional'
import SplashPage from './pages/Splash'
import './App.css'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<SplashPage />} />
          <Route path="/professional" element={<ProfessionalPage />} />
        </Routes>
      </BrowserRouter>

      <BackgroundOrbs />

      
    </>
  )
} 

export default App
