import { Button } from '@/components/ui/button'

const CTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="blue-gradient-border bg-white text-slate-900 p-12 rounded-xl text-center relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Label */}
              <p className="text-primary font-medium mb-4">
                Vamos juntos ser a próxima!
              </p>
              
              {/* Title */}
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Transforme seu negócio com tecnologia<br />
                que faz a diferença, seja RK!
              </h2>
              
              {/* Description */}
              <p className="text-slate-600 mb-8">
                Clique abaixo para entrar em contato conosco
              </p>
              
              {/* CTA Button */}
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Quero fechar com a RK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

