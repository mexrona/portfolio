import { processSteps } from '@/data/cases';
import { useReveal } from '@/hooks/useReveal';

export function Process() {
  const { ref, visible } = useReveal();

  return (
    <section id="process" className="py-20 md:py-28 border-t border-stone-200/70">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-2xl mb-12`}>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4 font-medium">
            Процесс
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-ink tracking-tight leading-tight">
            Как проходит работа
          </h2>
        </div>

        <div className="border-t border-stone-200/70">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-[80px_180px_1fr] gap-2 md:gap-10 py-6 md:py-7 border-b border-stone-200/70 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="font-display text-2xl font-normal text-accent">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed max-w-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
