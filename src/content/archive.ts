import type { Lang } from "./i18n";

type BiText = { en: string; zh: string };
type BiLines = { en: string[]; zh: string[] };

export const archive = {
  education: [
    {
      period: { en: "2023.03 - 2026.02", zh: "2023.03 - 2026.02" } satisfies BiText,
      title: {
        en: "PhD in Imaging Engineering (Art & Tech)",
        zh: "影像工程博士 (Art & Tech)",
      } satisfies BiText,
      org: { en: "Chung-Ang University (Korea)", zh: "韩国中央大学" } satisfies BiText,
    },
    {
      period: { en: "2017.03 - 2021.02", zh: "2017.03 - 2021.02" } satisfies BiText,
      title: { en: "M.S. in Applied Photography", zh: "应用摄影硕士" } satisfies BiText,
      org: { en: "Chung-Ang University (Korea)", zh: "韩国中央大学" } satisfies BiText,
    },
    {
      period: { en: "2012.09 - 2016.06", zh: "2012.09 - 2016.06" } satisfies BiText,
      title: {
        en: "B.S. in Economics and Management",
        zh: "经济管理学士",
      } satisfies BiText,
      org: { en: "Qingdao University of Science and Technology", zh: "青岛科技大学" } satisfies BiText,
    },
  ],
  milestones: [
    {
      org: { en: "ByteDance", zh: "字节跳动" } satisfies BiText,
      role: { en: "Content Creator", zh: "内容创作者" } satisfies BiText,
      highlights: {
        en: ["Grew by 120k followers in 3 months", "20M+ total views"],
        zh: ["3个月增长12万粉丝", "2000万总播放量"],
      } satisfies BiLines,
    },
    {
      org: { en: "KOREATECH", zh: "KOREATECH" } satisfies BiText,
      role: {
        en: "Live & Visual Design (AI Virtual Human)",
        zh: "直播与视觉设计（AI虚拟人技术）",
      } satisfies BiText,
      highlights: {
        en: ["Implemented AI virtual human technology", "$150K+ revenue impact"],
        zh: ["实现 AI 虚拟人技术落地", "AI虚拟人演示 $150K+ 营收"],
      } satisfies BiLines,
    },
    {
      org: { en: "Yap (PGC Team)", zh: "Yap（咖游事业部）" } satisfies BiText,
      role: { en: "PGC Content Editor & Operations", zh: "PGC内容编辑与运营" } satisfies BiText,
      highlights: { en: ["Managed PGC workflows", "Operated a K-wave official account (20k+ followers)"], zh: ["运营2万粉丝韩流公众号"] } satisfies BiLines,
    },
  ],
  honors: {
    awards: {
      en: ["2017 / 2018 Visit Seoul — Photographer Popularity Award (People’s Daily & Seoul City Government)"],
      zh: ["2017/2018 Visit Seoul 摄影人气奖（人民网 & 首尔政府）"],
    } satisfies BiLines,
    languages: {
      en: ["IELTS 6.5", "TOPIK Level 6", "CET-6"],
      zh: ["IELTS 6.5", "TOPIK 6级", "CET-6"],
    } satisfies BiLines,
  },
};

export type ArchiveEducation = (typeof archive.education)[number];
export type ArchiveMilestone = (typeof archive.milestones)[number];

