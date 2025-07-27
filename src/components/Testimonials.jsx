const Testimonials = () => {
  return (
    <section className="section-padding from-card to-background">
      <div className="container-custom">
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

export default Testimonials;
