import { useState } from 'react';
import {
  Brain,
  TrendingUp,
  Shield,
  Target,
  Users,
  Building2,
  Sparkles,
  BarChart3,
  Lock,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Star,
  Zap,
  Award,
  Clock,
  Activity
} from 'lucide-react';
import { UserDashboard } from './components/UserDashboard';
import { CompanyDashboard } from './components/CompanyDashboard';
import { MatchingSystem } from './components/MatchingSystem';

export default function App() {
  const [activeView, setActiveView] = useState<'landing' | 'user' | 'company' | 'matching'>('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'Sistema de Inferencia IA',
      description: 'No sumamos votos, interpretamos datos con inteligencia artificial avanzada',
      color: 'text-purple-600'
    },
    {
      icon: Target,
      title: 'Evaluaciones Contextualizadas',
      description: 'Cada evaluación incluye relación real, duración, frecuencia y nivel de responsabilidad',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Verificación Multi-nivel',
      description: 'Sistema de verificación desde email hasta documentación legal',
      color: 'text-green-600'
    },
    {
      icon: BarChart3,
      title: 'Scores Multidimensionales',
      description: 'Skill Score, Consistency, Reliability, Growth y Pressure Score',
      color: 'text-orange-600'
    },
    {
      icon: Sparkles,
      title: 'Matching Inteligente',
      description: 'Compatibilidad estructural basada en datos, no solo filtros',
      color: 'text-pink-600'
    },
    {
      icon: Users,
      title: 'Roles Contextuales',
      description: 'Un usuario puede ser empleado, empleador, cliente o evaluador según el contexto',
      color: 'text-indigo-600'
    }
  ];

  const scoreTypes = [
    {
      name: 'Skill Score',
      description: 'Desempeño en habilidades específicas',
      icon: Award,
      value: 94
    },
    {
      name: 'Consistency Score',
      description: 'Estabilidad del rendimiento en el tiempo',
      icon: Activity,
      value: 87
    },
    {
      name: 'Reliability Score',
      description: 'Basado en la calidad de evaluadores',
      icon: CheckCircle2,
      value: 91
    },
    {
      name: 'Growth Score',
      description: 'Mejora continua a lo largo del tiempo',
      icon: TrendingUp,
      value: 89
    },
    {
      name: 'Pressure Score',
      description: 'Desempeño en contextos exigentes',
      icon: Zap,
      value: 85
    }
  ];

  if (activeView === 'user') {
    return <UserDashboard onBack={() => setActiveView('landing')} />;
  }

  if (activeView === 'company') {
    return <CompanyDashboard onBack={() => setActiveView('landing')} />;
  }

  if (activeView === 'matching') {
    return <MatchingSystem onBack={() => setActiveView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TrustWork
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setActiveView('user')}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Para Empleados
              </button>
              <button
                onClick={() => setActiveView('company')}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Para Empresas
              </button>
              <button
                onClick={() => setActiveView('matching')}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Matching
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                Comenzar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-slate-200">
              <button
                onClick={() => { setActiveView('user'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Para Empleados
              </button>
              <button
                onClick={() => { setActiveView('company'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Para Empresas
              </button>
              <button
                onClick={() => { setActiveView('matching'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Matching
              </button>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg">
                Comenzar
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Sistema de Reputación Laboral Verificable</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            El valor está en la calidad medible del trabajo
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            No somos LinkedIn con puntajes ni Glassdoor mejorado. Somos un sistema analítico que interpreta datos, no suma votos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setActiveView('user')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all flex items-center gap-2 group"
            >
              Ver Dashboard de Usuario
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setActiveView('matching')}
              className="bg-white border-2 border-slate-200 text-slate-800 px-8 py-4 rounded-xl hover:shadow-lg transition-all"
            >
              Explorar Matching Inteligente
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/60 backdrop-blur p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-sm text-slate-600">Tipos de Score</div>
            </div>
            <div className="bg-white/60 backdrop-blur p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl mb-1 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-slate-600">Verificado</div>
            </div>
            <div className="bg-white/60 backdrop-blur p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl mb-1 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                IA
              </div>
              <div className="text-sm text-slate-600">Sistema Inferencia</div>
            </div>
            <div className="bg-white/60 backdrop-blur p-6 rounded-2xl border border-slate-200">
              <div className="text-3xl mb-1 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                360°
              </div>
              <div className="text-sm text-slate-600">Evaluación Contextual</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">
              ¿Qué nos hace diferentes?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              No sumamos votos. Interpretamos datos con contexto completo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group"
              >
                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Score Types Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">
              Scores Multidimensionales
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cada empleado tiene múltiples dimensiones de evaluación, no solo un número
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scoreTypes.map((score, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <score.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {score.value}
                  </div>
                </div>
                <h4 className="mb-2">{score.name}</h4>
                <p className="text-sm text-slate-600">{score.description}</p>
                <div className="mt-4 bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${score.value}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl text-white flex flex-col justify-center items-center">
              <Clock className="w-12 h-12 mb-4" />
              <h4 className="mb-2 text-center">Score Temporal</h4>
              <p className="text-sm text-center text-blue-100">
                Tu rendimiento evoluciona con el tiempo y lo medimos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Context System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">
                Sistema de Contexto
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                No todas las evaluaciones valen lo mismo. El contexto importa.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="mb-1">Tipo de relación</div>
                    <p className="text-sm text-slate-600">Jefe directo, par, cliente, evaluador externo</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="mb-1">Duración y frecuencia</div>
                    <p className="text-sm text-slate-600">2 años trabajando juntos vale más que 1 semana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="mb-1">Nivel de responsabilidad</div>
                    <p className="text-sm text-slate-600">El peso de la evaluación depende del contexto laboral</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-3xl text-white">
              <h3 className="text-2xl mb-6">Ejemplo de Ponderación</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Cliente (1 interacción)</span>
                    <span className="text-sm text-blue-300">Peso: 15%</span>
                  </div>
                  <div className="bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-400 h-full rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Par (6 meses)</span>
                    <span className="text-sm text-blue-300">Peso: 45%</span>
                  </div>
                  <div className="bg-slate-800 rounded-full h-2">
                    <div className="bg-purple-400 h-full rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Jefe directo (2 años)</span>
                    <span className="text-sm text-blue-300">Peso: 95%</span>
                  </div>
                  <div className="bg-slate-800 rounded-full h-2">
                    <div className="bg-green-400 h-full rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <Lock className="w-5 h-5 mb-2 text-blue-400" />
                <p className="text-sm text-slate-300">
                  El sistema calcula automáticamente el peso basado en múltiples variables contextuales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Reputation */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">
              Reputación de Empresas
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Las empresas también tienen scores multidimensionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl mb-4">Employee Quality Index</h3>
              <p className="text-slate-600 mb-4">
                Promedio ponderado de la calidad de empleados
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Talent Consistency</span>
                  <span className="text-sm text-blue-600">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Retention Quality</span>
                  <span className="text-sm text-green-600">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Internal Reputation</span>
                  <span className="text-sm text-purple-600">85%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <Star className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl mb-4">Datos para Empresas</h3>
              <p className="text-slate-600 mb-4">
                Acceso a analytics premium del mercado laboral
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Distribución de talento por región</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Nivel promedio por zona</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Densidad y competencia laboral</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Comienza a construir tu reputación laboral verificable
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a la plataforma que valora la calidad medible del trabajo humano
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveView('user')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:shadow-2xl transition-all"
            >
              Crear Perfil de Empleado
            </button>
            <button
              onClick={() => setActiveView('company')}
              className="bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-all"
            >
              Registrar Empresa
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6" />
                <span className="text-lg">TrustWork</span>
              </div>
              <p className="text-sm text-slate-400">
                Sistema de reputación laboral verificable y analítico
              </p>
            </div>

            <div>
              <h4 className="mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => setActiveView('user')}>Para Empleados</button></li>
                <li><button onClick={() => setActiveView('company')}>Para Empresas</button></li>
                <li><button onClick={() => setActiveView('matching')}>Matching</button></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Documentación</li>
                <li>API</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Privacidad</li>
                <li>Términos</li>
                <li>Contacto</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 TrustWork. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
