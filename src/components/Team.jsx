import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Instagram } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: "Rique Costa",
      role: "Diretor e especialista de marketing",
      image: "public/images/rique.png",
      description: "Com uma carreira sólida em estratégias de marketing e posicionamento de marca, Rique lidera com visão estratégica e foco em resultados. Atua na criação de campanhas de alto impacto que geram autoridade e conversão.",
      instagram: "@riquecosta__"
    },
    {
      name: "John",
      role: "Designer criativo",
      image: "public/images/jhon.jpg",
      description: "Designer apaixonado por inovação visual e experiência do usuário. John traduz conceitos em identidades visuais cativantes e funcionais, potencializando a percepção de valor de marcas e produtos.",
      instagram: "@jonathansilva.off"
    },
    {
      name: "Caetano Leal",
      role: "Programador e tecnologista",
      image: "public/images/caetano.jpg",
      description: "Especialista em dados e inteligência artificial. Caetano desenvolve soluções tecnológicas de ponta, com foco em automação, análise preditiva e integração inteligente para escalar negócios digitais.",
      instagram: "@caetanolealdev"
    },
    {
      name: "Tadashi Nori",
      role: "Chefe de atendimento",
      image: "public/images/tadashi.png",
      description: "Com empatia, eficiência e foco no cliente, Tadashi garante um atendimento humanizado, rápido e resolutivo. É o elo direto entre nossas soluções e a sua satisfação.",
      instagram: "@eutadashi_"
    }
  ]

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Pre-title */}
        <div className="text-center mb-4">
          <p className="pre-title mx-auto w-[125px] text-sm font-medium tracking-wider">
            NOSSO TIME
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Quem está por trás da <span className="gradient-text">RK</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conheça os especialistas que fazem a diferença no seu crescimento.<br />
            Experiência, dedicação e resultados comprovados.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="mb-16">
          <Carousel className="w-full mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={index}>
                  <div className="team-member-showcase group">
                    <div className="relative h-[700px] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Basic Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-primary text-lg font-semibold">
                          {member.role}
                        </p>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {member.name}
                          </h3>
                          <p className="text-primary text-lg font-semibold mb-6">
                            {member.role}
                          </p>
                          <p className="text-gray-200 leading-relaxed mb-8 max-w-md">
                            {member.description}
                          </p>
                          <a 
                            href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                          >
                            <Instagram className="w-5 h-5" />
                            {member.instagram}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-black/50 border-gray-600 hover:bg-black/70 text-white" />
            <CarouselNext className="right-4 bg-black/50 border-gray-600 hover:bg-black/70 text-white" />
          </Carousel>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-16">
          {teamMembers.map((_, index) => (
            <div 
              key={index} 
              className="w-2 h-2 rounded-full bg-gray-600 hover:bg-primary transition-colors duration-300 cursor-pointer"
            ></div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="btn-cta !px-38 !py-9 !text-xl !font-bold !rounded-2xl">
            Conversar conosco
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Descubra como trabalhamos para gerar resultados
          </p>
        </div>
      </div>
    </section>
  )
}

export default Team
