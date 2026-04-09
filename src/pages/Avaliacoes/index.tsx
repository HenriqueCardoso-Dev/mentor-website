import { LessonIcon } from "../../components/ui/svg/LessonIcon";
import WhatsappButton from "../../components/ui/WhatsappButton";
import "./index.css";
import { HomeIcon } from "../../components/ui/svg/HomeIcon";
import { LocationIcon } from "../../components/ui/svg/LocationIcon";
import { PlanetIcon } from "../../components/ui/svg/PlanetIcon";
import BenefitsCard from "../../components/ui/BenefitsCard";
import MegaMenu from "../../components/ui/MegaMenu";
import { WhatsAppIcon } from "../../components/ui/svg/WhatsAppIcon";
import { Clock4Icon, FileTextIcon, HeartIcon, LockKeyholeIcon, ShieldCheckIcon, SignatureIcon, SmileIcon, User2 } from "lucide-react";
import Badge from "../../components/ui/Badge";
import SpecCard from "../../components/ui/SpecCard";

export default function Avaliacoes() {
  return (
    <>
      <MegaMenu title="✦ Laudo com validade oficial · CRP registrado · Itaquaquecetuba e região ✦" className="uppercase font-semibold"/>

      <header className="text-(--purple) bg-(--white) flex w-full justify-between py-6 px-12 items-center sticky top-0 z-100">
        <div className="font-[Playfair_Display] tracking-widest text-start">
          <h1 className="text-2xl">Claramente</h1>
          <p className="text-xs uppercase">clínica de psicologia</p>
        </div>

          <a href="https://wa.me/551198282179" target="_blank" rel="noopener" className="flex items-center font-semibold">
            <span className="flex h-5 me-3">
              <WhatsAppIcon fill="#6b4fa0"/>
            </span>
            (11) 9828-2179
          </a>
      </header>

      <section className=" w-full flex items-center justify-center gap-60 hero bg-(--cream)">
        <aside className="w-full max-w-[600px] text-start">
          <h5 className="text-emerald-300 text-xs tracking-[0.25em]">
            <span
            className="
              text-md
              tracking-[0.15em]
              uppercase
              text-(--purple)
              py-[8px]
              px-[12px]
              rounded-[50px]
              border-[1px]
              flex items-center gap-3
              max-w-max
          " >
            <div className="panel-dot" />
            Avaliação Psicológica e Neuropsicológica</span>
          </h5>
          <h1 className="font-[Cormorant_Garamond] text-[5rem] leading-[1.1] mt-6 text-(--deep) font-bold">
            Entenda o que está acontecendo com <br /> {" "}
            <i className="text-(--purple) border-b-3 border-(--sage)">sua mente</i>
          </h1>

          <p className="leading-[1.85] text-gray-400 mt-4">
            Avaliação completa com laudo técnico oficial para diagnóstico de TDAH, ansiedade, dificuldades de aprendizagem, memória e desenvolvimento — para crianças, adultos e idosos.
          </p>

          <div className="mt-9 flex gap-6 pb-6 flex-col">
            <WhatsappButton label="Quero agendar minha avaliação" className="max-w-max"/>
            <p className="text-gray-400 text-sm flex gap-3">
              <LockKeyholeIcon size={'15px'}/>
              Atendimento presencial e online · Sigilo garantido
            </p>
          </div>

          <div className="flex justify-between">
            <Badge label="Laudo com valor legal" icon={<ShieldCheckIcon size="15px" color="#78BFA0"/>}/>
            <Badge label="Resultado em até 30 dias" icon={<Clock4Icon size="15px" color="#78BFA0"/>}/>
            <Badge label="CRP registrado" icon={<SignatureIcon size="15px" color="#78BFA0"/>}/>
          </div>
        </aside>

        <div className="w-full max-w-[500px] rounded-[32px] flex flex-col p-[36px] text-(--deep) gap-6 bg-(--white)">
          <p className="flex items-center gap-2 text-3xl font-bold font-[Cormorant_Garamond]">
            Para quem é esta avaliação?
          </p>

          <SpecCard 
            icon={<User2 color="white" size={'16px'}/>}
            title="Adultos"
            description="TDAH, ansiedade, laudo para concursos, processos seletivos e acompanhamento clínico"
          />

          <SpecCard 
            icon={<SmileIcon color="white" size={'16px'}/>}
            title="Crianças e Adolescentes"
            description="Dificuldades de aprendizagem, dislexia, TDAH, comportamento e desenvolvimento"
          />

          <SpecCard 
            icon={<HeartIcon color="white" size={'16px'}/>}
            title="Idosos"
            description="Avaliação de memória, raciocínio, atenção e diagnóstico precoce de demências"
          />

          <hr />

          <SpecCard 
            icon={<FileTextIcon color="black" size={'20px'}/>}
            theme="sage"
            description="Laudo técnico completo entregue ao final, com validade oficial para uso clínico, educacional e jurídico."
          />

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-[110px] px-[48px] w-[100vw] z-100  bg-(--white) flex flex-col items-center">
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

    </>
  );
}
