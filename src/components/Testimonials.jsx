const Testimonials = () => {
  const clientLogos = [
    { name: "Cliente 1", logo: "🏢" },
    { name: "Cliente 2", logo: "🏪" }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container-custom">
        {/* Pre-title */}
        <div className="mb-4">
          <p className="pre-title">
            Nossos parceiros
          </p>
        </div>
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Empresas que Confiam<br />
            Resultados que Comprovam
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quem está com a RK sabe: Aqui é onde a magia acontece e resultados<br />
              reais são entregues. Veja o que nossos clientes têm a dizer sobre<br />
              nossa parceria e os resultados que alcançamos juntos.
            </p>
          </div>
        </div>
        
        {/* Client Logos */}
        <div className="flex gap-8 mb-16">
          {clientLogos.map((client, index) => (
            <div 
              key={index}
              className="w-32 h-16 bg-muted/20 rounded-lg flex items-center justify-center text-2xl border border-border"
            >
              {client.logo}
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="max-w-4xl">
          <blockquote className="text-base text-muted-foreground leading-relaxed mb-8 italic">
            "Trabalhar com a RK foi uma das melhores decisões que tomei para o meu negócio. 
            Eles não apenas entenderam minha visão, mas a transformaram em uma estratégia 
            digital eficaz que trouxe resultados reais. A equipe é profissional, criativa 
            e sempre disponível para ajudar. Recomendo a RK para qualquer empresa que queira 
            crescer no digital."
          </blockquote>
          
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-xl">
              👤
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">João Ricardo Almeida</h4>
              <p className="text-muted-foreground">CEO da Empresa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials