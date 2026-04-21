import { ArrowLeft, Building2, TrendingUp, Users, Award, MapPin, CheckCircle2, AlertCircle, Star, BarChart3, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';

interface CompanyDashboardProps {
  onBack: () => void;
}

export function CompanyDashboard({ onBack }: CompanyDashboardProps) {
  const companyMetrics = [
    { name: 'Employee Quality Index', value: 88, change: '+5%' },
    { name: 'Talent Consistency', value: 82, change: '+3%' },
    { name: 'Retention Quality', value: 91, change: '+2%' },
    { name: 'Internal Reputation', value: 86, change: '-1%' }
  ];

  const departmentScores = [
    { department: 'Engineering', avgScore: 92, employees: 45, trend: 'up' },
    { department: 'Product', avgScore: 88, employees: 12, trend: 'up' },
    { department: 'Design', avgScore: 90, employees: 8, trend: 'stable' },
    { department: 'Marketing', avgScore: 85, employees: 15, trend: 'up' },
    { department: 'Sales', avgScore: 83, employees: 20, trend: 'down' }
  ];

  const talentDistribution = [
    { name: 'Top Performers (90-100)', value: 30, color: '#10b981' },
    { name: 'High Performers (80-89)', value: 45, color: '#3b82f6' },
    { name: 'Average (70-79)', value: 20, color: '#f59e0b' },
    { name: 'Needs Improvement', value: 5, color: '#ef4444' }
  ];

  const retentionData = [
    { month: 'Ene', topTalent: 95, average: 88 },
    { month: 'Feb', topTalent: 94, average: 87 },
    { month: 'Mar', topTalent: 96, average: 89 },
    { month: 'Abr', topTalent: 95, average: 88 },
    { month: 'May', topTalent: 97, average: 90 },
    { month: 'Jun', topTalent: 98, average: 91 }
  ];

  const topEmployees = [
    { name: 'Ana García', role: 'Senior Engineer', score: 96, department: 'Engineering', yearsWithCompany: 4 },
    { name: 'Carlos López', role: 'Product Lead', score: 94, department: 'Product', yearsWithCompany: 3 },
    { name: 'María Silva', role: 'Design Director', score: 93, department: 'Design', yearsWithCompany: 5 },
    { name: 'Juan Rodríguez', role: 'Tech Lead', score: 92, department: 'Engineering', yearsWithCompany: 2 },
    { name: 'Laura Martínez', role: 'Senior Designer', score: 91, department: 'Design', yearsWithCompany: 3 }
  ];

  const marketInsights = [
    { metric: 'Promedio de mercado (tu ciudad)', value: '82', comparison: '+6 pts vs tu empresa' },
    { metric: 'Densidad de talento senior', value: 'Alta', comparison: 'Top 15% en la región' },
    { metric: 'Competencia por talento', value: 'Media-Alta', comparison: '23 empresas compitiendo' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-purple-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl mb-2">TechCorp S.A.</h1>
                <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Buenos Aires, Argentina
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    100 empleados
                  </span>
                  <span className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    Tecnología
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  88
                </div>
                <div className="text-sm text-slate-600">Company Score</div>
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm">Empresa Verificada</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {companyMetrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-2">
                <div className="text-sm text-slate-600">{metric.name}</div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  metric.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full"
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Talent Distribution */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl mb-6">Distribución de Talento</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={talentDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {talentDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Retention Quality */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl mb-6">Retención de Talento</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" domain={[80, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="topTalent"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="Top Talent"
                  dot={{ fill: '#10b981', r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="average"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="Promedio"
                  dot={{ fill: '#3b82f6', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-8">
          <h3 className="text-xl mb-6">Performance por Departamento</h3>
          <div className="space-y-4">
            {departmentScores.map((dept, index) => (
              <div key={index} className="p-5 bg-slate-50 rounded-xl hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white">
                      {dept.department[0]}
                    </div>
                    <div>
                      <div className="mb-1">{dept.department}</div>
                      <div className="text-sm text-slate-600">{dept.employees} empleados</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {dept.trend === 'up' && <TrendingUp className="w-5 h-5 text-green-600" />}
                    {dept.trend === 'down' && <TrendingUp className="w-5 h-5 text-red-600 rotate-180" />}
                    {dept.trend === 'stable' && <div className="w-5 h-5" />}
                    <div className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {dept.avgScore}
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full"
                    style={{ width: `${dept.avgScore}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Employees */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-8">
          <h3 className="text-xl mb-6">Top Performers</h3>
          <div className="space-y-3">
            {topEmployees.map((employee, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    #{index + 1}
                  </div>
                  <div>
                    <div className="mb-1">{employee.name}</div>
                    <div className="text-sm text-slate-600">{employee.role} • {employee.department}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center hidden md:block">
                    <div className="text-sm text-slate-600 mb-1">Antigüedad</div>
                    <div className="text-sm">{employee.yearsWithCompany} años</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">Score</div>
                    <div className="text-xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {employee.score}
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights (Premium) */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl text-white">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl mb-2">Market Insights Premium</h3>
              <p className="text-purple-100">Datos del mercado laboral en tu región</p>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
              <span className="text-sm">Premium</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <div key={index} className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                <div className="text-sm text-purple-100 mb-2">{insight.metric}</div>
                <div className="text-2xl mb-3">{insight.value}</div>
                <div className="text-sm text-purple-200">{insight.comparison}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
              <Target className="w-8 h-8 mb-3 text-purple-200" />
              <div className="mb-2">Análisis de Competencia</div>
              <p className="text-sm text-purple-100">
                Descubre qué empresas están compitiendo por el mismo talento en tu región
              </p>
            </div>
            <div className="flex-1 bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
              <BarChart3 className="w-8 h-8 mb-3 text-purple-200" />
              <div className="mb-2">Benchmarking Salarial</div>
              <p className="text-sm text-purple-100">
                Compara tus rangos salariales con el mercado para retener mejor talento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
