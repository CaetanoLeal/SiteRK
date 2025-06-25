import { Button } from '@/components/ui/button'
{/* import { color } from 'framer-motion'*/}

const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-screen">
      {/* Imagem de fundo (vinda da public/images/) */}
     <div
        className="absolute left-0"
        style={{
          width: '100vw',
          height: '112vh',
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Gradientes sobrepostos */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-card to-background"></div>
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-accent/5 to-transparent"></div> */}

      {/* Borda superior */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 section-padding">
        <div className="container-custom text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="text-2xl font-bold text-white">
              RK <span className="text-accent">Marketing Digital</span>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Chegou a hora de transformar<br />
            sua presença online
          </h2>

          {/* Descrição */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos<br />
            levar seu negócio para o próximo nível.
          </p>

          {/* Botão CTA */}
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-16"
          >
            Quero fechar com a RK
          </Button>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © Todos Direitos Reservados - 2024 | RK Marketing Digital
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
