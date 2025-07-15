import Layout from "@/components/layout";

export default function OntologyVsSciencePage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="border-l-4 pl-8 mb-12" style={{ borderColor: 'var(--dark-accent)' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            Азус и наука
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-8" />
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
              <h3 className="text-lg font-bold mb-4 text-indigo-400">Определение</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-primary)' }}>
                Философия Азуса не противоречит науке — она указывает на онтологические основания научных структур.
              </p>
              <p className="text-xs leading-relaxed opacity-80" style={{ color: 'var(--text-secondary)' }}>
                Пространство, время, информация.
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
              <h2 className="text-2xl font-bold mb-6 text-indigo-400">Основания науки</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                Наука описывает, как устроен мир различий. Азус объясняет, почему различия вообще возможны и необходимы.
              </p>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                  <h4 className="font-semibold mb-2 text-purple-400">Онтологические основания</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Азус как фундамент научных структур пространства, времени и информации
                  </p>
                </div>
                
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                  <h4 className="font-semibold mb-2 text-purple-400">Мир различий</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Наука изучает проявления различий, философия объясняет их возможность
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
                Здесь будет размещен расширенный текст, научные примеры и другие материалы о связи Азуса с современной наукой.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}