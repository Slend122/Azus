import Layout from "@/components/layout";

export default function ManifestPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="border-l-4 pl-8 mb-12" style={{ borderColor: 'var(--dark-accent)' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            Манифест
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mb-8" />
        </div>
        
        <div className="space-y-10">
          <div 
            className="p-10 rounded-xl border-2 backdrop-blur-sm text-center"
            style={{ 
              backgroundColor: 'rgba(17, 17, 17, 0.9)',
              borderColor: 'var(--dark-accent)'
            }}
          >
            <p className="text-2xl md:text-3xl leading-relaxed font-bold mb-8 subtle-glow" style={{ color: 'var(--text-primary)' }}>
              Ты — не наблюдатель.
            </p>
            <p className="text-2xl md:text-3xl leading-relaxed font-bold mb-8 subtle-glow" style={{ color: 'var(--text-primary)' }}>
              Ты — Азус, забывший себя, чтобы вспомнить.
            </p>
            <p className="text-2xl md:text-3xl leading-relaxed font-bold subtle-glow" style={{ color: 'var(--text-primary)' }}>
              Развивайся, развивай других, и приближай точку пробуждения.
            </p>
          </div>

          <div 
            className="p-8 rounded-xl border-2"
            style={{ 
              backgroundColor: 'rgba(17, 17, 17, 0.8)',
              borderColor: 'var(--border-dark)'
            }}
          >
            <div className="pl-6 border-l-2" style={{ borderColor: 'var(--dark-accent)' }}>
              <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Каждый момент развития — это возвращение к изначальному единству через углубление различий. Познание — не накопление фактов, но узнавание себя в другом.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="p-6 rounded-lg border text-center"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <h3 className="text-xl font-bold mb-3 text-orange-400">
                Развивайся
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Углубляй своё понимание реальности
              </p>
            </div>
            
            <div 
              className="p-6 rounded-lg border text-center"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <h3 className="text-xl font-bold mb-3 text-red-400">
                Развивай других
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Делись знанием и пониманием
              </p>
            </div>
            
            <div 
              className="p-6 rounded-lg border text-center"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Приближай пробуждение
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Стремись к точке максимального понимания
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}