import { ScheduleIcon } from "../../components/ui/svg/ScheduleIcon";
import NavigationMenu from "../../components/NavigationMenu";
import NotifyToast from "../../components/NotifyToast";
import Button from "../../components/ui/Button";
import {LessonIcon} from "../../components/ui/svg/LessonIcon";
import {UserIcon} from "../../components/ui/svg/UserIcon";
import WhatsappButton from "../../components/ui/WhatsappButton";
import "./index.css";
import { HomeIcon } from "../../components/ui/svg/HomeIcon";
import { LocationIcon } from "../../components/ui/svg/LocationIcon";
import { PlanetIcon } from "../../components/ui/svg/PlanetIcon";
import BenefitsCard from "../../components/ui/BenefitsCard";
import { ClockIcon } from "../../components/ui/svg/ClockIcon";
import { SubscriptionCard } from "../../components/ui/SubscriptionCard";
import BrowserScreen from "../../components/BrowserScreen";
import ContentBrowserScreen from "../../components/ContentBrowserScreen";
import DescriptionCard from "../../components/ui/DescriptionCard";
import { StatsIcon } from "../../components/ui/svg/StatsIcon";
import { MessageIcon } from "../../components/ui/svg/MessageIcon";
import { LinkIcon } from "../../components/ui/svg/LinkIcon";
import { StarIcon } from "../../components/ui/svg/StarIcon";
import NumericDescriptionCard from "../../components/ui/NumericDescriptionCard";
import QuoteCard from "../../components/ui/QuoteCard";

