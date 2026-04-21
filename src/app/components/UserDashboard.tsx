import { ArrowLeft, Award, TrendingUp, Shield, Target, Users, CheckCircle2, Clock, Activity, Zap, Star, MapPin, Briefcase, Calendar } from 'lucide-react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

interface UserDashboardProps {
  onBack: () => void;
}

export function UserDashboard({ onBack }: UserDashboardProps) {
  const overallScores = [
    { name: 'Skill', value: 94, fill: '#3b82f6' },
    { name: 'Consistency', value: 87, fill: '#8b5cf6' },
    { name: 'Reliability', value: 91, fill: '#10b981' },
    { name: 'Growth', value: 89, fill: '#f59e0b' },
    { name: 'Pressure', value: 85, fill: '#ef4444' }
  ];

  const skillScores = [
    { skill: 'React', score: 95, evaluations: 12 },
    { skill: 'TypeScript', score: 92, evaluations: 10 },
    { skill: 'Node.js', score: 88, evaluations: 8 },
    { skill: 'System Design', score: 85, evaluations: 6 },
    { skill: 'Team Leadership', score: 90, evaluations: 9 }
  ];

  const growthData = [
    { month: 'Ene', score: 75 },
    { month: 'Feb', score: 78 },
    { month: 'Mar', score: 82 },
    { month: 'Abr', score: 85 },
    { month: 'May', score: 88 },
    { month: 'Jun', score: 91 }
  ];

  const evaluations = [
    {
      from: 'María González',
      role: 'Engineering Manager',
      company: 'TechCorp',
      relationship: 'Jefe directo',
      duration: '2 años',
      weight: 95,
      score: 93,
      verified: true
    },
    {
      from: 'Carlos Ruiz',
      role: 'Senior Developer',
      company: 'TechCorp',
      relationship: 'Par',
      duration: '1.5 años',
      weight: 75,
      score: 90,
      verified: true
    },
    {
      from: 'Ana Martínez',
      role: 'Product Manager',
      company: 'StartupXYZ',
      relationship: 'Cliente',
      duration: '3 meses',
      weight: 40,
      score: 88,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                JD
              </div>
              <div>
                <h1 className="text-3xl mb-2">Juan Pérez</h1>
                <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    Senior Full Stack Developer
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Buenos Aires, Argentina
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    8 años de experiencia
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  91
                </div>
                <div className="text-sm text-slate-600">Trust Score</div>
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm">Verificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Score Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {[
            { icon: Award, name: 'Skill Score', value: 94, color: 'from-blue-600 to-blue-700' },
            { icon: Activity, name: 'Consistency', value: 87, color: 'from-purple-600 to-purple-700' },
            { icon: Shield, name: 'Reliability', value: 91, color: 'from-green-600 to-green-700' },
            { icon: TrendingUp, name: 'Growth', value: 89, color: 'from-orange-600 to-orange-700' },
            { icon: Zap, name: 'Pressure', value: 85, color: 'from-red-600 to-red-700' }
          ].map((score, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <score.icon className="w-8 h-8 text-slate-600 mb-3" />
              <div className={`text-2xl mb-1 bg-gradient-to-r ${score.color} bg-clip-text text-transparent`}>
                {score.value}
              </div>
              <div className="text-sm text-slate-600">{score.name}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Radial Chart */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl mb-6">Distribución de Scores</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart
                innerRadius="10%"
                outerRadius="100%"
                data={overallScores}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise={true}
                  dataKey="value"
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          {/* Growth Chart */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl mb-6">Evolución de Growth Score</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" domain={[70, 95]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="url(#colorGradient)"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 5 }}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skills Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-8">
          <h3 className="text-xl mb-6">Skills Específicas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={skillScores} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" domain={[0, 100]} stroke="#64748b" />
              <YAxis dataKey="skill" type="category" stroke="#64748b" width={120} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="score" fill="url(#barGradient)" radius={[0, 8, 8, 0]} />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {skillScores.map((skill, index) => (
              <div key={index} className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-lg mb-1 text-blue-600">{skill.evaluations}</div>
                <div className="text-sm text-slate-600">Evaluaciones en {skill.skill}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluations */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h3 className="text-xl mb-6">Evaluaciones Recientes</h3>
          <div className="space-y-4">
            {evaluations.map((evaluation, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {evaluation.from.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span>{evaluation.from}</span>
                        {evaluation.verified && (
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <div className="text-sm text-slate-600 mb-2">
                        {evaluation.role} • {evaluation.company}
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 text-slate-600">
                          <Users className="w-4 h-4" />
                          {evaluation.relationship}
                        </span>
                        <span className="flex items-center gap-1 text-slate-600">
                          <Clock className="w-4 h-4" />
                          {evaluation.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-slate-600 mb-1">Peso</div>
                      <div className="text-lg text-blue-600">{evaluation.weight}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-slate-600 mb-1">Score</div>
                      <div className="text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {evaluation.score}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="bg-white rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full"
                      style={{ width: `${evaluation.weight}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
