export type GalleryCategory = "video" | "photo" | "interaction";

type BiString = { en: string; zh: string };
type BiStringArray = { en: string[]; zh: string[] };

export type GalleryItem = {
  id: string;
  title: BiString;
  subtitle: BiString;
  categories: GalleryCategory[];
  description: BiString;
  details: BiStringArray;
};

export const gallery = {
  filters: [
    { key: "all" as const, label: { en: "All", zh: "全部" } },
    { key: "video" as const, label: { en: "Video", zh: "视频" } },
    { key: "photo" as const, label: { en: "Static Photography", zh: "静态摄影" } },
    { key: "interaction" as const, label: { en: "New Media Interaction", zh: "新媒体交互" } },
  ],
  items: [
    {
      id: "samsara",
      title: { en: "Samsara (Six Paths of Reincarnation)", zh: "Samsara（六道轮回）" },
      subtitle: { en: "Information Theory + Semiotics", zh: "（信息论 + 符号学）" },
      categories: ["interaction"],
      description: {
        en: "An art system mapping symbols into motion—where meaning becomes a controllable signal.",
        zh: "将符号映射为运动的艺术系统：让意义变成可控信号。",
      },
      details: {
        en: [
          "Signal-to-symbol encoding",
          "Interactive visual grammar",
          "Real-time aesthetic experiments",
        ],
        zh: ["信号到符号的编码", "可交互视觉语法", "实时审美实验"],
      },
    },
    {
      id: "virtual-liveroom",
      title: { en: "Virtual Live Room Scene Design", zh: "虚拟直播间场景设计" },
      subtitle: { en: "AI Virtual Human Demo", zh: "（AI 虚拟人演示）" },
      categories: ["video", "interaction"],
      description: {
        en: "A future-styled virtual set built for convincing performance and fast iteration.",
        zh: "面向可信表演与快速迭代的未来感虚拟舞台设计。",
      },
      details: {
        en: ["Scene choreography", "Performance pipeline", "Rapid production iteration"],
        zh: ["场景调度", "表演管线", "快速生产迭代"],
      },
    },
    {
      id: "visit-seoul",
      title: { en: "Visit Seoul Series", zh: "Visit Seoul 系列" },
      subtitle: { en: "Global Exhibition Photography (2017–2025)", zh: "全球展览摄影（2017–2025）" },
      categories: ["photo"],
      description: {
        en: "A long-form photographic journey across Seoul and beyond—built around atmosphere, rhythm, and memory.",
        zh: "跨越首尔与更多城市的长线摄影旅程，以氛围、节奏与记忆为核心。",
      },
      details: {
        en: ["Seoul / Beijing / Paris / Japan", "Curation-oriented storytelling"],
        zh: ["首尔/北京/巴黎/日本", "策展叙事导向"],
      },
    },
    {
      id: "opencv-exhibit",
      title: { en: "OpenCV International Exhibition", zh: "OpenCV 国际展览" },
      subtitle: { en: "Experimental Imaging", zh: "（实验影像）" },
      categories: ["interaction"],
      description: {
        en: "Computer vision meets aesthetics—turning perception into generative outcomes.",
        zh: "计算机视觉与审美融合：把感知转化为生成结果。",
      },
      details: {
        en: ["Vision-based composition", "Generative visual logic"],
        zh: ["基于视觉的构图", "生成式视觉逻辑"],
      },
    },
    {
      id: "douyin-commercial",
      title: { en: "Douyin Short Video Series", zh: "抖音短视频系列" },
      subtitle: { en: "Commercial Works", zh: "（商业作品）" },
      categories: ["video"],
      description: {
        en: "A production-focused series blending motion design and data-driven storytelling.",
        zh: "以制作为导向，将动效设计与数据驱动叙事融合。",
      },
      details: {
        en: ["Short-form storytelling", "Production iteration loops"],
        zh: ["短内容叙事", "制作迭代循环"],
      },
    },
    {
      id: "global-exhibitions-2017-2025",
      title: { en: "2017–2025 Global Exhibitions", zh: "2017-2025 全球展览" },
      subtitle: { en: "Curation across mediums", zh: "跨媒介策展" },
      categories: ["photo", "interaction"],
      description: {
        en: "Curated works presented across cities—connecting imaging, interaction, and audience experience.",
        zh: "在多个城市呈现的策展作品：连接影像、交互与观众体验。",
      },
      details: {
        en: ["Multi-city curation", "Audience-focused interaction layer"],
        zh: ["多城市策展", "面向观众的交互层"],
      },
    },
  ] satisfies GalleryItem[],
};

