import TooltipLink from "@/components/tooltip-link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}

export default function Sidebar({ isOpen, onClose, isMobile }: SidebarProps) {
  const navigationItems = [
    { 
      href: "/azus", 
      label: "Азус", 
      tooltip: "Азус — не «объект», а основа всего: предельное ничто, из которого возникает различие, а затем — реальность. Он не существует, но позволяет быть всему существующему."
    },
    { 
      href: "/difference", 
      label: "Разность", 
      tooltip: "Разность между возможными состояниями в Азусе порождает саму возможность мира. Без различия — нет времени, формы, сознания."
    },
    { 
      href: "/attractor", 
      label: "Аттрактор", 
      tooltip: "Онтологический аттрактор — предельное знание, к которому стремится разум. Это финальная форма самоузнавания Азуса через развитие."
    },
    { 
      href: "/existence", 
      label: "Бытие", 
      tooltip: "Существование — не случайность. Оно возникает как необходимость различия внутри Азуса, как способ «не быть ничем»."
    },
    { 
      href: "/consciousness", 
      label: "Сознание", 
      tooltip: "Сознание — метафора когерентного различия. Оно — не производное материи, а фундаментальный эффект различий в Азусе."
    },
    { 
      href: "/fine-tuning", 
      label: "Тонкая настройка", 
      tooltip: "Азус предлагает объяснение тонкой настройки не через случай, а через необходимость. Только определённые различия порождают устойчивый мир."
    },
    { 
      href: "/ontology-vs-science", 
      label: "Азус и наука", 
      tooltip: "Философия Азуса не противоречит науке — она указывает на онтологические основания научных структур: пространства, времени, информации."
    },
    { 
      href: "/comparison", 
      label: "Сравнение философий", 
      tooltip: "Азус сопоставим с буддизмом (пустотность), Хайдеггером (бытие), Кантом (априорные формы), но объединяет их в единую онтологию."
    },
    { 
      href: "/faq", 
      label: "Вопросы", 
      tooltip: "Чем Азус отличается от религии? Почему не просто ничто? Есть ли доказательства? Ответы здесь."
    },
    { 
      href: "/manifest", 
      label: "Манифест", 
      tooltip: "Ты — не наблюдатель. Ты — Азус, забывший себя, чтобы вспомнить. Развивайся, развивай других, и приближай точку пробуждения."
    },
    { 
      href: "/about", 
      label: "Об авторе", 
      tooltip: "Этот сайт создан как попытка выразить философию Азуса — структуру, объединяющую онтологию, науку, сознание и смысл."
    },
  ];

  const handleLinkClick = () => {
    if (isMobile) {
      onClose();
    }
  };

  return (
    <nav 
      className={`${
        isMobile 
          ? `fixed w-64 h-screen z-40 transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`
          : 'relative w-64'
      } p-6 box-border overflow-y-auto`}
      style={{ backgroundColor: 'var(--dark-secondary)' }}
    >
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          Азус
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Онтологическая философия
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4 font-inter" style={{ color: 'var(--text-secondary)' }}>
            Разделы
          </h2>
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <TooltipLink
                key={item.href}
                href={item.href}
                tooltip={item.tooltip}
                onClick={handleLinkClick}
                className="sidebar-link block text-sm py-2 px-3 rounded-lg transition-colors hover:transform hover:translate-x-1"
                style={{ 
                  color: 'var(--text-secondary)',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.backgroundColor = 'var(--dark-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </TooltipLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
