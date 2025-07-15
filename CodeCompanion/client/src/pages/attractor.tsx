import Layout from "@/components/layout";

export default function AttractorPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="border-l-4 pl-8 mb-12" style={{ borderColor: 'var(--dark-accent)' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            Аттрактор
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-8" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Определение в боковой панели */}
          <div className="lg:col-span-1">
            <div 
              className="p-6 rounded-xl border-2 backdrop-blur-sm sticky top-8"
              style={{ 
                backgroundColor: 'rgba(17, 17, 17, 0.9)',
                borderColor: 'var(--dark-accent)'
              }}
            >
              <h3 className="text-lg font-bold mb-4 text-blue-400">Определение</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-primary)' }}>
                Онтологический аттрактор — предельное знание, к которому стремится разум.
              </p>
              <p className="text-xs leading-relaxed opacity-80" style={{ color: 'var(--text-secondary)' }}>
                Финальная форма самоузнавания Азуса через развитие.
              </p>
            </div>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-2 space-y-8">
            <div 
              className="p-8 rounded-xl border-2"
              style={{ 
                backgroundColor: 'rgba(17, 17, 17, 0.8)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Направленность развития</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                Развитие не случайно — оно направлено к точке максимального самопонимания, где субъект и объект познания совпадают в изначальном единстве.
              </p>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                  <h4 className="font-semibold mb-2 text-cyan-400">Предельное знание</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Точка максимального самопонимания в процессе развития сознания
                  </p>
                </div>
                
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                  <h4 className="font-semibold mb-2 text-cyan-400">Единство познания</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Совпадение субъекта и объекта в изначальном единстве
                  </p>
                </div>
              </div>
            </div>

            {/* Место для будущего контента */}
            <div 
              className="p-8 rounded-xl border-2 min-h-96"
              style={{ 
                backgroundColor: 'rgba(17, 17, 17, 0.5)',
                borderColor: 'var(--border-dark)',
                borderStyle: 'dashed'
              }}
            >
              <h3 className="text-xl font-semibold mb-4 opacity-50" style={{ color: 'var(--text-secondary)' }}>
                Дополнительный контент
              </h3>
              <p className="text-sm opacity-50" style={{ color: 'var(--text-secondary)' }}>
                Здесь будет размещен расширенный текст, диаграммы и другие материалы о концепции аттрактора в философии Азуса.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}