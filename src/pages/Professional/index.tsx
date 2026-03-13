import NavigationMenu from "../../components/NavigationMenu";

export default function ProfessionalPage() {
  return (
    <section >
      <NavigationMenu />
      <div className="h-[100vh] w-[100vw] bg-black" style={{opacity: '50%'}}></div>

      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        
        <div className="professional-page">
        <h1>Bem-vindo à página dos profissionais!</h1>
        <p>Aqui você pode encontrar informações sobre como se tornar um profissional parceiro da Claramente, conhecer nossos espaços de atendimento e descobrir os benefícios de fazer parte da nossa rede.</p>
        <p>Se você é um psicólogo interessado em colaborar conosco, entre em contato para saber mais sobre as oportunidades disponíveis.</p>
      </div>
    </span>
      
    </section>
  )
}