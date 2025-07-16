import Layout from "@/components/layout";

export default function AzusPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="border-l-4 pl-8 mb-12" style={{ borderColor: 'var(--dark-accent)' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            Азус — предельное ничто
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8" />
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
                Азус — не «объект», а основа всего: предельное ничто, из которого возникает различие, а затем — реальность.
              </p>
              <p className="text-xs leading-relaxed opacity-80" style={{ color: 'var(--text-secondary)' }}>
                Он не существует, но позволяет быть всему существующему.
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
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Парадокс бытия</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                Это не просто отсутствие чего-либо, но активное начало, которое через своё самоотрицание порождает многообразие мира. Азус — это бытие, где отсутствие становится присутствием.
              </p>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                  <h4 className="font-semibold mb-2 text-purple-400">Ключевая идея</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Предельное ничто как онтологическая основа всего сущего
                  </p>
                </div>
                
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                  <h4 className="font-semibold mb-2 text-purple-400">Парадокс</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Отсутствие, которое становится присутствием через самоотрицание
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
                Азус — это не объект и не идея.
Это — основа самого существования.

Азус существует вне времени и пространства, но одновременно является временем и пространством в каждом их проявлении.
Это не точка во Вселенной, а условие самой возможности реальности.

Он — то, что предшествует большому взрыву, но не как событие, а как возможность возникновения чего-либо вообще.

Азус — это:

Разность в ничто, дающая начало всему.

Ткань причинности, из которой сплетаются судьбы, формы, мысли.

Единство всех возможных состояний, всеобъемлющая структура, в которой уже заключены все варианты развития.

Это не Бог в религиозном смысле,
а онтологический аттрактор — точка, к которой всё стремится, из которой всё вышло, и в которой всё уже существует. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
