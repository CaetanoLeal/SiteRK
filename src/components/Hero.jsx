import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          width: '100vw',
          height: '190vh',
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Efeito de brilho (Glow) por cima do fundo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-gradient-radial from-accent/30 via-accent/10 to-transparent rounded-full pointer-events-none"></div>

      {/* Conteúdo principal */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-10">
            <div className="text-2xl font-bold text-white mb-2">
              RK <span className="text-accent">Marketing Digital</span>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-sora">
            Sua Marca no Topo: Estratégias<br />
            Inteligentes, <span className="gradient-text">Resultados Reais</span>
          </h1>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Impulsionamos negócios com criatividade, performance e<br />
            sustentabilidade digital. Oferecemos soluções completas de<br />
            marketing estratégico que promete.
          </p>

          {/* Botão CTA */}
          <Button  
            className="btn-cta !px-38 !py-9 !text-xl !font-bold !rounded-2xl">
            Contratar RK
          </Button>

          {/* Subtítulo */}
          <p className="text-sm text-muted-foreground mt-4">
            Fale com um profissional
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
