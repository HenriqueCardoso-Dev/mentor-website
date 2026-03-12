import { patientIcon, professionalIcon } from "../../components/FakeSVGIcons";
import SplashCard from "../../components/ui/SplashCard";

export default function SplashPage() {
  return (
    <div className="splash">
      <div className="brand">
        <div className="brand-name">Claramente</div>
        <div className="brand-tagline">Clínica de Psicologia · Itaquaquecetuba</div>
      </div>

      <div className="divider-line"></div>

      <p className="splash-question">Como podemos te receber hoje?</p>

      <div className="cards">
        <SplashCard title='Para você' subTitle='Sou Paciente' description='Estou buscando atendimento psicológico, quero cuidar da minha saúde mental.' icon={patientIcon} link='/pacientes' linkTitle='Quero me cuidar' typecard='patient'/>

        <SplashCard title='Para profissionais' subTitle='Sou Psicólogo(a)' description='Quero conhecer os espaços, locação de salas e como fazer parte da rede Claramente.' icon={professionalIcon} link='/professional' linkTitle='Quero fazer parte' typecard='professional'/>
      </div>

      <p className="splash-footer">© 2025 Claramente Clínica de Psicologia · CRP registrado</p>
    </div>
  )
}