function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      <div className="flex items-center justify-between">
        <h2>
          <strong>
            <a href={`#${id}`} className="text-xl">
              {title}
            </a>
          </strong>
        </h2>
        {subtitle && (
          <span className="select-none hover:animate-bounce print:hidden">
            {subtitle}
          </span>
        )}
      </div>
      <hr className="mb-2 border-2 border-t border-black" />
      <div className={className}>{children}</div>
    </section>
  );
}

export { Section };
