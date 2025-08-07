'use client'

import { Button } from '@/components/ui/button'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts'
import {
  TrendingUp,
  Target,
  Users,
  DollarSign
} from 'lucide-react'

const Results = () => {
  // Dados para os gráficos
  const salesData = [
  { month: 'Jan', vendas: 24, leads: 120 },  // 20%
  { month: 'Fev', vendas: 35, leads: 130 },  // 26.9%
  { month: 'Mar', vendas: 50, leads: 140 },  // 35.7%
  { month: 'Abr', vendas: 70, leads: 150 },  // 46.7%
  { month: 'Mai', vendas: 95, leads: 160 },  // 59.4%
  { month: 'Jun', vendas: 120, leads: 170 }  // 70.5%
]

  const kpis = [
    { label: "Aumento em Vendas", value: "247%", icon: TrendingUp, color: "text-blue-900"},
    { label: "Leads Qualificados", value: "1.2K+", icon: Users, color: "text-blue-900" },
    { label: "ROI Médio", value: "340%", icon: DollarSign, color: "text-blue-900" },
    { label: "Taxa de Conversão", value: "32%", icon: Target, color: "text-blue-900" }
  ]

  // Dados calculados para taxa de conversão
  const conversionRateData = salesData.map(({ month, vendas, leads }) => ({
    month,
    conversao: parseFloat(((vendas / leads) * 100).toFixed(1))
  }))

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
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <kpi.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-blue-700">
                    {kpi.value}
                  </div>
                  <p className="text-muted-foreground text-sm">
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
                      stroke="#0c0076ff"
                      strokeWidth={3}
                      dot={{ fill: '#ffffffff', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Conversion Rate Chart */}
          <div className="chart-card">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Taxa de Conversão</h3>
              <p className="text-gray-400 mb-6">Evolução da conversão mês a mês</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={conversionRateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <YAxis stroke="#9CA3AF" domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
                    <Line
                      type="monotone"
                      dataKey="conversao"
                      stroke="#0c0076ff"
                      strokeWidth={3}
                      dot={{ fill: '#ffffffff', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="btn-cta !px-38 !py-9 !text-xl !font-bold !rounded-2xl">
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
