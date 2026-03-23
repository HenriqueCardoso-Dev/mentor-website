import Notification from "./ui/Notification";
import ProfessionalCard from "./ui/ProfessionalCard";
import StatisticCard from "./ui/StatisticCard";

export default function ContentBrowserScreen() {
  return (
    <div className="flex flex-col gap-5">
      <ProfessionalCard
        name={'Ana Lima'}
        crp={'1234567'}
        role={'Psicóloga Clinica'}
        status={true}
        statusTitle={'credenciada'}
        gender={false}
      />

      <div className="flex gap-3">
        <StatisticCard
          statistic="12"
          description="Pacientes Ativos"
        />
        <StatisticCard
          statistic="4.9"
          description="Avaliação"
        />
        <StatisticCard
          statistic="3"
          description="Indicações"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Notification
          dotColor="emerald"
          status="Agora"
          title="Nova indicação recebida"
        />
        <Notification
          dotColor="emerald"
          status="Confirmado"
          title="Sala 03 · Hoje 14h"
        />
        <Notification
          dotColor="amber"
          status="Pendente"
          title="Supervisão quinta 19h"
        />
      </div>
    </div>
  )
}