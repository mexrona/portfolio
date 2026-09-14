interface FooterProps {
  onContactClick: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="border-t border-stone-200/70">
      {/* CTA */}
      <div className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-normal text-ink tracking-tight text-balance">
            Готовы обсудить проект?
          </h2>
          {/* <p className="mt-4 text-stone-600 leading-relaxed">
            Запуск – за 1 день.
          </p> */}
          <button
            onClick={onContactClick}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-paper bg-ink hover:bg-accent transition-colors duration-300"
          >
            Обсудить проект
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-200/70 py-8">
        <div className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-base font-semibold text-ink">Мехрона</p>
          <p className="text-xs text-stone-500">
            © 2026 · Лендинги для малого бизнеса
          </p>
        </div>
      </div>
    </footer>
  );
}
