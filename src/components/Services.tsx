import { serviceDescription} from '@/data/cases';
import { useReveal } from '@/hooks/useReveal';

export function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="py-20 md:py-28 border-t border-stone-200/70">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-2xl mb-12`}>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4 font-medium">
            Услуга
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-ink tracking-tight leading-tight">
            Лендинг под ключ
          </h2>
        </div>

        <div className="space-y-px">
          {serviceDescription.map((description, i) => (
            <div
              key={description.title}
              className={`grid md:grid-cols-[200px_1fr] gap-2 md:gap-12 py-7 md:py-8 border-t border-stone-200/70 ${
                i === serviceDescription.length - 1 ? 'border-b' : ''
              } reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h3 className="font-display text-xl font-semibold text-ink leading-tight">
                {description.title}
              </h3>
              <div>
                <p className="text-stone-700 leading-relaxed mb-4 max-w-xl">
                  {description.description}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {description.features.map((feature) => (
                    <span key={feature} className="text-sm text-stone-500">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
