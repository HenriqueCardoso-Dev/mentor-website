import { ScheduleIcon } from "../../components/ui/svg/ScheduleIcon";
import NavigationMenu from "../../components/NavigationMenu";
import NotifyToast from "../../components/NotifyToast";
import Button from "../../components/ui/Button";
import {LessonIcon} from "../../components/ui/svg/LessonIcon";
import {UserIcon} from "../../components/ui/svg/UserIcon";
import WhatsappButton from "../../components/ui/WhatsappButton";
import "./index.css";

export default function ProfessionalPage() {
  return (
    <>
      <NavigationMenu />
      <div className="h-[100vh] w-[100vw] bg-[#0f0a1e]"></div>
    
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center gap-50 mt-15">
        <aside className="w-full max-w-[600px] text-start">
          <h5 className="tracking-[.08rem] text-emerald-300 text-xs tracking-[0.25em]"><span className="tracking-[-2px] me-2">---</span> PARA PROFISSIONAIS DE PSICOLOGIA</h5>
          <h1 className="font-[Cormorant_Garamond] text-[4.6rem]">Seu consultório, <br /> no lugar <span>certo</span></h1>

          <p className="leading-[1.85] text-gray-400 mt-4">Salas equipadas, endereço profissional, supervisão clínica e uma rede de credenciamento que conecta você a novos pacientes. <br />Tudo na Claramente.</p>

          <div className="mt-9 flex gap-6 border-b-1 border-gray-700 mb-10 pb-15">
            <WhatsappButton/>

            <Button className="py-[16px] px-[32px] max-w-max items-center rounded-full border border-gray-600 text-gray-300 text-sm">
              Ver planos de salas
            </Button>
          </div>

          <div className="flex gap-15">
            <div className="text-xs text-gray-500">
              <span className="font-[Cormorant_Garamond] text-[2.4rem] text-emerald-500">6</span><br />
              Salas <br />disponíveis
            </div>
            <div className="text-xs text-gray-500">
              <span className="font-[Cormorant_Garamond] text-[2.4rem] text-emerald-500">+40</span><br />
              Profissionais <br />parceiros
            </div>
            <div className="text-xs text-gray-500">
              <span className="font-[Cormorant_Garamond] text-[2.4rem] text-emerald-500">100%</span><br />
              Estrutura <br />equipada
            </div>
          </div>
        </aside>

        <div className="w-[380px] rounded-[32px] flex flex-col p-[36px] text-gray-400 gap-6 border-1">
          <p className="flex items-center justify-center gap-2 text-sm font-bold">
            <div className="panel-dot"/>
            Painel do Profissional - Claramente
          </p>

          <div className="border-b-1 w-full"></div>

          <NotifyToast 
            icon={<ScheduleIcon />}
            title="Sala 03 reservada"
            description="Terça · 14h às 18h"
            status={true}
            statusTitle="Confirmado"
          />

          <NotifyToast 
            icon={<UserIcon />}
            title="3 indicações de pacientes"
            description="Via rede Claramente"
            status={true}
            statusTitle="Novo"
          />

          <NotifyToast 
            icon={<LessonIcon />}
            title="Supervisão clínica"
            description="Quinta · 19h"
            status={true}
            statusTitle="Agendaddo"
          />

        </div>
        
      </section>
    </>
  )
}