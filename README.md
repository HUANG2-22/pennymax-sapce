# cnCode — Digital Artist Portfolio

A futuristic, design-forward personal website for **Jinpei Huang (MAX PENNY)**, deployed to **Vercel**. It includes an interactive hero, an archive (education/milestones/honors), a filterable gallery, a Lab section with live GitHub repositories, and a contact area with copy/download actions.

## Architecture (matching your ASCII layout)

Topbar (Logo + Navigation + `EN | 中` toggle)

```text
[ LOGO: JP.H ]  Archive  Gallery  Lab/GitHub  Contact  | [ EN | 中 ]
```

Main sections (in order):

```text
1) Hero / Interaction
2) Archive
3) Gallery (with filters + modal preview)
4) Lab/GitHub (API-backed live repos + publications + toolkits)
5) Contact & Collaborate
6) Footer
```

Corresponding components:

- Topbar: [`src/components/Topbar/Topbar.tsx`](src/components/Topbar/Topbar.tsx)
- Hero: [`src/components/Hero/InteractionHero.tsx`](src/components/Hero/InteractionHero.tsx)
- Archive: [`src/components/Archive/ArchiveSection.tsx`](src/components/Archive/ArchiveSection.tsx)
- Gallery: [`src/components/Gallery/GallerySection.tsx`](src/components/Gallery/GallerySection.tsx)
- Lab: [`src/components/Lab/LabSection.tsx`](src/components/Lab/LabSection.tsx)
- Contact: [`src/components/Contact/ContactSection.tsx`](src/components/Contact/ContactSection.tsx)
- Footer: [`src/components/Footer/Footer.tsx`](src/components/Footer/Footer.tsx)
- Page composition: [`src/app/page.tsx`](src/app/page.tsx)
- i18n toggle + state: [`src/components/i18n/I18nProvider.tsx`](src/components/i18n/I18nProvider.tsx) and [`src/components/i18n/LanguageToggle.tsx`](src/components/i18n/LanguageToggle.tsx)

## i18n (EN + 中 toggle)

- Default language: **English**.
- Language is stored in `localStorage` as `lang` (`en` or `zh`).
- UI strings live in: [`src/content/i18n.ts`](src/content/i18n.ts).
- Content data (Archive/Gallery/Lab/Contact) also includes `en`/`zh` fields in:
  - [`src/content/archive.ts`](src/content/archive.ts)
  - [`src/content/gallery.ts`](src/content/gallery.ts)
  - [`src/content/lab.ts`](src/content/lab.ts)
  - [`src/content/contact.ts`](src/content/contact.ts)

## Content (fully recorded from your prompt)

### 1) Archive

**Education**
- 2023.03 - 2026.02: 影像工程博士 (Art & Tech), 韩国中央大学
- 2017.03 - 2021.02: 应用摄影硕士, 韩国中央大学
- 2012.09 - 2016.06: 经济管理学士, 青岛科技大学

**Career Milestones**
- 字节跳动: 内容创作者, 3个月增长12万粉丝, 2000万总播放量
- KOREATECH: 直播与视觉设计, AI虚拟人技术实现 $150K+ 营收
- Yap (咖游事业部): PGC内容编辑, 运营2万粉丝韩流公众号

**Honors & Skills**
- 奖项: 2017/2018 Visit Seoul 摄影人气奖 (人民网 & 首尔政府)
- 语言: IELTS 6.5 | TOPIK 6级 | CET-6

Source file(s):
- [`src/content/archive.ts`](src/content/archive.ts)

### 2) Gallery

**Filters**
- 全部 | 视频 | 静态摄影 | 新媒体交互

**Core / featured items**
- Samsara (六道轮回)
  - 信息论 + 符号学
  - Category tags: 新媒体交互
- 虚拟直播间场景设计
  - AI 虚拟人演示
  - Category tags: 视频 / 新媒体交互
- 2017-2025 全球展览
  - 跨媒介策展（首尔/北京/巴黎/日本）
  - Category tags: 静态摄影 / 新媒体交互

