const WhatWeDo = () => {
  const services = [
    {
      icon: "/images/icon1.png",
      title: "Estratégia & Aumento de",
      highlight: "Conversão",
      description:
        "Um plano 100% validado. Mais leads. Mais vendas. Mais resultados.",
    },
    {
      icon: "/images/icon3.png",
      title: "Design Criativo &",
      highlight: "Responsivo",
      description:
        "Criamos designs únicos e responsivos que capturam a essência da sua marca e encantam seus clientes.",
    },
    {
      icon: "/images/icon2.png",
      title: "Processo Rápido &",
      highlight: "Eficiente",
      description:
        "Nossos processos são otimizados para entregar resultados rápidos sem comprometer a qualidade.",
    },
  ];

  const clientLogos = [
    { name: "Colégio Intelectual Bilingue", logo: "/images/company2.png" },
    { name: "Cliente 2", logo: "/images/company1.png" },
  ];

  return (
    <section className="relative section-padding bg-[url('/images/background2.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Gradiente overlay preto → transparente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/60 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 container-custom p-6 rounded-lg">
        {/* Pre-title */}
        <div className="text-center mb-4">
          <p className="pre-title mx-auto w-[125px] text-sm font-medium tracking-wider text-white">
            POR QUE RK?
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight gradient-text text-white">
            O Que Fazemos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-gray-300">
            Fazemos tudo com excelência!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="whatwedo-card group bg-transparent">
              <div className="whatwedo-card-content">
                <div className="whatwedo-icon">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="whatwedo-text">
                  <h3 className="text-xl font-bold text-white mb-2 text-center leading-tight">
                    {service.title}
                    <br />
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

        {/* Header de parceiros */}
        <div className="mb-4">
          <p className="pre-title text-center">
            Nossos parceiros
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Empresas que Confiam
            <br />
            Resultados que Comprovam
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Quem está com a RK sabe: Aqui é onde a magia acontece e resultados
              <br />
              reais são entregues. Veja o que nossos clientes têm a dizer sobre
              <br />
              nossa parceria e os resultados que alcançamos juntos
            </p>
          </div>
        </div>

        {/* Client Logos */}
        <div className="flex gap-8 mb-16">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="w-48 h-1 flex items-center justify-center text-2xl"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-26 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
