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
      coursework: {
        zh: "—相关课程：机器学习 (ML)、实时数字艺术、数字技术与当代艺术、人工智能媒体艺术、游戏交互、人工智能与创作、人工智能素养等",
        en: "Relevant Coursework: Machine Learning (ML), Real-Time Digital Art; Special Lecture on Digital Technology Art & Contemporary Art; Artificial Intelligence Media Art; Game Interaction; Artificial Intelligence & Art Creation; Artificial Intelligence Literacy;",
      } satisfies BiText,
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
        en: [
          "Produced 24 videos in 3 months; follower growth exceeded 120k+",
          "Single-video peak views exceeded 5M+; cumulative total views exceeded 20M+",
        ],
        zh: [
          "3个月创作24部视频，粉丝增长12万+",
          "单部视频最高播放量达500万+，累计总播放量2000万+",
        ],
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
      role: { en: "Head of PGC Department", zh: "PGC部门负责人" } satisfies BiText,
      highlights: {
        en: [
          "Led the PGC team; official account operations & editorial writing",
          "168 articles published; peak single-article reads exceeded 130k+",
        ],
        zh: [
          "PGC部门负责人，公众号运营及撰稿",
          "累计撰写 168 篇文章，单篇阅读量 13 万+",
        ],
      } satisfies BiLines,
    },
  ],
  honors: {
    awards: {
      en: [
        "2017 Visit Seoul Photography Competition — Popularity Award (jointly presented by People’s Daily Online and the Seoul Metropolitan Government)",
        "2018 Visit Seoul Photography Competition — Popularity Award (jointly presented by People’s Daily Online and the Seoul Metropolitan Government)",
        "2023 Chung-Ang University Outstanding International Student Full Scholarship",
        "2024 Chung-Ang University Outstanding International Student Scholarship",
      ],
      zh: [
        "2017年「Visit Seoul」摄影大赛人气奖（中国人民网与首尔市政府联合颁发）",
        "2018年「Visit Seoul」摄影大赛人气奖（中国人民网与首尔市政府联合颁发）",
        "2023 韩国中央大学优秀国际学生全额奖学金",
        "2024 韩国中央大学优秀国际学生奖学金",
      ],
    } satisfies BiLines,
    languages: {
      en: ["IELTS 6.5", "TOPIK Level 6", "CET-6"],
      zh: ["IELTS 6.5", "TOPIK 6级", "CET-6"],
    } satisfies BiLines,
  },
};

export type ArchiveEducation = (typeof archive.education)[number];
export type ArchiveMilestone = (typeof archive.milestones)[number];

