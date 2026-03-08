import './App.css'
import { patientIcon, professionalIcon } from './components/FakeSVGIcons'
import { BackgroundOrbs } from './components/ui/BackgroundOrbs'
import SplashCard from './components/ui/SplashCard'

function App() {

  return (
    <>
      <BackgroundOrbs />

      <div className="splash">
        <div className="brand">
          <div className="brand-name">Claramente</div>
          <div className="brand-tagline">Clínica de Psicologia · Itaquaquecetuba</div>
        </div>

        <div className="divider-line"></div>

        <p className="splash-question">Como podemos te receber hoje?</p>

        <div className="cards">
          <SplashCard title='Para você' subTitle='Sou Paciente' description='Estou buscando atendimento psicológico, quero cuidar da minha saúde mental.' icon={patientIcon} link='/pacientes' linkTitle='Quero me cuidar' typecard='patient'/>

          <SplashCard title='Para profissionais' subTitle='Sou Psicólogo(a)' description='Quero conhecer os espaços, locação de salas e como fazer parte da rede Claramente.' icon={professionalIcon} link='/profissionais' linkTitle='Quero fazer parte' typecard='professional'/>
        </div>

        <p className="splash-footer">© 2025 Claramente Clínica de Psicologia · CRP registrado </p>
      </div>
    </>
  )
} 

export default App
