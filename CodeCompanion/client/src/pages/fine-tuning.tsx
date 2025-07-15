import Layout from "@/components/layout";

export default function FineTuningPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="border-l-4 pl-8 mb-12" style={{ borderColor: 'var(--dark-accent)' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            Тонкая настройка
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-8" />
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
              <h3 className="text-lg font-bold mb-4 text-emerald-400">Определение</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-primary)' }}>
                Азус предлагает объяснение тонкой настройки не через случай, а через необходимость.
              </p>
              <p className="text-xs leading-relaxed opacity-80" style={{ color: 'var(--text-secondary)' }}>
                Только определённые различия порождают устойчивый мир.
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
              <h2 className="text-2xl font-bold mb-6 text-emerald-400">Структура различий</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                Константы вселенной не случайны — они отражают структуру различий, которая делает возможным существование сложных систем.
              </p>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                  <h4 className="font-semibold mb-2 text-teal-400">Необходимость констант</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Физические константы как отражение онтологической структуры различий
                  </p>
                </div>
                
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                  <h4 className="font-semibold mb-2 text-teal-400">Устойчивость мира</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Условия, при которых возможно существование сложных систем
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
                Здесь будет размещен расширенный текст, научные данные и другие материалы о тонкой настройке вселенной.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}