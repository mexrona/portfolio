import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/cases';
import { useReveal } from '@/hooks/useReveal';

export function FAQ() {
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-stone-200/70">
      <div className="max-w-3xl mx-auto px-5 md:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-10`}>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4 font-medium">
            Вопросы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-ink tracking-tight leading-tight">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`border-t border-stone-200/70 ${i === faqItems.length - 1 ? 'border-b' : ''} reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base md:text-lg font-medium text-ink">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-stone-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40' : 'max-h-0'}`}>
                <p className="pb-5 text-sm md:text-base text-stone-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
