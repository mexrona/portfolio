import { Send, Mail, X } from 'lucide-react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Contact({ isOpen, onClose }: ContactProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-ink/30 animate-fade-in" />

      <div
        className="relative w-full max-w-md bg-paper border border-stone-200 p-8 md:p-10 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-stone-400 hover:text-ink transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h2 className="font-display text-2xl font-semibold text-ink mb-3">
          Давайте обсудим проект
        </h2>
        <p className="text-stone-600 leading-relaxed mb-8">
          Напишите мне — обсудим вашу нишу, текущий процесс и где теряются клиенты.
          Предложу решение и сроки.
        </p>

        <div className="space-y-px bg-stone-200/70 border border-stone-200/70">
          <a
            href="https://t.me/mexronatuichieva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-paper hover:bg-stone-50 transition-colors group"
          >
            <div className="w-10 h-10 flex items-center justify-center text-accent">
              <Send size={18} />
            </div>
            <div className="flex-1">
              <div className="text-ink font-medium text-sm">Telegram</div>
              <div className="text-xs text-stone-500">Быстрый ответ в течение дня</div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-stone-300 group-hover:text-accent group-hover:translate-x-1 transition-all">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="mailto:tuichievamexrona@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-paper hover:bg-stone-50 transition-colors group"
          >
            <div className="w-10 h-10 flex items-center justify-center text-accent">
              <Mail size={18} />
            </div>
            <div className="flex-1">
              <div className="text-ink font-medium text-sm">Email</div>
              <div className="text-xs text-stone-500">Для подробных писем и брифов</div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-stone-300 group-hover:text-accent group-hover:translate-x-1 transition-all">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="https://max.ru/u/f9LHodD0cOJyunZVaawaP-ZfrCD3N-vxztrg7AqMHt7S4GDrGZB0Oe5Jezw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-paper hover:bg-stone-50 transition-colors group"
          >
            <div className="w-10 h-10 flex items-center justify-center text-accent">
              <Send size={18} />
            </div>
            <div className="flex-1">
              <div className="text-ink font-medium text-sm">MAX</div>
              <div className="text-xs text-stone-500">Дополнительный способ связаться</div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-stone-300 group-hover:text-accent group-hover:translate-x-1 transition-all">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-xs text-stone-500 text-center">
          Обычно отвечаю в течение дня. Первая консультация — бесплатно.
        </p>
      </div>
    </div>
  );
}
