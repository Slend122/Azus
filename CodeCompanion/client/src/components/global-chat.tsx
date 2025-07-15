import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, X, Users } from "lucide-react";

interface Message {
  id: string;
  username: string;
  message: string;
  timestamp: string;
  color: string;
}

const userColors = [
  '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', 
  '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1'
];

export default function GlobalChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      username: 'Философ',
      message: 'Добро пожаловать в обсуждение философии Азуса!',
      timestamp: '15:30',
      color: '#3B82F6'
    },
    {
      id: '2',
      username: 'Искатель',
      message: 'Интересно, как Азус соотносится с восточной философией пустоты?',
      timestamp: '15:32',
      color: '#10B981'
    },
    {
      id: '3',
      username: 'Мыслитель',
      message: 'Я думаю, что концепция различия здесь ключевая. Без различия нет и познания.',
      timestamp: '15:35',
      color: '#F59E0B'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [onlineUsers] = useState(7);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !username.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      username: username,
      message: newMessage,
      timestamp: new Date().toLocaleTimeString('ru-RU', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      color: userColors[Math.floor(Math.random() * userColors.length)]
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleUsernameSubmit = () => {
    if (username.trim()) {
      setShowUsernameInput(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 md:w-96 bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl border-2"
         style={{ 
           backgroundColor: 'rgba(17, 17, 17, 0.95)',
           borderColor: 'var(--dark-accent)',
           maxHeight: '500px'
         }}>
      {/* Header */}
      <div className="p-4 border-b" style={{ borderColor: 'var(--border-dark)' }}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold text-blue-400">Глобальный чат</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">{onlineUsers}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span 
                className="text-sm font-medium"
                style={{ color: msg.color }}
              >
                {msg.username}
              </span>
              <span className="text-xs opacity-60" style={{ color: 'var(--text-secondary)' }}>
                {msg.timestamp}
              </span>
            </div>
            <div className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              {msg.message}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Username Input */}
      {showUsernameInput && (
        <div className="p-4 border-t" style={{ borderColor: 'var(--border-dark)' }}>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Введите имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleUsernameSubmit()}
              className="flex-1 p-2 rounded text-sm border"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)',
                color: 'var(--text-primary)'
              }}
            />
            <button
              onClick={handleUsernameSubmit}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Message Input */}
      <div className="p-4 border-t" style={{ borderColor: 'var(--border-dark)' }}>
        {!username ? (
          <button
            onClick={() => setShowUsernameInput(true)}
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          >
            Присоединиться к чату
          </button>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Напишите сообщение..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 p-2 rounded text-sm border"
              style={{ 
                backgroundColor: 'var(--dark-secondary)',
                borderColor: 'var(--border-dark)',
                color: 'var(--text-primary)'
              }}
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}