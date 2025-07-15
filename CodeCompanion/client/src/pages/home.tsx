import Layout from "@/components/layout";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight gradient-text subtle-glow">
            Азус
          </h1>
          <p className="text-2xl md:text-3xl leading-relaxed mb-8 font-light" style={{ color: 'var(--text-primary)' }}>
            Онтологическая философия предельного ничто
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed opacity-90" style={{ color: 'var(--text-secondary)' }}>
              Исследуйте концепции различия, аттрактора, бытия и сознания в контексте современной философии.
              Погрузитесь в глубины онтологических вопросов и откройте для себя новые горизонты понимания реальности.
            </p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/azus" className="block">
            <div 
              className="p-8 rounded-xl card-hover border-2 relative overflow-hidden group"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  Азус
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Предельное ничто как основа всего сущего
                </p>
              </div>
            </div>
          </Link>

          <Link href="/difference" className="block">
            <div 
              className="p-8 rounded-xl card-hover border-2 relative overflow-hidden group"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  Разность
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Различие как основа возможности мира
                </p>
              </div>
            </div>
          </Link>

          <Link href="/consciousness" className="block">
            <div 
              className="p-8 rounded-xl card-hover border-2 relative overflow-hidden group"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  Сознание
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Метафора когерентного различия
                </p>
              </div>
            </div>
          </Link>

          <Link href="/manifest" className="block">
            <div 
              className="p-8 rounded-xl card-hover border-2 relative overflow-hidden group"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  Манифест
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Практическое применение философии
                </p>
              </div>
            </div>
          </Link>

          <Link href="/comparison" className="block">
            <div 
              className="p-8 rounded-xl card-hover border-2 relative overflow-hidden group"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  Сравнения
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Связь с другими философиями
                </p>
              </div>
            </div>
          </Link>

          <Link href="/faq" className="block">
            <div 
              className="p-8 rounded-xl card-hover border-2 relative overflow-hidden group"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  Вопросы
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Часто задаваемые вопросы
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
