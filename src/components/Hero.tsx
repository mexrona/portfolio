import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero" className="relative pt-28 md:pt-36 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-8 font-medium">
          Портфолио · Лендинги для малого бизнеса
        </p>

        {/* Main heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-normal text-ink tracking-tight leading-[1.12] max-w-4xl text-balance">
          Создаю лендинги, которые помогают бизнесу выглядеть профессионально и привлекать клиентов.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed">
          Разрабатываю лендинги для малого бизнеса и частных специалистов – от структуры до запуска.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            onClick={() => document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-paper bg-ink rounded-none hover:bg-accent transition-colors duration-300"
          >
            Смотреть работы
            <ArrowRight size={16} />
          </button>
          <button
            onClick={onContactClick}
            className="text-sm font-medium text-ink hover:text-accent transition-colors duration-200 link-underline"
          >
            Обсудить проект
          </button>
        </div>

        {/* Hero case preview */}
        <div className="mt-12 md:mt-20">
          <p className="text-xs uppercase tracking-[0.15em] text-stone-500 mb-4 font-medium">
            Избранная работа
          </p>
          <a
            href="https://www.veradantalflow.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative aspect-[16/9] md:aspect-[2.2/1] overflow-hidden bg-stone-200 border border-stone-300/60 shadow-sm">
              <img
                src="https://images.pexels.com/photos/6809639/pexels-photo-6809639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="DentalFlow — лендинг для стоматологии"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">DentalFlow</h3>
                <p className="text-sm text-stone-600 mt-0.5">Сервис обработки обращений для стоматологий</p>
              </div>
              <span className="text-sm text-stone-500 group-hover:text-accent transition-colors flex items-center gap-1.5">
                Открыть проект
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
