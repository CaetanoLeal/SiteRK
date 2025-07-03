import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-screen">
      {/* Imagem de fundo */}
      <div
        className="absolute left-0"
        style={{
          width: '100vw',
          height: '210vh',
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Borda superior */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      {/* Conteúdo principal com fundo preto estilizado */}
      <div className="relative z-10 section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-black/60 text-white p-12 rounded-3xl border border-white/15 text-center relative overflow-hidden">

            <div className="relative z-10">
              {/* Label */}
              <p className="text-white font-medium w-65 h-9 mx-auto text-center flex items-center justify-center mb-4">
                RK MARKETING!
              </p>

              {/* Título */}
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Chegou a hora de transformar<br />
                sua presença online
              </h2>

              {/* Descrição */}
              <p className="text-slate-300 mb-8">
                Entre em contato conosco e descubra como podemos<br />
                levar seu negócio para o próximo nível.
              </p>

              {/* Botão CTA */}
              <Button 
                size="lg"
                className="bg-white text-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg  hover:-translate-y-1"
              >
                Quero fechar com a RK
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 text-center border-t border-border mt-12">
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
