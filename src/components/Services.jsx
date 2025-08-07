import { Button } from '@/components/ui/button'
import { TrendingUp, Target, Users, DollarSign, Zap, Award, } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa";

const Results = () => {

  const methodologies = [
    {
      icon: Target,
      title: "Metodologia SMART",
      description: "Objetivos específicos, mensuráveis, alcançáveis, relevantes e temporais para cada campanha.",
      metrics: "95% de precisão nas metas"
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Fluxos automatizados que nutrem leads e aceleram o processo de vendas com IA.",
      metrics: "3x mais eficiência"
    },
    {
      icon: Award,
      title: "Performance Driven",
      description: "Todas as estratégias são baseadas em dados e otimizadas continuamente para máximo ROI.",
      metrics: "200% aumento médio em ROI"
    }
  ]

  return (
    <div className="container-custom">
      <div className="text-center mb-4">
        <p className="pre-title mx-auto w-[125px] text-sm font-medium tracking-wider">
          MÉTODO RK
        </p>
      </div>
    {/* Methodologies */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Nossas <span className="gradient-text">Metodologias</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processos comprovados que garantem resultados consistentes e escaláveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodologies.map((method, index) => (
            <div key={index} className="methodology-card group">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>

                <h4 className="text-xl font-bold text-white mb-4">
                  {method.title}
                </h4>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {method.description}
                </p>

                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  {method.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Posicionamento Estratégico nas Redes Sociais */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Posicionamento Estratégico nas <span className="gradient-text">Redes Sociais</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecione a rede social que deseja alavancar seus resultados
          </p>
        </div>

        <div className="relative w-[600px] h-[300px] mx-auto">
          {[
            { name: "Facebook", icon: FaFacebookF, growth: "+245%", color: "from-blue-500 to-blue-700" },
            { name: "LinkedIn", icon: FaLinkedinIn, growth: "+180%", color: "from-blue-600 to-blue-800" },
            { name: "Instagram", icon: FaInstagram, growth: "+120%", color: "from-pink-500 to-purple-600" },
            { name: "YouTube", icon: FaYoutube, growth: "+300%", color: "from-red-500 to-red-700" },
            { name: "TikTok", icon: FaTiktok, growth: "+200%", color: "from-pink-400 to-pink-700" }
          ].map((social, index, array) => {
            const total = array.length;
            const angleStep = Math.PI / (total + 1);
            const angle = angleStep * (index + 1);
            const centerX = 300;
            const centerY = 230;
            const radiusX = 260;
            const radiusY = 180;

            const x = Math.cos(angle) * radiusX + centerX - 50;
            const y = Math.sin(angle) * -radiusY + centerY - 50;

            const Icon = social.icon;

            return (
              <div
                key={index}
                className="absolute w-[100px] h-[100px] text-center group transition-all duration-300"
                style={{ left: `${x}px`, top: `${y}px` }}
              >
                <div className="p-4 rounded-2xl border border-transparent hover:border-primary/50 transition-all duration-300 relative">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} mx-auto flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon />
                  </div>

                  {/* Setinha de crescimento (visível apenas no hover) */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </div>

                  {/* Conteúdo revelado no hover */}
                  <div className="transition-all duration-300 ease-in-out opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100px] overflow-hidden">
                    <h4 className="text-white font-bold text-sm mt-2">{social.name}</h4>
                    <div className="text-green-400 font-bold text-sm">{social.growth}</div>
                    <p className="text-gray-400 text-xs">crescimento</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

        {/* Timeline Método RK */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Método <span className="gradient-text">RK</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nossa metodologia comprovada em 4 etapas para transformar seu negócio
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Linha da timeline */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 hidden md:block" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {[
                  { step: "01", title: "Atrair", description: "Estratégias de conteúdo e tráfego pago para atrair leads qualificados" },
                  { step: "02", title: "Converter", description: "Otimização de landing pages e funis para maximizar conversões" },
                  { step: "03", title: "Fechar", description: "Automação comercial e processos de vendas estruturados" },
                  { step: "04", title: "Fidelizar", description: "Estratégias de retenção e upsell para clientes existentes" }
                ].map((phase, index) => (
                  <div key={index} className="relative text-center group">
                    {/* Radar effect container */}
                    <div className="relative flex items-center justify-center mx-auto w-30 h-30 circle-wave">
                      {/* Círculo externo fixo mais claro */}
                      <div className="absolute w-25 h-25 rounded-full bg-gradient-to-br from-blue-700 via-blue-900 to-blue-700 z-0" />
                      
                      {/* Círculo interno escuro com texto */}
                      <div
                        className="relative z-10 w-22 h-22 flex items-center justify-center rounded-full shadow-lg text-white font-semibold text-base"
                        style={{ backgroundColor: "#100051ff" }}
                      >
                        {phase.title}
                      </div>
                    </div>

                    {/* Card ao hover */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-64 p-4 rounded-xl bg-gray-900/90 text-white shadow-lg border border-primary/30 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none z-20">
                      <div className="text-primary text-sm font-bold mb-1">ETAPA {phase.step}</div>
                      <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                      <p className="text-sm text-gray-300">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

      {/* CTA */}
      <div className="text-center">
        <Button className="btn-cta !px-38 !py-9 !text-xl !font-bold !rounded-2xl">
          Quero ver esses resultados
        </Button>
      </div>
    </div>
  )
}

export default Results
