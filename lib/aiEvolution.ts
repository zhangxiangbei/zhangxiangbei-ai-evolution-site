import fs from "node:fs";
import path from "node:path";

import { absoluteUrl, site } from "@/lib/site";

const contentDir = path.join(process.cwd(), "content", "ai-evolution");

export type AiEvolutionArticle = {
  number: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  coreClaim: string;
  logicStage: string;
  keywords: string[];
  quickTakeaways: string[];
  questions: string[];
  keyConclusions: string[];
  datePublished: string;
  dateModified: string;
  version: string;
  author: string;
  readingTime: number;
  references: string[];
  relatedArticles: string[];
  wechatUrl: string;
  featured: boolean;
  draft: boolean;
  coverImage: string;
  ogImage: string;
  sourceUrl: string;
  sourceTitle: string;
  body: string;
};

export type MarkdownHeading = {
  id: string;
  level: number;
  text: string;
};

export const aiEvolutionCollectionPath = "/ai-evolution/12-judgments";

export const logicChain = [
  "智能变了",
  "软件变了",
  "财富分配变了",
  "基础设施变了",
  "商业逻辑变了",
  "产业周期变了",
  "公司组织变了",
  "管理范式变了",
  "个体能力变了",
  "协作接口变了",
  "社会分化变了",
  "文明叙事变了"
];

function parseFrontmatterValue(value: string): unknown {
  const trimmed = value.trim();

  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^\d+$/.test(trimmed)) return Number(trimmed);

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("[") && trimmed.endsWith("]"))
  ) {
    return JSON.parse(trimmed);
  }

  return trimmed;
}

function parseMarkdownFile(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("AI Evolution article is missing frontmatter.");
  }

  const frontmatter = match[1]
    .split("\n")
    .filter(Boolean)
    .reduce<Record<string, unknown>>((acc, line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) return acc;

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1);
      acc[key] = parseFrontmatterValue(value);
      return acc;
    }, {});

  return {
    frontmatter,
    body: match[2].trim()
  };
}

function articleFromFile(filePath: string): AiEvolutionArticle {
  const raw = fs.readFileSync(filePath, "utf8");
  const { frontmatter, body } = parseMarkdownFile(raw);

  return {
    ...(frontmatter as Omit<AiEvolutionArticle, "body">),
    body
  } as AiEvolutionArticle;
}

export function getAllAiEvolutionArticles() {
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => articleFromFile(path.join(contentDir, file)))
    .filter((article) => !article.draft)
    .sort((a, b) => a.number - b.number);
}

export function getAiEvolutionArticle(slug: string) {
  return getAllAiEvolutionArticles().find((article) => article.slug === slug);
}

export function getAdjacentAiEvolutionArticles(slug: string) {
  const articles = getAllAiEvolutionArticles();
  const index = articles.findIndex((article) => article.slug === slug);

  return {
    previous: index > 0 ? articles[index - 1] : null,
    next: index >= 0 && index < articles.length - 1 ? articles[index + 1] : null
  };
}

export function getAiEvolutionArticlePath(article: Pick<AiEvolutionArticle, "slug">) {
  return `/ai-evolution/${article.slug}`;
}

export function getAiEvolutionArticleUrl(article: Pick<AiEvolutionArticle, "slug">) {
  return absoluteUrl(getAiEvolutionArticlePath(article));
}

export function headingId(text: string) {
  let hash = 0;
  for (const char of text) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return `h-${hash.toString(36)}`;
}

export function extractMarkdownHeadings(markdown: string): MarkdownHeading[] {
  return [...markdown.matchAll(/^(#{2,4})\s+(.+)$/gm)].map((match) => ({
    id: headingId(match[2].trim()),
    level: match[1].length,
    text: match[2].trim()
  }));
}

export function formatArticleNumber(number: number) {
  return String(number).padStart(2, "0");
}

export function createCitation(article: AiEvolutionArticle) {
  return `${site.founder}：《${article.title}》，${site.name}，V${article.version}，${article.datePublished}，${getAiEvolutionArticleUrl(article)}。`;
}

