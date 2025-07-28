import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, Target, Users, DollarSign, Zap, Award } from 'lucide-react'

const Results = () => {
  // Dados para os gráficos
  const salesData = [
    { month: 'Jan', vendas: 45, leads: 120 },
    { month: 'Fev', vendas: 52, leads: 140 },
    { month: 'Mar', vendas: 61, leads: 165 },
    { month: 'Abr', vendas: 74, leads: 190 },
    { month: 'Mai', vendas: 89, leads: 220 },
    { month: 'Jun', vendas: 95, leads: 245 }
  ]

  const conversionData = [
    { name: 'Leads Qualificados', value: 68, color: '#3B82F6' },
    { name: 'Propostas Enviadas', value: 45, color: '#8B5CF6' },
    { name: 'Vendas Fechadas', value: 32, color: '#10B981' }
  ]

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

  const kpis = [
    { label: "Aumento em Vendas", value: "247%", icon: TrendingUp, color: "text-green-400" },
    { label: "Leads Qualificados", value: "1.2K+", icon: Users, color: "text-blue-400" },
    { label: "ROI Médio", value: "340%", icon: DollarSign, color: "text-yellow-400" },
    { label: "Taxa de Conversão", value: "32%", icon: Target, color: "text-purple-400" }
  ]

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Pre-title */}
        <div className="text-center mb-4">
          <p className="pre-title mx-auto w-[125px] text-sm font-medium tracking-wider">
            RESULTADOS
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Dados que <span className="gradient-text">comprovam</span><br />
            nossa eficiência
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparência total nos resultados. Veja como transformamos<br />
            estratégias em números que realmente importam.
          </p>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {kpis.map((kpi, index) => (
            <div key={index} className="kpi-card group">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${kpi.color}`}>
                  {kpi.value}
                </div>
                <p className="text-gray-300 text-sm">
                  {kpi.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Sales Chart */}
          <div className="chart-card">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Evolução de Vendas</h3>
              <p className="text-gray-400 mb-6">Crescimento consistente mês a mês</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Line 
                      type="monotone" 
                      dataKey="vendas" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Conversion Funnel */}
          <div className="chart-card">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Funil de Conversão</h3>
              <p className="text-gray-400 mb-6">Performance do processo de vendas</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conversionData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" stroke="#9CA3AF" />
                    <YAxis dataKey="name" type="category" stroke="#9CA3AF" width={120} />
                    <Bar dataKey="value" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
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
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { step: "01", title: "Atrair", description: "Estratégias de conteúdo e tráfego pago para atrair leads qualificados", icon: "🎯" },
                { step: "02", title: "Converter", description: "Otimização de landing pages e funis para maximizar conversões", icon: "⚡" },
                { step: "03", title: "Fechar", description: "Automação comercial e processos de vendas estruturados", icon: "🤝" },
                { step: "04", title: "Fidelizar", description: "Estratégias de retenção e upsell para clientes existentes", icon: "💎" }
              ].map((phase, index) => (
                <div key={index} className="timeline-item text-center relative">
                  {/* Timeline Dot */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block"></div>
                  
                  <div className="timeline-card p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
                    <div className="text-4xl mb-4">{phase.icon}</div>
                    <div className="text-primary text-sm font-bold mb-2">ETAPA {phase.step}</div>
                    <h4 className="text-xl font-bold text-white mb-3">{phase.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Posicionamento Estratégico nas Redes Sociais */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Posicionamento Estratégico nas <span className="gradient-text">Redes Sociais</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crescimento orgânico e engajamento autêntico em todas as plataformas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Instagram", growth: "+245%", color: "from-pink-500 to-purple-600" },
              { name: "LinkedIn", growth: "+180%", color: "from-blue-600 to-blue-800" },
              { name: "Facebook", growth: "+120%", color: "from-blue-500 to-blue-700" },
              { name: "YouTube", growth: "+300%", color: "from-red-500 to-red-700" }
            ].map((social, index) => (
              <div key={index} className="social-growth-card text-center group">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  {/* Social Icon with Growth Arrow */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${social.color} mx-auto flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                      {social.name.charAt(0)}
                    </div>
                    {/* Growth Arrow */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                  
                  <h4 className="text-white font-bold mb-2">{social.name}</h4>
                  <div className="text-green-400 font-bold text-lg">{social.growth}</div>
                  <p className="text-gray-400 text-xs">crescimento</p>
                </div>
              </div>
            ))}
          </div>
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

        {/* CTA */}
        <div className="text-center">
          <Button
            className="btn-cta !px-38 !py-9 !text-xl !font-bold !rounded-2xl"
          >
            Quero esses resultados
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Vamos analisar seu negócio e criar uma estratégia personalizada
          </p>
        </div>
      </div>
    </section>
  )
}

export default Results

