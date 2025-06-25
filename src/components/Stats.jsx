import { Button } from '@/components/ui/button'

const Stats = () => {
  const stats = [
    { number: "10+", label: "anos no mercado" },
    { number: "10+", label: "mil clientes atendidos" },
    { number: "90%", label: "de aprovação em projetos entregues" }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nós Somos a RK.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A RK é uma agência focada em estratégias<br />
              de marketing digital que geram resultados.<br />
              Nosso time é formado por especialistas<br />
              apaixonados por transformar marcas em<br />
              referências no mercado digital.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Contratar RK
            </Button>
          </div>
          
          {/* Right Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-4xl md:text-6xl font-bold text-accent mb-2">
                  {stat.number}
                </span>
                <span className="text-muted-foreground text-lg">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

