import { ScheduleIcon } from "../../components/ui/svg/ScheduleIcon";
import NotifyToast from "../../components/NotifyToast";
import Button from "../../components/ui/Button";
import { LessonIcon } from "../../components/ui/svg/LessonIcon";
import { UserIcon } from "../../components/ui/svg/UserIcon";
import WhatsappButton from "../../components/ui/WhatsappButton";
import "./index.css";
import { HomeIcon } from "../../components/ui/svg/HomeIcon";
import { LocationIcon } from "../../components/ui/svg/LocationIcon";
import { PlanetIcon } from "../../components/ui/svg/PlanetIcon";
import BenefitsCard from "../../components/ui/BenefitsCard";
import { ClockIcon } from "../../components/ui/svg/ClockIcon";
import { SubscriptionCard } from "../../components/ui/SubscriptionCard";
import MegaMenu from "../../components/ui/MegaMenu";
import NavigationMenuAva from "../../components/NavigationMenuAva";

export default function ProfessionalPage() {
  return (
    <>
      <MegaMenu title="✦ Laudo com validade oficial · CRP registrado · Itaquaquecetuba e região ✦" />

      <NavigationMenuAva
        className="hidden sm:block"
        menuLinks={[
          { text: 'Benefícios', href: '/beneficios' },
          { text: 'Salas', href: '/salas' },
          { text: 'Rede Claramente', href: '/rede' },
          { text: 'Supervisão', href: '/supervisao' },
        ]}
      />

      <section className=" w-full flex items-center justify-center gap-60 hero">
        <aside className="w-full max-w-[600px] text-start">
          <h5 className="text-emerald-300 text-xs tracking-[0.25em]">
            <span
            className="
              badge-header
              text-xs
              tracking-[0.15em]
              uppercase
              text-(--purple)
              py-[6px]
              px-[12px]
              rounded-[50px]
              border-[1px]
              
          " >
            Avaliação Psicológica e Neuropsicológica</span>
          </h5>
          <h1 className="font-[Cormorant_Garamond] text-[4.6rem] leading-[1.1] mt-6">
            Entenda o que está acontecendo com <br /> {" "}
            <i className="text-emerald-300 ">sua mente</i>
          </h1>

          <p className="leading-[1.85] text-gray-400 mt-4">
            Avaliação completa com laudo técnico oficial para diagnóstico de TDAH, ansiedade, dificuldades de aprendizagem, memória e desenvolvimento — para crianças, adultos e idosos.
          </p>

          <div className="mt-9 flex gap-6 border-b-1 border-gray-700 mb-10 pb-15">
            <WhatsappButton />
          </div>

          <div className="flex gap-15">
            <div className="text-xs text-gray-500">
              <span className="font-[Cormorant_Garamond] text-[2.4rem] text-emerald-500">
                6
              </span>
              <br />j
              Salas <br />
              disponíveis
            </div>
            <div className="text-xs text-gray-500">
              <span className="font-[Cormorant_Garamond] text-[2.4rem] text-emerald-500">
                +40
              </span>
              <br />
              Profissionais <br />
              parceiros
            </div>
            <div className="text-xs text-gray-500">
              <span className="font-[Cormorant_Garamond] text-[2.4rem] text-emerald-500">
                100%
              </span>
              <br />
              Estrutura <br />
              equipada
            </div>
          </div>
        </aside>

        <div className="hero-panel w-[380px] rounded-[32px] flex flex-col p-[36px] text-gray-400 gap-6 border-1">
          <p className="flex items-center justify-center gap-2 text-sm font-bold">
            <div className="panel-dot" />
            Para quem é esta avaliação?
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

      {/* Benefits Section */}
      <section className="py-[110px] px-[48px] w-[100vw] z-100 benefits flex flex-col items-center">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-start text-start w-full">
            <h5 className="text-emerald-300 text-xs tracking-[0.25em] uppercase">
              <span className="tracking-[-2px] me-2">---</span> Por que a
              Claramente
            </h5>
            <h1 className="font-[Cormorant_Garamond] text-[3.2rem] leading-[1.1] mt-5">
              Tudo que você precisa <br />
              para <i className="text-(--lavender)">exercer com excelência</i>
            </h1>
          </div>
          <div className="flex gap-6">
            <BenefitsCard
              icon={<HomeIcon />}
              title="Salas Equipadas"
              description="Consultórios mobiliados, climatizados e com isolamento acústico. Tudo pronto para você atender com conforto e profissionalismo."
            />

            <BenefitsCard
              icon={<LocationIcon />}
              title="Endereço Profissional"
              description="Use o endereço da Claramente no seu CRP e materiais de divulgação. Credibilidade e localização privilegiada em Itaquaquecetuba."
            />

            <BenefitsCard
              icon={<PlanetIcon />}
              title="Rede Credenciada"
              description="Faça parte da rede Claramente e receba indicações de pacientes. Aqui, seu perfil fica visível para quem busca atendimento psicológico de qualidade."
            />

            <BenefitsCard
              icon={<LessonIcon />}
              title="Supervisão Clínica"
              description="Grupos e supervisões individuais regulares para aprimoramento contínuo da sua prática clínica com suporte especializado dos nossos profissionais."
            />
          </div>
        </div>
      </section>

      {/* subscription Section */}
      <section className="subscription py-[110px] px-[48px] w-[100vw] z-100 flex flex-col items-center">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-start text-start w-full gap-5">
            <h5 className="text-emerald-300 text-xs tracking-[0.25em] uppercase">
              <span className="tracking-[-2px] me-2">---</span> Locação de salas
            </h5>
            <h1 className="font-[Cormorant_Garamond] text-[3.2rem] leading-[1.1] mt-5">
              Escolha o plano <br />
              <i className="text-(--lavender)">ideal para você</i>
            </h1>

            <h6 className="text-xs text-gray-400">
              Flexibilidade para locar por hora, por período ou com pacote
              mensal. Sem burocracia, sem vínculo empregatício.
            </h6>
          </div>

          <div className="flex gap-6">
            <SubscriptionCard
              icon={<ClockIcon />}
              frequency="Avulso"
              frequencyDescription="Por hora · sem compromisso"
              price="Consultar"
              benefits={[
                "Reserva pelo WhatsApp",
                "Sala com mobiliário completo",
                "Climatização e isolamento acústico",
                "Wi-fi incluso",
                "Confirmação imediata de disponibilidade",
              ]}
              buttonText="Consultar disponibilidade"
            />

            <SubscriptionCard
              icon={<ClockIcon />}
              frequency="Avulso"
              frequencyDescription="Por hora · sem compromisso"
              price="Consultar"
              benefits={[
                "Reserva pelo WhatsApp",
                "Sala com mobiliário completo",
                "Climatização e isolamento acústico",
                "Wi-fi incluso",
                "Confirmação imediata de disponibilidade",
              ]}
              buttonText="Consultar disponibilidade"
              isPremium={true}
            />

            <SubscriptionCard
              icon={<ClockIcon />}
              frequency="Avulso"
              frequencyDescription="Por hora · sem compromisso"
              price="Consultar"
              benefits={[
                "Reserva pelo WhatsApp",
                "Sala com mobiliário completo",
                "Climatização e isolamento acústico",
                "Wi-fi incluso",
                "Confirmação imediata de disponibilidade",
              ]}
              buttonText="Consultar disponibilidade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
