import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface AboutProps {
  onContactClick: () => void;
}

export function About({ onContactClick }: AboutProps) {
  const { ref, visible } = useReveal();

  return (
    <section className="py-20 md:py-24 border-t border-stone-200/70">
      <div ref={ref} className={`max-w-6xl mx-auto px-5 md:px-10 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 reveal ${visible ? 'visible' : ''}`}>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4 font-medium">
            Обо мне
          </p>
        </div>
        <div>
          <p className="font-display text-xl md:text-2xl font-normal text-ink leading-[1.4] text-balance">
            Меня зовут Мехрона. Я создаю лендинги для малого бизнеса и частных специалистов.
            Беру на себя разработку сайта, адаптацию под мобильные устройства и запуск.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
            <span>Структура</span>
            <span>→</span>
            <span>Дизайн</span>
            <span>→</span>
            <span>Разработка</span>
            <span>→</span>
            <span>Запуск</span>
          </div>
          <button
            onClick={onContactClick}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors duration-200 link-underline"
          >
            Обсудить проект
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