export default function ProfessionalPage() {
  return (
    <>
      <NavigationMenu />
    
      <section className=" w-full flex items-center justify-center gap-60 hero">
        <aside className="w-full max-w-150 text-start">
          <h5 className="text-emerald-300 text-xs tracking-[0.25em]"><span className="tracking-[-2px] me-2">---</span> PARA PROFISSIONAIS DE PSICOLOGIA</h5>
          <h1 className="font-[Cormorant_Garamond] text-[4.6rem] leading-[1.1] mt-6">Seu consultório, <br /> no lugar <i className="text-emerald-300 ">certo</i></h1>

          <p className="leading-[1.85] text-gray-400 mt-4">Salas equipadas, endereço profissional, supervisão clínica e uma rede de credenciamento que conecta você a novos pacientes. <br />Tudo na Claramente.</p>

          <div className="mt-9 flex gap-6 border-b border-gray-700 mb-10 pb-15">
            <WhatsappButton/>

            <Button className="py-4 px-8 max-w-max items-center rounded-full border border-gray-600 text-gray-300 text-sm">
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

        <div className="hero-panel w-95 rounded-4xl flex flex-col p-9 text-gray-400 gap-6 border">
          <p className="flex items-center justify-center gap-2 text-sm font-bold">
            <div className="panel-dot"/>
            Painel do Profissional - Claramente
          </p>

          <div className="border-b w-full"></div>

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
      <section className="py-27.5 px-12 w-screen z-100 benefits flex flex-col items-center">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-start text-start w-full">
            <h5 className="text-emerald-300 text-xs tracking-[0.25em] uppercase"><span className="tracking-[-2px] me-2">---</span> Por que a Claramente</h5>
            <h1 className="font-[Cormorant_Garamond] text-[3.2rem] leading-[1.1] mt-5">Tudo que você precisa <br />para <i className="text-(--lavender)">exercer com excelência</i></h1>
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
      <section className="deep-bg py-27.5 px-12 w-[100vw]screen z-100 flex flex-col items-center">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-start text-start w-full gap-5">
            <h5 className="text-emerald-300 text-xs tracking-[0.25em] uppercase"><span className="tracking-[-2px] me-2">---</span> Locação de salas</h5>
            <h1 className="font-[Cormorant_Garamond] text-[3.2rem] leading-[1.1] mt-5">Escolha o plano <br /><i className="text-(--lavender)">ideal para você</i></h1>

            <h6 className="text-xs text-gray-400">Flexibilidade para locar por hora, por período ou com pacote mensal. Sem burocracia, sem vínculo empregatício.</h6>
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
                "Confirmação imediata de disponibilidade"
              ]}
              buttonText="Consultar disponibilidade"
            />

            <SubscriptionCard
              icon={<ScheduleIcon />}
              frequency="Mensal"
              frequencyDescription="Pacote de horas mensais"
              price="Consultar"
              benefits={[
                "Grade de horários fixa e prioritária",
                "Endereço profissional incluso",
                "Desconto progressivo por volume",
                "Sala dedicada nos seus horários",
                "Suporte administrativo básico",
                "Acesso à comunidade de profissionais",
              ]}
              buttonText="Quero este plano"
              isPremium={true}
            />

            <SubscriptionCard
              icon={<StarIcon />}
              frequency="Premium"
              frequencyDescription="Rede Claramente + sala"
              price="Consultar"
              benefits={[
                "Tudo do plano Mensal",
                "Perfil na rede Claramente (SaaS)",
                "Indicações de pacientes recorrentes",
                "Supervisão clínica inclusa",
                "Destaque no site da clínica",
                "Suporte de marketing e divulgação",
              ]}
              buttonText="Quero ser Premium"
            />
          </div>
        </div>
      </section>

      {/* claramente preview section */}
      <section className="cred-section py-27.5 px-12 w-screen z-100 flex justify-center items-center">
        <div className="w-full max-w-300 gap-20 flex items-center justify-center">
          <BrowserScreen 
            width={'100%'} 
            height={'100%'} 
            search="app.claramente.com.br/profissional" 
            content={<ContentBrowserScreen/>}
          />

          <aside className="w-full max-w-150 text-start">
            <h5 className="text-emerald-300 text-xs tracking-[0.25em] uppercase"><span className="tracking-[-2px] me-2">---</span> Rede Claramente</h5>
            <h1 className="font-[Cormorant_Garamond] text-[3.2rem] leading-[1.1] mt-6">Seu perfil visível para
              <br /><i className="text-(--lavender)">quem está buscando</i>
            </h1>

            <p className="leading-[1.85] text-gray-400 mt-4 mb-12">Faça parte da plataforma Claramente e apareça para pacientes que buscam atendimento psicológico na região. Um sistema feito para conectar profissionais e pacientes de forma inteligente.</p>

            <DescriptionCard
              icon={<UserIcon/>}
              title="Perfil profissional completo"
              description="Página dedicada com sua formação, abordagens, especializações e avaliações de pacientes."
            />

            <DescriptionCard
              icon={<MessageIcon/>}
              title="Indicações de pacientes"
              description="Receba indicações diretas de pacientes que buscam atendimento e se encaixam no seu perfil de especialidade."
            />

            <DescriptionCard
              icon={<StatsIcon/>}
              title="Gestão de agenda e visibilidade"
              description="Painel completo com seus horários, reservas de sala e métricas de visualização do seu perfil na plataforma."
            />

            <div className="flex mt-12 gap-4">
              <a href="https://saas-mentor-ten.vercel.app/" target="_blank" rel="noopener">
                <Button className="bg-green-300 flex gap-3 py-4 px-8 max-w-max items-center rounded-full text-black text-sm cursor-pointer font-semibold">
                  <div className="h-4 w-4">
                    <LinkIcon/>
                  </div>

                  Acessar a plataforma
                </Button>
              </a>

              <Button className="border border-gray-800 py-4 px-8 rounded-full hover:border-gray-700">
                Tirar dúvidas
              </Button>
            </div>

          </aside>
        </div>
      </section>

      <section className="dark-bg py-27.5 px-12 w-[100vw]screen z-100 flex flex-col items-center">
        <div className="w-full max-w-300 flex justify-between items-center">
          <div>
            <div className="flex flex-col items-start text-start w-full gap-5">
              <h5 className="text-emerald-300 text-xs tracking-[0.25em] uppercase"><span className="tracking-[-2px] me-2">---</span> Locação de salas</h5>
              <h1 className="font-[Cormorant_Garamond] text-[3.2rem] leading-[1.1] mt-5">Escolha o plano <br /><i className="text-(--lavender)">ideal para você</i></h1>

              <h6 className="text-2sm text-gray-400 max-w-125 mb-12">A supervisão clínica é um espaço de reflexão, aprendizado e aprimoramento da sua prática. Na Claramente, você nunca atua sozinho.</h6>
            </div>

            <div className="flex flex-col gap-3">
              <NumericDescriptionCard
                number="01"
                title="Supervisão Individual"
                description="Sessões individuais focadas nos seus casos clínicos, com orientação especializada e sigilo absoluto."
              />

              <NumericDescriptionCard
                number="02"
                title="Grupo de Supervisão"
                description="Encontros regulares em grupo com outros profissionais da clínica, promovendo troca de experiências e aprendizado coletivo."
              />

              <NumericDescriptionCard
                number="03"
                title="Formação Continuada"
                description="Acesso a workshops, rodas de conversa e materiais exclusivos para manter sua prática atualizada e embasada."
              />
            </div>
          </div>

          <aside>
            <QuoteCard
              quote="Um profissional bem cuidado cuida melhor dos seus pacientes. A supervisão não é um luxo, é uma necessidade ética."
              signature="Equipe Claramente"
              className="max-w-140"
            />
          </aside>
        </div>
        
      </section>
    </>
  )
}