**Additional highlights**
- Visit Seoul 系列
  - 2017-2025 全球展览（首尔/北京/巴黎/日本）
  - Category tags: 静态摄影
- OpenCV 国际展览
  - 实验影像
  - Category tags: 新媒体交互
- 抖音短视频系列
  - 商业作品
  - Category tags: 视频

Source file(s):
- [`src/content/gallery.ts`](src/content/gallery.ts)

Note: Media previews (video/images) are currently placeholders. Replace them by extending `GalleryItem` with real media URLs/thumbnails and rendering them inside `ProjectModal`.

### 3) Lab / GitHub

**GitHub Live Repositories**
- Default behavior:
  - If `GITHUB_USERNAME` is not set, the page shows curated placeholder repos and an info message.
  - If `GITHUB_USERNAME` is set (and optionally `GITHUB_TOKEN`), it fetches and displays the most recently pushed public repositories.

Backend route:
- [`src/app/api/github/repos/route.ts`](src/app/api/github/repos/route.ts)

**Research Publications**
- Nature Communications: 基于智能体的金属氧化物框架自主设计
- Angewandte Chemie: 渐进式学习引导的单原子催化剂发现
- 论文: 生成式 AI 工具对艺术学生影响的研究

**Toolkits**
- ML/CV
- PyTorch
- TouchDesigner
- Unity/Game Interaction

Source file(s):
- [`src/content/lab.ts`](src/content/lab.ts)

### 4) Contact & Collaborate

Statement (from prompt)
- "如果您对 AI 艺术协同、计算机视觉或数字营销感兴趣，欢迎与我联络。"

Email
- huangjinpei94@gmail.com

Platforms (from prompt)
- Douyin (ID: kpopnd)
- WeChat (handle to be added)
- Instagram (handle to be added)
- LinkedIn (profile to be added)

Locations (from prompt)
- 香港 (访问学者, HKU)
- 首尔 (中央大学)

Buttons
- 下载完整 PDF 简历 (links to `/resume.pdf`)
- 复制邮箱
- 访问 GitHub

Source file(s):
- [`src/content/contact.ts`](src/content/contact.ts)

## Vercel Deployment (and environment variables)

### 1) Project setup

On your local machine:

1. Install Node.js (required)
2. From repo root:
   - `npm install`
   - `npm run dev`

### 2) Vercel

1. Create a new Vercel project from this GitHub repository.
2. Build & Output settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Output: default (Vercel handles Next.js SSR/SSG)
3. Deploy.

### 3) Optional environment variables for Live Repositories

Set these in Vercel Project Settings → Environment Variables:

- `GITHUB_USERNAME` (required for live repos)
- `GITHUB_TOKEN` (optional; helps avoid rate limits)
- `NEXT_PUBLIC_GITHUB_PROFILE_URL` (optional; used by the “Visit GitHub” button)

## Resource Replacement Guide

### Hero background (TouchDesigner / Blender real-time render)

Currently implemented as a procedural canvas “real-time render stream placeholder”:
- [`src/components/Hero/InteractionHero.tsx`](src/components/Hero/InteractionHero.tsx)

To replace with your real background:
- Swap the `<canvas>` section with a `video` element or embed your rendered feed.
- Keep overlay content (name/subtitle/CTA) above it.

### Resume PDF

There is a placeholder file:
- `public/resume.pdf`

Replace it with your real PDF before publishing.

### Gallery media

`ProjectCard` + `ProjectModal` are content-driven from [`src/content/gallery.ts`](src/content/gallery.ts).

To add real preview media:
- Extend `GalleryItem` with a `media` field (e.g. `thumbnailUrl`, `videoUrl`, `imageUrl`).
- Render that media inside `ProjectModal`.

## Notes for future maintenance

- Keep all public content in `src/content/*` to make updates easy.
- If you later want more language coverage, expand `Lang` and the dictionaries in `src/content/i18n.ts`.
