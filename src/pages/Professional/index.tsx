import { ScheduleIcon } from "../../components/ui/svg/ScheduleIcon";
import NavigationMenu from "../../components/NavigationMenu";
import NotifyToast from "../../components/NotifyToast";
import Button from "../../components/ui/Button";
import {LessonIcon} from "../../components/ui/svg/LessonIcon";
import {UserIcon} from "../../components/ui/svg/UserIcon";
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
import MoreInformationForm from "../../components/MoreInformationForm";
import SocialCard from "../../components/ui/SocialCard";
import { WhatsAppIcon as WppIcon } from "../../components/ui/svg/WhatsAppIcon";
import { InstagramIcon } from "../../components/ui/svg/InstagramIcon";
import { BackgroundOrbs } from "../../components/ui/BackgroundOrbs";
import { whatsappIcon } from "../../components/FakeSVGIcons";

export default function ProfessionalPage() {
  return (
    <>
      <NavigationMenu badgeText="Para Profissionais" />
    
      <section className="w-full max-w-screen px-6 md:px-12 flex items-center justify-center hero text-white">
        <BackgroundOrbs />

        <div className="max-w-max flex items-center justify-center flex-col xl:flex-row gap-30 md:gap-50">
          <aside className="w-full max-w-150 text-start">
            <h5 className="text-emerald-400 text-xs tracking-[0.25em]"><span className="tracking-[-2px] me-2">---</span> PARA PROFISSIONAIS DE PSICOLOGIA</h5>
            <h1 className="font-[Cormorant_Garamond] text-[3rem] md:text-[5rem] leading-[1.1] mt-6">Seu consultório, <br /> no lugar <i className="text-emerald-400 ">certo</i></h1>

            <p className="leading-[1.85] text-white mt-4">Salas equipadas, endereço profissional, supervisão clínica e uma rede de credenciamento que conecta você a novos pacientes. <br />Tudo na Claramente.</p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 border-b border-white mb-10 pb-15">
              <Button isFlex={true} className="bg-green-300 flex gap-3 py-4 px-8 justify-center items-center rounded-xl sm:rounded-full text-(--deep) text-sm cursor-pointer font-semibold " type="submit">
                <div className="h-4 w-4 me-2">
                  <svg
                    style={{width: '18px', height: '18px'}}
                    viewBox={whatsappIcon.viewBox} 
                    fill={whatsappIcon.fill} 
                  >
                    <path d={whatsappIcon.d} />
                  </svg>
                </div>
        
                Conversar pelo WhatsApp
              </Button>

              <Button className="rounded-xl sm:rounded-full py-4 px-8 max-w-full sm:max-w-max items-center  border border-white text-white text-sm cursor-pointer">
                Ver planos de salas
              </Button>
            </div>

            <div className="flex gap-6 md:gap-15">
              <div className="text-xs text-white">
                <span className="font-[Cormorant_Garamond] text-[2.4rem] text-emerald-500">6</span><br />
                Salas <br />disponíveis
              </div>
              <div className="text-xs text-white">
                <span className="font-[Cormorant_Garamond] text-[2.4rem] text-emerald-500">+40</span><br />
                Profissionais <br />parceiros
              </div>
              <div className="text-xs text-white">
                <span className="font-[Cormorant_Garamond] text-[2.4rem] text-emerald-500">100%</span><br />
                Estrutura <br />equipada
              </div>
            </div>
          </aside>

          <div className="hero-panel w-full rounded-4xl flex flex-col p-9 text-gray-300 gap-6 border">
            <p className="flex items-center justify-center gap-2 text-sm font-bold">
              <span className="panel-dot"/>
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
        </div>
        
      </section>  

      {/* Benefits Section */}
      <section className="py-27.5 px-6 md:px-12 w-screen z-100 benefits flex flex-col items-center text-white" id="benefits">
        <div className="flex flex-col gap-20 max-w-[1200px] w-full">
          <div className="flex flex-col items-center xl:items-start text-start w-full">
            <h5 className="text-emerald-400 self-start sm:self-center xl:self-start text-xs tracking-[0.25em] uppercase"><span className="tracking-[-2px] me-2">---</span> Por que a Claramente</h5>
            <h1 className="font-[Cormorant_Garamond] text-[3rem] md:text-[5rem] leading-[1.1] mt-5">Tudo que você precisa <br />para <i className="text-(--lavender)">exercer com excelência</i></h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 m-auto">
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
      <section className="deep-bg py-27.5 px-6 md:px-12 max-w-screen z-100 flex flex-col items-center text-white" id="salas">
        <div className="w-full flex flex-col gap-20 max-w-[1200px]">
          <div className="flex flex-col items-start text-start w-full gap-5">
            <h5 className="text-emerald-400 text-xs tracking-[0.25em] uppercase"><span className="tracking-[-2px] me-2">---</span> Locação de salas</h5>
            <h1 className="font-[Cormorant_Garamond] text-[3rem] md:text-[5rem] leading-[1.1] mt-5">Escolha o plano <br /><i className="text-(--lavender)">ideal para você</i></h1>

            <h6 className="text-xs text-gray-400">Flexibilidade para locar por hora, por período ou com pacote mensal. Sem burocracia, sem vínculo empregatício.</h6>
          </div>


          <div className="flex flex-col xl:flex-row gap-12 xl:gap-6">
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
      <section className="cred-section py-27.5 px-6 md:px-12 w-screen z-100 flex justify-center items-center text-white" id="rede-claramente">
        <div className="w-full max-w-300 gap-20 flex items-center justify-center">
          <span className="hidden xl:flex flex-1">
            <BrowserScreen 
              width={'100%'} 
              height={'100%'} 
              search="app.claramente.com.br/profissional" 
              content={<ContentBrowserScreen/>}
            />
          </span>

          <aside className="w-full max-w-150 text-start">
            <h5 className="text-emerald-400 text-xs tracking-[0.25em] uppercase"><span className="tracking-[-2px] me-2">---</span> Rede Claramente</h5>
            <h1 className="font-[Cormorant_Garamond] text-[3rem] md:text-[5rem] leading-[1.1] mt-6">Seu perfil visível para
              <br className="hidden md:block"/><i className="text-(--lavender)"> quem está buscando</i>
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

            <div className="mt-12 gap-4 flex flex-col sm:flex-row">
              <a href="https://saas-mentor-ten.vercel.app/" target="_blank" rel="noopener">
                <Button isFlex={true} className="bg-green-300 py-4 px-8 w-full sm:max-w-max rounded-xl sm:rounded-full text-black text-sm cursor-pointer font-semibold" >
                  <div className="h-4 w-4 me-2">
                    <LinkIcon/>
                  </div>

                  <span>Acessar a plataforma</span>
                </Button>
              </a>

              <Button className="border border-gray-800 py-4 px-8 rounded-xl sm:rounded-full hover:border-gray-700 text-sm cursor-pointer">
                Tirar dúvidas
              </Button>
            </div>

          </aside>
        </div>
      </section>

      <section className="dark-bg py-27.5 px-6 md:px-12 w-screen z-100 flex flex-col items-center text-white" id="supervisao">
        <div className="w-full max-w-300 flex flex-col xl:flex-row gap-16 xl:gap-6 justify-between items-center">
          <div>
            <div className="flex flex-col items-start text-start w-full gap-5">
              <h5 className="text-emerald-400 text-xs tracking-[0.25em] uppercase"><span className="tracking-[-2px] me-2">---</span> Locação de salas</h5>
              <h1 className="font-[Cormorant_Garamond] text-[3rem] md:text-[5rem] leading-[1.1] mt-5">Escolha o plano <br /><i className="text-(--lavender)">ideal para você</i></h1>

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
              className="max-w-140 italic"
            />
          </aside>
        </div>
        
      </section>

      <section className="deep-bg py-27.5 px-6 md:px-12 w-screen flex flex-col items-center cta-section text-white">
        <h1 className="font-[Cormorant_Garamond] text-[3rem] md:text-[5rem] leading-[1.1] mt-6">
          Pronto para fazer <br />
          parte da <i className="text-emerald-200">Claramente</i>?
        </h1>
        <p className="leading-[1.85] text-gray-400 mt-4 max-w-120">Entre em contato pelo WhatsApp e vamos encontrar juntos o melhor caminho para você começar a atender na clínica.</p>

        <a className="flex mt-12 gap-4" href="https://saas-mentor-ten.vercel.app/" target="_blank" rel="noopener">
          <Button className="border border-gray-800 py-4 px-8 rounded-full hover:border-gray-700 text-sm cursor-pointer">
            Acessar a plataforma
          </Button>
        </a>
      </section>

      <section className="dark-bg py-27.5 px-6 md:px-12 w-screen flex flex-col items-center text-white" id="contato">
        <div className="w-full max-w-300 flex flex-col-reverse items-center xl:flex-row gap-16 xl:gap-6 justify-between">
          <MoreInformationForm/>

          <aside className="w-full max-w-140 text-start">
            <h4 className="text-emerald-400 text-xs tracking-[0.25em] uppercase"><span className="tracking-[-2px] me-2">---</span> Contato Direto</h4>
            <h1 className="font-[Cormorant_Garamond] text-[3rem] md:text-[5rem] leading-[1.1] mt-6">Vamos <i className="text-(--lavender)">conversar</i>
            </h1>

            <p className="leading-[1.85] text-gray-400 mt-4 mb-12">Tem alguma dúvida? Quer visitar o espaço? Entre em contato e agendamos uma visita sem compromisso.</p>

            <div className="flex flex-col gap-4">
              <SocialCard
                icon={<WppIcon/>}
                label="WhatsApp"
                content="(11) 98282-9179"
              />
              
              <SocialCard
                icon={<InstagramIcon/>}
                label="Instagram"
                content="@claramente_itaqua"
              />
              <a href="https://saas-mentor-ten.vercel.app/" target="_blank" rel="noopener">
                <SocialCard
                  icon={<LinkIcon/>}
                  label="Plataforma Claramente"
                  content="Acessar o sistema"
                />
              </a>
            </div>

          </aside>
        </div>
      </section>
    </>
  )
}