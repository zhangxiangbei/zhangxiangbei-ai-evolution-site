import Link from "next/link";
import type { ReactNode } from "react";

import { headingId } from "@/lib/aiEvolution";

type MarkdownRendererProps = {
  markdown: string;
};

function renderInline(text: string) {
  const parts: ReactNode[] = [];
  const inlinePattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = inlinePattern.exec(text))) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const boldText = match[1];
    const label = match[2];
    const href = match[3];
    const key = `${match.index}-${match[0]}`;

    if (boldText) {
      parts.push(<strong key={key}>{boldText}</strong>);
      lastIndex = match.index + match[0].length;
      continue;
    }

    if (href.startsWith("/")) {
      parts.push(
        <Link href={href} key={key}>
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a href={href} key={key} rel="noreferrer" target="_blank">
          {label}
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? parts : text;
}

function isBlockStart(line: string) {
  return (
    /^#{2,4}\s+/.test(line) ||
    /^---+$/.test(line) ||
    /^>\s?/.test(line) ||
    /^[-*]\s+/.test(line) ||
    /^\d+\.\s+/.test(line)
  );
}

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  const lines = markdown.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (/^---+$/.test(line)) {
      nodes.push(<hr key={`hr-${index}`} />);
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = headingId(text);
      const HeadingTag = `h${level}` as "h2" | "h3" | "h4";

      nodes.push(
        <HeadingTag id={id} key={id}>
          {renderInline(text)}
        </HeadingTag>
      );
      index += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quoteLines: string[] = [];
      while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      nodes.push(
        <blockquote key={`quote-${index}`}>
          {quoteLines.map((quote) => (
            <p key={quote}>{renderInline(quote)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
        index += 1;
      }
      nodes.push(
        <ul key={`ul-${index}`}>
          {items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      nodes.push(
        <ol key={`ol-${index}`}>
          {items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    const paragraphLines: string[] = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index].trim())) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    const paragraph = paragraphLines.join("");
    nodes.push(<p key={`p-${index}-${paragraph.slice(0, 16)}`}>{renderInline(paragraph)}</p>);
  }

  return <>{nodes}</>;
}
