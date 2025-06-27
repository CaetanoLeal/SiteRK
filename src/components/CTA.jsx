import { Button } from '@/components/ui/button'

const CTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-8xl mx-auto">
          <div className="bg-white text-slate-900 p-12 !rounded-3xl text-center relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Label */}
              <p className="text-white font-medium bg-black w-65 h-9 mx-auto text-center !rounded-3xl flex items-center justify-center">
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
                className="btn-cta !px-38 !py-9 !text-xl !font-bold !rounded-2xl"
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

