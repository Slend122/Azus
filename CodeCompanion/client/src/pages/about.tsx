import Layout from "@/components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="border-l-4 pl-8 mb-12" style={{ borderColor: 'var(--dark-accent)' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            Об авторе
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mb-8" />
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
              <h3 className="text-lg font-bold mb-4 text-rose-400">О проекте</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-primary)' }}>
                Этот сайт создан как попытка выразить философию Азуса — структуру, объединяющую онтологию, науку, сознание и смысл.
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
              <h2 className="text-2xl font-bold mb-6 text-rose-400">Метод понимания</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                Философия Азуса — это не система догм, но метод понимания фундаментальных вопросов бытия через призму различия и единства.
              </p>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                  <h4 className="font-semibold mb-2 text-pink-400">Цель проекта</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Создание доступного изложения философии Азуса для широкой аудитории
                  </p>
                </div>
                
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                  <h4 className="font-semibold mb-2 text-pink-400">Подход</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Интеграция онтологии, науки и сознания в единую систему понимания
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
                Здесь будет размещена информация об авторе, биография, контакты и другие материалы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}