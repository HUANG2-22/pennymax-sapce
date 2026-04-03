export type Lang = "en" | "zh";

export const LANGS: Lang[] = ["en", "zh"];

export const ui = {
  en: {
    nav: {
      archive: "About Me",
      gallery: "Gallery",
      lab: "Lab/GitHub",
      contact: "Contact",
    },
    languageToggle: { enLabel: "EN", zhLabel: "中" },
    hero: {
      title: "JINPEI HUANG (Max Penny)",
      subtitle:
        "Imaging Engineering· Digital Media Art· Visual Encoding· AIGC",
      cta: "Scroll to Explore",
      atmosphere:
        "Where pixels drift like dust in light, algorithms steer like constellations overhead.",
    },
    archive: {
      title: "Archive",
      education: "Education",
      milestones: "Content Creation Experience",
      honors: "Honors & Language Skills",
    },
    gallery: {
      title: "Gallery",
      filters: {
        all: "All",
        video: "Video",
        photo: "Photography",
        interaction: "New Media Interaction",
      },
      modal: {
        viewDetails: "View details",
      },
    },
    lab: {
      title: "Lab/GitHub",
      subLine: "GitHub repositories· Research publications",
      liveRepos: "GitHub Repositories",
      publications: "Research Publications",
      githubUnavailable:
        "Could not load repository list. Check your connection or try again later.",
    },
    contact: {
      title: "Contact & Collaborate",
      statement:
        "If you're interested in imaging engineering, digital media art, visual encoding, or AIGC, please reach out by email. Thank you.",
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
      archive: "履历(About Me)",
      gallery: "项目作品集(Gallery)",
      lab: "跨界实验室(Lab/GitHub)",
      contact: "联系与交流(Contact)",
    },
    languageToggle: { enLabel: "EN", zhLabel: "中" },
    hero: {
      title: "JINPEI HUANG (Max Penny)",
      subtitle: "影像工程· 数字媒体艺术· 视觉编码· AIGC",
      cta: "向下探索",
      atmosphere: "像素如微尘起舞，算法似星辰引路。",
    },
    archive: {
      title: "履历",
      education: "教育背景",
      milestones: "内容创作经历",
      honors: "荣誉与语言技能",
    },
    gallery: {
      title: "项目作品集",
      filters: {
        all: "全部",
        video: "视频",
        photo: "图像",
        interaction: "新媒体交互",
      },
      modal: {
        viewDetails: "查看详情",
      },
    },
    lab: {
      title: "跨界实验室",
      subLine: "GitHub 代码库· 科研成果",
      liveRepos: "GitHub 代码库",
      publications: "科研成果",
      githubUnavailable: "暂时无法加载仓库列表，请稍后重试。",
    },
    contact: {
      title: "联系与交流",
      statement:
        "如果您对影像工程、数字媒体艺术、视觉编码、AIGC感兴趣，欢迎致信，感谢您。",
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

