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

