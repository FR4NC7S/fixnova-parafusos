import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  align?: 'left' | 'center';
  id?: string;
}

export function SectionHeading({ eyebrow, title, text, align = 'left', id }: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`} data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  );
}
