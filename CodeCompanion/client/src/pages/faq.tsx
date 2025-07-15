import Layout from "@/components/layout";

export default function FaqPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="border-l-4 pl-8 mb-12" style={{ borderColor: 'var(--dark-accent)' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            Частые вопросы
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mb-8" />
        </div>
        
        <div className="space-y-8">
          <div 
            className="p-8 rounded-xl border-2 backdrop-blur-sm"
            style={{ 
              backgroundColor: 'rgba(17, 17, 17, 0.8)',
              borderColor: 'var(--dark-accent)'
            }}
          >
            <p className="text-xl leading-relaxed font-medium mb-6" style={{ color: 'var(--text-primary)' }}>
              Чем Азус отличается от религии? Почему не просто ничто? Есть ли доказательства? Ответы здесь.
            </p>
          </div>
          
          <div 
            className="p-8 rounded-xl border-2"
            style={{ 
              backgroundColor: 'rgba(17, 17, 17, 0.8)',
              borderColor: 'var(--border-dark)'
            }}
          >
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              Основные вопросы:
            </h3>
            <div className="space-y-6">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                <h4 className="font-semibold mb-2 text-amber-400">Как Азус соотносится с современной физикой?</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Азус не противоречит физике, но указывает на её онтологические основания
                </p>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                <h4 className="font-semibold mb-2 text-amber-400">Является ли это религиозной концепцией?</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Это философская система, не требующая веры, но основанная на рациональном анализе
                </p>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--dark-secondary)' }}>
                <h4 className="font-semibold mb-2 text-amber-400">Какие практические следствия имеет эта философия?</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Изменение отношения к развитию, познанию и взаимодействию с реальностью
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}