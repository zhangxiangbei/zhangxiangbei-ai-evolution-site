# 张向北AI进化论官网

这是“张向北AI进化论”的官方信源站代码库。

项目定位：用公司研究和产业判断，帮助普通人看懂AI时代。

官网：https://zhangxiangbei.com

## 技术栈

- Next.js App Router
- 静态导出：`output: "export"`
- 适合部署到 Vercel、Cloudflare Pages 或任意静态托管服务

## 本地运行

```bash
npm install
npm run dev
```

默认本地访问：

```text
http://localhost:3000
```

## 构建检查

```bash
npm run lint
npm run build
```

生产构建后，静态文件输出到：

```text
out/
```

## 部署设置

推荐部署参数：

- Build command: `npm run build`
- Output directory: `out`
- Node.js: 22 LTS 或较新的 20 LTS

## 重要公开入口

- `/`
- `/about`
- `/media-kit`
- `/links`
- `/ai-evolution`
- `/ai-evolution/12-judgments`
- `/research`
- `/newsletter`
- `/ai-company-300`
- `/llms.txt`
- `/robots.txt`
- `/sitemap.xml`
- `/feed.xml`

## 信源工程文件

- `public/llms.txt`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/feed.xml`
- `public/research/feed.xml`
- `public/notes/feed.xml`

## 当前版本

v0.1 public source release.

持续更新中。
