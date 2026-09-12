import { cases } from '@/data/cases';
import { useReveal } from '@/hooks/useReveal';

export function Testimonials() {
  const { ref, visible } = useReveal();

  const realTestimonials = cases
    .filter((c) => c.testimonial)
    .map((c) => ({ ...c.testimonial!, project: c.title }));

  const extraTestimonials = [
    {
      text: 'Раньше записи вели в блокноте, часть клиентов терялась. Теперь заявка приходит сразу в Telegram — не нужно перезванивать вечером.',
      author: 'Салон-партнёр',
      role: 'Студия красоты',
      project: 'BeautyTime',
    },
    {
      text: 'Клиенты теперь записываются сами через сайт — не нужно каждому объяснять по телефону. Заявка приходит сразу, подтверждение за 15 минут.',
      author: 'Сервис-партнёр',
      role: 'Автосервис',
      project: 'AutoFix',
    },
  ];

  const all = [...realTestimonials, ...extraTestimonials];

  return (
    <section id="testimonials" className="py-20 md:py-28 border-t border-stone-200/70">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-12`}>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4 font-medium">
            Отзывы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-ink tracking-tight leading-tight">
            Что говорят о проектах
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          {all.map((testimonial, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <blockquote className="font-display text-xl md:text-2xl font-normal text-ink leading-[1.4] text-balance">
                «{testimonial.text}»
              </blockquote>
              <div className="mt-4 text-sm text-stone-600">
                <span className="text-ink font-medium">{testimonial.author}</span>
                <span className="mx-2">—</span>
                <span>{testimonial.role}</span>
                <span className="mx-2 text-stone-300">·</span>
                <span className="text-stone-500">{testimonial.project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
