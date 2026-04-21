import { ArrowLeft, Target, Sparkles, TrendingUp, Building2, MapPin, Briefcase, CheckCircle2, Star, Zap, Users, Award, Heart, AlertTriangle } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';

interface MatchingSystemProps {
  onBack: () => void;
}

export function MatchingSystem({ onBack }: MatchingSystemProps) {
  const candidateProfile = {
    skillScore: 94,
    consistencyScore: 87,
    growthScore: 89,
    pressureScore: 85,
    avgCompanyLevel: 88
  };

  const companyProfile = {
    avgEmployeeScore: 82,
    cultureFit: 'Collaborative',
    workPace: 'Fast-paced',
    teamSize: 'Medium (50-100)',
    techStack: ['React', 'Node.js', 'TypeScript']
  };

  const compatibilityFactors = [
    { factor: 'Nivel técnico', candidate: 94, company: 82 },
    { factor: 'Ritmo de trabajo', candidate: 85, company: 90 },
    { factor: 'Cultura colaborativa', candidate: 92, company: 88 },
    { factor: 'Autonomía', candidate: 88, company: 85 },
    { factor: 'Crecimiento', candidate: 89, company: 80 },
    { factor: 'Tech Stack', candidate: 95, company: 92 }
  ];

  const topMatches = [
    {
      company: 'InnovateTech',
      matchScore: 96,
      logo: 'IT',
      position: 'Senior Full Stack Developer',
      location: 'Buenos Aires (Remoto)',
      salary: '$4000-5500',
      factors: {
        skillMatch: 98,
        cultureMatch: 94,
        growthPotential: 95,
        teamFit: 93
      },
      pros: ['Tech stack perfecto', 'Fuerte cultura de innovación', 'Alto crecimiento'],
      cons: ['Ritmo muy exigente'],
      autoAcceptProbability: 85
    },
    {
      company: 'TechCorp',
      matchScore: 92,
      logo: 'TC',
      position: 'Tech Lead',
      location: 'Buenos Aires',
      salary: '$4500-6000',
      factors: {
        skillMatch: 94,
        cultureMatch: 90,
        growthPotential: 88,
        teamFit: 95
      },
      pros: ['Excelente balance vida-trabajo', 'Equipo senior', 'Proyectos estables'],
      cons: ['Menor innovación tecnológica'],
      autoAcceptProbability: 72
    },
    {
      company: 'StartupXYZ',
      matchScore: 88,
      logo: 'SX',
      position: 'Lead Developer',
      location: 'Remoto',
      salary: '$3500-5000 + equity',
      factors: {
        skillMatch: 90,
        cultureMatch: 92,
        growthPotential: 94,
        teamFit: 85
      },
      pros: ['Alto potencial de crecimiento', 'Equity atractivo', 'Mucha autonomía'],
      cons: ['Menor estabilidad', 'Equipo pequeño'],
      autoAcceptProbability: 65
    }
  ];

  const matchingCriteria = [
    {
      icon: Target,
      title: 'Compatibilidad Técnica',
      description: 'Tu nivel de skills vs nivel promedio de la empresa',
      weight: 30,
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Cultura y Valores',
      description: 'Tipo de cultura organizacional y forma de trabajar',
      weight: 25,
      color: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Potencial de Crecimiento',
      description: 'Oportunidades de desarrollo profesional',
      weight: 20,
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Ritmo y Presión',
      description: 'Tu pressure score vs exigencias del puesto',
      weight: 15,
      color: 'text-orange-600'
    },
    {
      icon: Award,
      title: 'Historial y Reputación',
      description: 'Tu trayectoria vs expectativas de la empresa',
      weight: 10,
      color: 'text-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-green-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl mb-2">Matching Inteligente</h1>
              <p className="text-slate-600">
                Sistema de compatibilidad estructural, no solo filtros
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>IA Activa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* How Matching Works */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-8">
          <h2 className="text-2xl mb-6">¿Cómo funciona el Matching?</h2>
          <p className="text-slate-600 mb-8">
            No filtramos por keywords. Calculamos compatibilidad estructural basada en múltiples dimensiones.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {matchingCriteria.map((criterion, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition-all">
                <criterion.icon className={`w-8 h-8 ${criterion.color} mb-3`} />
                <h4 className="mb-2">{criterion.title}</h4>
                <p className="text-sm text-slate-600 mb-3">{criterion.description}</p>
                <div className="text-xs text-slate-500">Peso: {criterion.weight}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Compatibility Analysis */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl mb-6">Análisis de Compatibilidad</h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={compatibilityFactors}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis
                  dataKey="factor"
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#64748b' }} />
                <Radar
                  name="Tu perfil"
                  dataKey="candidate"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.5}
                />
                <Radar
                  name="Empresa objetivo"
                  dataKey="company"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.5}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl mb-6">Tu Perfil de Matching</h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur rounded-xl">
                <span>Skill Score</span>
                <span className="text-2xl">{candidateProfile.skillScore}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur rounded-xl">
                <span>Consistency Score</span>
                <span className="text-2xl">{candidateProfile.consistencyScore}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur rounded-xl">
                <span>Growth Score</span>
                <span className="text-2xl">{candidateProfile.growthScore}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur rounded-xl">
                <span>Pressure Score</span>
                <span className="text-2xl">{candidateProfile.pressureScore}</span>
              </div>
            </div>

            <div className="p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Nivel Objetivo</span>
              </div>
              <p className="text-sm text-blue-100">
                Empresas con nivel promedio {candidateProfile.avgCompanyLevel-10} - {candidateProfile.avgCompanyLevel+10} son tu mejor match
              </p>
            </div>
          </div>
        </div>

        {/* Top Matches */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl">Tus Mejores Matches</h2>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Sparkles className="w-4 h-4" />
              <span>Actualizado en tiempo real</span>
            </div>
          </div>

          <div className="space-y-6">
            {topMatches.map((match, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 hover:border-green-300 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left: Company Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-xl flex-shrink-0">
                        {match.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl mb-1">{match.company}</h3>
                            <div className="mb-2">{match.position}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                              {match.matchScore}
                            </div>
                            <div className="text-xs text-slate-600">Match Score</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-600 mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {match.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {match.salary}
                          </span>
                        </div>

                        {/* Compatibility Factors */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="p-3 bg-white rounded-lg border border-slate-200">
                            <div className="text-xs text-slate-600 mb-1">Skill Match</div>
                            <div className="text-lg text-blue-600">{match.factors.skillMatch}%</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg border border-slate-200">
                            <div className="text-xs text-slate-600 mb-1">Culture Match</div>
                            <div className="text-lg text-purple-600">{match.factors.cultureMatch}%</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg border border-slate-200">
                            <div className="text-xs text-slate-600 mb-1">Growth Potential</div>
                            <div className="text-lg text-green-600">{match.factors.growthPotential}%</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg border border-slate-200">
                            <div className="text-xs text-slate-600 mb-1">Team Fit</div>
                            <div className="text-lg text-orange-600">{match.factors.teamFit}%</div>
                          </div>
                        </div>

                        {/* Pros & Cons */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2 text-sm text-green-700">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Ventajas</span>
                            </div>
                            <ul className="space-y-1">
                              {match.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                  <span className="text-green-600 mt-1">•</span>
                                  <span>{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2 text-sm text-orange-700">
                              <AlertTriangle className="w-4 h-4" />
                              <span>Consideraciones</span>
                            </div>
                            <ul className="space-y-1">
                              {match.cons.map((con, i) => (
                                <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                  <span className="text-orange-600 mt-1">•</span>
                                  <span>{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Auto-Accept Probability */}
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-600" />
                          <span className="text-sm">Probabilidad de Auto-Aceptación</span>
                        </div>
                        <span className="text-lg text-blue-600">{match.autoAcceptProbability}%</span>
                      </div>
                      <div className="bg-white rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full"
                          style={{ width: `${match.autoAcceptProbability}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-600 mt-2">
                        Basado en tu score, distancia y compatibilidad, esta empresa podría aceptarte automáticamente
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Aplicar a esta posición
                  </button>
                  <button className="px-6 py-3 border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                    Ver más detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Matching Algorithm Explanation */}
        <div className="mt-8 bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl text-white">
          <h3 className="text-2xl mb-4">¿Cómo calculamos el Match Score?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur rounded-xl">
              <Target className="w-8 h-8 mb-3 text-blue-400" />
              <h4 className="mb-2">Análisis Multidimensional</h4>
              <p className="text-sm text-slate-300">
                Evaluamos 20+ variables incluyendo skills, cultura, crecimiento y contexto laboral
              </p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-xl">
              <Sparkles className="w-8 h-8 mb-3 text-purple-400" />
              <h4 className="mb-2">Machine Learning</h4>
              <p className="text-sm text-slate-300">
                Algoritmos de IA aprenden de matches exitosos para mejorar predicciones
              </p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur rounded-xl">
              <CheckCircle2 className="w-8 h-8 mb-3 text-green-400" />
              <h4 className="mb-2">Probabilidad de Éxito</h4>
              <p className="text-sm text-slate-300">
                Calculamos la probabilidad real de que la relación laboral sea exitosa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
