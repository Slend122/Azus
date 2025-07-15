import Layout from "@/components/layout";

export default function ConsciousnessPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="border-l-4 pl-8 mb-12" style={{ borderColor: 'var(--dark-accent)' }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            Сознание
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mb-8" />
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
              Сознание — метафора когерентного различия. Оно — не производное материи, а фундаментальный эффект различий в Азусе.
            </p>
            
            <div className="pl-6 border-l-2" style={{ borderColor: 'var(--text-secondary)' }}>
              <p className="text-lg leading-relaxed opacity-90" style={{ color: 'var(--text-secondary)' }}>
                Сознание не возникает из мозга, но является способом, которым Азус узнаёт себя через структуры различия.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="p-6 rounded-lg border"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-green-400">
                Природа сознания
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Метафора когерентного различия, а не материальный продукт
              </p>
            </div>
            
            <div 
              className="p-6 rounded-lg border"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)'
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-teal-400">
                Самоузнавание
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Способ, которым Азус узнаёт себя через структуры различия
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}