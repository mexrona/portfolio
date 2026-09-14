import { useState } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Check,
  Clock,
  TrendingUp,
  Users,
  Quote,
} from 'lucide-react';
import { cases, type CaseStudy } from '@/data/cases';
import { useReveal } from '@/hooks/useReveal';

function CaseBlock({
  caseData,
  index,
  onSelect,
}: {
  caseData: CaseStudy;
  index: number;
  onSelect: () => void;
}) {
  const { ref, visible } = useReveal();
  const isReversed = index % 2 === 1;
  const isFullWidth = index === 2;

  if (isFullWidth) {
    return (
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <a
          href={caseData.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative aspect-[16/9] md:aspect-[2.2/1] overflow-hidden bg-stone-200 border border-stone-300/60 shadow-sm">
            <img
              src={caseData.image}
              alt={caseData.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </a>
        <div className="mt-6 grid md:grid-cols-[2fr_1fr] gap-6 items-end">
          <div>
            <p className="text-sm text-stone-500 mb-2">{caseData.forWhom}</p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-2">
              {caseData.title}
            </h3>
            <p className="text-stone-700 max-w-xl">
              {caseData.description}
            </p>
            {/* <p className="text-stone-700 max-w-xl" style={{ marginTop: '1.5rem', fontStyle: 'italic', textDecoration: 'underline', textDecorationThickness: '1px', fontWeight: '500'
             }}>
              {caseData.priceAndTimeDescription}
            </p> */}
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <button
              onClick={onSelect}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors"
              style={{ cursor: 'default', fontWeight: '700', fontSize: '1.2rem' }}
            >
              {caseData.priceAndTime}
              {/* <ArrowUpRight size={16} /> */}
            </button>
            <a
              href={caseData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-accent transition-colors"
            >
              <ExternalLink size={14} />
              Открыть сайт
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className={isReversed ? 'md:order-2' : ''}>
          <a
            href={caseData.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-[4/3] overflow-hidden bg-stone-200 border border-stone-300/60 shadow-sm"
          >
            <img
              src={caseData.image}
              alt={caseData.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </a>
        </div>

        {/* Content */}
        <div className={isReversed ? 'md:order-1' : ''}>
          <p className="text-sm text-stone-500 mb-2">{caseData.forWhom}</p>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-3">
            {caseData.title}
          </h3>
          <p className="text-stone-700 leading-relaxed mb-6 max-w-md">
            {caseData.description}
          </p>
          {/* <p className="text-stone-700 leading-relaxed mb-6 max-w-md" style={{ fontStyle: 'italic', textDecoration: 'underline', textDecorationThickness: '1px', fontWeight: '500' }}>
            {caseData.priceAndTimeDescription}
          </p> */ }
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button
              onClick={onSelect}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors"
              style={{ cursor: 'default', fontWeight: '700', fontSize: '1.2rem' }}
            >
              {caseData.priceAndTime}
              {/* <ArrowUpRight size={16} /> */}
            </button>
            <a
              href={caseData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-accent transition-colors"
            >
              <ExternalLink size={14} />
              Открыть сайт
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseModal({ caseData, onClose }: { caseData: CaseStudy; onClose: () => void; }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-0 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/40 animate-fade-in" />

      <div
        className="relative w-full max-w-3xl my-0 md:my-8 bg-paper border border-stone-200 overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative h-40 md:h-56 overflow-hidden bg-stone-200">
          <img src={caseData.image} alt={caseData.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/90 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-paper/80 text-ink hover:bg-paper transition-colors"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-6">
            <p className="text-xs text-stone-500 mb-1">{caseData.category}</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">{caseData.title}</h2>
          </div>
        </div>

        <div className="p-6 md:p-10 space-y-8">
          {/* Problem */}
          <section>
            <h3 className="text-xs uppercase tracking-[0.15em] text-stone-500 mb-3 font-medium">Какую проблему решает</h3>
            <p className="text-stone-700 leading-relaxed">{caseData.problem}</p>
          </section>

          {/* Before */}
          <section>
            <h3 className="text-xs uppercase tracking-[0.15em] text-stone-500 mb-3 font-medium">Как было до</h3>
            <p className="text-stone-700 leading-relaxed">{caseData.before}</p>
          </section>

          {/* Solution */}
          <section>
            <h3 className="text-xs uppercase tracking-[0.15em] text-stone-500 mb-3 font-medium">Что сделал</h3>
            <p className="text-stone-700 leading-relaxed mb-4">{caseData.solution}</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {caseData.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-stone-600">
                  <Check size={14} className="mt-0.5 text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Results */}
          <section className="grid sm:grid-cols-2 gap-px bg-stone-200/70 border border-stone-200/70">
            <div className="bg-paper p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-stone-500" />
                <span className="text-xs uppercase tracking-wider text-stone-500">Время</span>
              </div>
              <p className="text-ink text-sm leading-relaxed">{caseData.timeSaved}</p>
            </div>
            <div className="bg-paper p-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-stone-500" />
                <span className="text-xs uppercase tracking-wider text-stone-500">Выгода</span>
              </div>
              <div className="font-display text-xl font-semibold text-ink mb-1">{caseData.moneyValue}</div>
              <p className="text-xs text-stone-500 leading-relaxed">{caseData.moneyDescription}</p>
            </div>
          </section>

          {/* Metrics */}
          <section>
            <h3 className="text-xs uppercase tracking-[0.15em] text-stone-500 mb-4 font-medium">Результат в цифрах</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200/70 border border-stone-200/70">
              {caseData.metrics.map((metric) => (
                <div key={metric.label} className="bg-paper p-4">
                  <div className="font-display text-lg font-semibold text-ink">{metric.value}</div>
                  <div className="text-xs text-stone-500 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Target audience */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Users size={16} className="text-stone-500" />
              <h3 className="text-xs uppercase tracking-[0.15em] text-stone-500 font-medium">Кому подходит решение</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseData.targetAudience.map((audience) => (
                <span key={audience} className="px-3.5 py-1.5 text-sm text-stone-600 border border-stone-200">
                  {audience}
                </span>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          {caseData.testimonial && (
            <section className="border-l-2 border-accent pl-6">
              <Quote size={20} className="text-stone-300 mb-3" />
              <p className="font-display text-lg text-ink leading-relaxed italic mb-3">
                «{caseData.testimonial.text}»
              </p>
              <p className="text-sm text-stone-500">
                {caseData.testimonial.author} — {caseData.testimonial.role}
              </p>
            </section>
          )}

          {/* Actions */}
          <section className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-stone-200/70">
            <a
              href={caseData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-paper bg-ink hover:bg-accent transition-colors"
            >
              <ExternalLink size={15} />
              Открыть проект
            </a>
            <button
              onClick={onClose}
              className="text-sm text-stone-500 hover:text-ink transition-colors"
            >
              Закрыть
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const { ref, visible } = useReveal();

  return (
    <section id="cases" className="py-20 md:py-28 border-t border-stone-200/70">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-2xl mb-12`}>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4 font-medium">
            Работы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-ink tracking-tight leading-tight">
            Мои работы
          </h2>
          {/*<p className="mt-5 text-stone-600 leading-relaxed">
            Нажмите «Открыть сайт», чтобы увидеть проект целиком.
          </p> */}     
        </div>

        <div className="space-y-16 md:space-y-24">
          {cases.map((caseData, index) => (
            <CaseBlock
              key={caseData.id}
              caseData={caseData}
              index={index}
              onSelect={() => setSelectedCase(caseData)}
            />
          ))}
        </div>
      </div>

      {/*selectedCase && (
        <CaseModal caseData={selectedCase} onClose={() => setSelectedCase(null)} />
      )*/}
    </section>
  );
}
