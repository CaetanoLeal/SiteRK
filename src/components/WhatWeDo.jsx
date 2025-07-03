const WhatWeDo = () => {
  const services = [
    {
      icon: "/images/icon1.png", // Caminho direto da imagem na pasta public
      title: "Estratégia & Aumento de",
      highlight: "Conversão",
      description: "Um plano 100% validado. Mais leads. Mais vendas. Mais resultados."
    },
    {
      icon: "/images/icon3.png",
      title: "Design Criativo &",
      highlight: "Responsivo",
      description: "Criamos designs únicos e responsivos que capturam a essência da sua marca e encantam seus clientes."
    },
    {
      icon: "/images/icon2.png",
      title: "Processo Rápido &",
      highlight: "Eficiente",
      description: "Nossos processos são otimizados para entregar resultados rápidos sem comprometer a qualidade."
    }
  ]

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Pre-title */}
        <div className="text-center mb-4">
          <p className="pre-title mx-auto w-[125px] text-sm font-medium tracking-wider">
            POR QUE RK?
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            O Que Fazemos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fazemos tudo com excelência!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="whatwedo-card group">
              <div className="whatwedo-card-content">
                {/* Icon */}
                <div className="whatwedo-icon">
                  {typeof service.icon === 'string' && service.icon.startsWith('/') ? (
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <span className="text-3xl">{service.icon}</span>
                  )}
                </div>

                {/* Content */}
                <div className="whatwedo-text">
                  <h3 className="text-xl font-bold text-white mb-2 text-center leading-tight">
                    {service.title}<br />
                    <span className="text-accent">{service.highlight}</span>
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
