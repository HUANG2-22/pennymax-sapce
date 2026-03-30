export type Lang = "en" | "zh";

export const LANGS: Lang[] = ["en", "zh"];

export const ui = {
  en: {
    nav: {
      archive: "Archive",
      gallery: "Gallery",
      lab: "Lab/GitHub",
      contact: "Contact",
    },
    languageToggle: { enLabel: "EN", zhLabel: "中" },
    hero: {
      title: "JINPEI HUANG (MAX PENNY)",
      subtitle: "PhD in Imaging Engineering & Digital Artist",
      cta: "Scroll to Explore",
    },
    archive: {
      title: "Archive",
      education: "Education",
      milestones: "Career Milestones",
      honors: "Honors & Skills",
    },
    gallery: {
      title: "Gallery",
      filters: {
        all: "All",
        video: "Video",
        photo: "Static Photography",
        interaction: "New Media Interaction",
      },
      modal: {
        viewDetails: "View details",
      },
    },
    lab: {
      title: "Lab/GitHub",
      liveRepos: "Live Repositories",
      publications: "Research Publications",
      toolkits: "Toolkits",
      githubUnavailable:
        "Live repositories require `GITHUB_USERNAME` (and optionally `GITHUB_TOKEN`) to be set at build/runtime.",
    },
    contact: {
      title: "Contact & Collaborate",
      statement:
        "If you're interested in AI art collaboration, computer vision, or digital marketing, feel free to reach out.",
      copyEmail: "Copy email",
      copied: "Email copied",
      downloadResume: "Download full PDF resume",
      emailAria: "Email address",
      github: "Visit GitHub",
    },
    footer:
      "© 2026 Jinpei Huang | Powered by Vibe Coding | Affective Engineering",
  },
  zh: {
    nav: {
      archive: "履历(Archive)",
      gallery: "项目作品集(Gallery)",
      lab: "跨界实验室(Lab/GitHub)",
      contact: "联系与交流",
    },
    languageToggle: { enLabel: "EN", zhLabel: "中" },
    hero: {
      title: "JINPEI HUANG (MAX PENNY)",
      subtitle: "影像工程博士 & 数字艺术家",
      cta: "向下探索",
    },
    archive: {
      title: "履历",
      education: "教育背景",
      milestones: "职业里程碑",
      honors: "荣誉与语言",
    },
    gallery: {
      title: "项目作品集",
      filters: {
        all: "全部",
        video: "视频",
        photo: "静态摄影",
        interaction: "新媒体交互",
      },
      modal: {
        viewDetails: "查看详情",
      },
    },
    lab: {
      title: "跨界实验室",
      liveRepos: "GitHub 实时联动",
      publications: "科研成果",
      toolkits: "技术栈",
      githubUnavailable:
        "需要设置 `GITHUB_USERNAME`（可选 `GITHUB_TOKEN`）后才能显示实时仓库。",
    },
    contact: {
      title: "联系与交流",
      statement:
        "如果您对 AI 艺术协同、计算机视觉或数字营销感兴趣，欢迎与我联络。",
      copyEmail: "复制邮箱",
      copied: "已复制邮箱",
      downloadResume: "下载完整 PDF 简历",
      emailAria: "电子邮件地址",
      github: "访问 GitHub",
    },
    footer:
      "© 2026 Jinpei Huang | Powered by Vibe Coding | Affective Engineering",
  },
} as const;

