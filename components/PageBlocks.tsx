import Link from "next/link";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <div className="section-intro">{children}</div> : null}
    </div>
  );
}

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function LinkButton({ href, children, variant = "secondary" }: LinkButtonProps) {
  return (
    <Link className={`button button-${variant}`} href={href}>
      {children}
    </Link>
  );
}

type NumberedListProps = {
  items: Array<{ title: string; text: string }>;
};

export function NumberedList({ items }: NumberedListProps) {
  return (
    <ol className="numbered-list">
      {items.map((item) => (
        <li key={item.title}>
          <strong>{item.title}</strong>
          <p>{item.text}</p>
        </li>
      ))}
    </ol>
  );
}

type SimpleListProps = {
  items: string[];
};

export function SimpleList({ items }: SimpleListProps) {
  return (
    <ul className="simple-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
