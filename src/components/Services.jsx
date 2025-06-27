import { Button } from '@/components/ui/button'

const Services = () => {
  const services = [
    {
      icon: "💰",
      title: "Quer um provedor que realmente faz vendas?",
      description: "Vamos potencializar seus resultados com foco total em conversão e performance. Nada de algo que gera resultado algum."
    },
    {
      icon: "⚡",
      title: "Cansado de leads desqualificados?",
      description: "Sua empresa não desenvolveremos as e qual é o perfil ideal do seu cliente e criaremos estratégias certeiras de vendas?"
    },
    {
      icon: "💛",
      title: "Chega de andar sozinho. Vamos crescer juntos?",
      description: "Queremos ser seu parceiro de negócios. Vamos estruturar as suas resultados com a simplicidade."
    },
    {
      icon: "🎯",
      title: "Quer construir autoridade e se destacar?",
      description: "Vamos trabalhar sua marca pessoal e empresarial, criando conteúdo que gera valor e engajamento com a simplicidade."
    }
  ]

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Pre-title */}
        <div className="text-center mb-4">
          <p className="pre-title mx-auto w-[125px] text-sm font-medium tracking-wider">
            SERVIÇOS RK
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Do clique ao cliente:<br />
            sua jornada <span className="gradient-text">começa aqui</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aqui você não é só mais um cliente.<br />
            É parte da nossa jornada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`service-card-${index + 1} group`}>
              <div className="service-card-content p-6">
                {/* Icon and title*/}
                <div className="service-icon mb-4">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    <span className="text-4xl">{service.icon}</span>{service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="service-text">
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            className="btn-cta !px-38 !py-9 !text-xl !font-bold !rounded-2xl"
          >
            Quero fechar com a RK
          </Button>
          <p className="text-sm text-muted-foreground">
            Entre em contato por WhatsApp
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
