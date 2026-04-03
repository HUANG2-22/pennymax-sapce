export type GalleryCategory = "video" | "photo" | "interaction" | "exhibitions";

type BiString = { en: string; zh: string };
type BiStringArray = { en: string[]; zh: string[] };

export type GalleryLink = {
  label: BiString;
  url: string;
};

export type GalleryMedia =
  | {
      type: "video";
      src: string;
      poster?: string;
    }
  | {
      /** Bilibili web player (iframe); use https URL */
      type: "bilibili";
      embedSrc: string;
    }
  | {
      type: "images";
      images: { src: string; alt: BiString }[];
    };

export type InteractionModalExtra =
  | { layout: "single"; src: string }
  | { layout: "gif"; src: string }
  | { layout: "row3"; srcs: readonly [string, string, string]; lightSurface?: boolean }
  | { layout: "pair"; srcs: readonly [string, string]; lightSurface?: boolean };

export type InteractionDemo = {
  url: string;
  linkZh: string;
  linkEn: string;
  extras?: InteractionModalExtra;
};

export type GalleryItem = {
  id: string;
  title: BiString;
  subtitle: BiString;
  categories: GalleryCategory[];
  description: BiString;
  details: BiStringArray;
  coverImage?: string;
  media?: GalleryMedia[];
  links?: GalleryLink[];
  interactionDemo?: InteractionDemo;
};

export const gallery = {
  filters: [
    { key: "video" as const, label: { en: "Video", zh: "视频" } },
    { key: "photo" as const, label: { en: "Photography", zh: "图像" } },
    { key: "interaction" as const, label: { en: "New Media Interaction", zh: "新媒体交互" } },
    { key: "exhibitions" as const, label: { en: "Exhibitions", zh: "展览经历" } },
  ],
  photographyImages: [
    "/gallery/image/1.jpg",
    "/gallery/image/2.jpg",
    "/gallery/image/3.jpg",
    "/gallery/image/4.jpg",
    "/gallery/image/5.jpg",
    "/gallery/image/6.jpg",
    "/gallery/image/7.jpg",
    "/gallery/image/8.jpg",
    "/gallery/image/9.jpg",
  ],
  exhibitions: {
    logoImage: "/gallery/image/museum%20logos.png",
    entries: [
      "2017 | AUPE 亚洲大学摄影展（韩国首尔）",
      "2017 | “中国人在首尔”摄影展（韩国首尔）",
      "2018 | “中国人在首尔”摄影展（韩国首尔）",
      "2023 | Open CV 国际展览（韩国首尔）",
      "2023 | 静待花开媒体艺术国际展（中国北京 798悦美术馆）",
      "2023 | 全州国际摄影节（韩国全州）",
      "2023 | AIIF 尖端影像人工智能国际展（韩国首尔）",
      "2023 | Looking for Ms. Gwanhee 艺术家团体展（韩国首尔）",
      "2023 | 首届元宇宙国际艺术展（中国天津）",
      "2023 | Galerie 67 艺术展（法国巴黎）",
      "2024 | Gallery KAZE 艺术展（日本福冈）",
      "2024 | 第七届青岛国际当代艺术双年展平行展（中国青岛）",
      "2024 | Voices 2024, CICA 美术馆（韩国首尔）",
      "2024 | “生、死、爱”国际评审艺术大赛, Art Collide（美国）",
      "2025 | “生、死、爱”国际评审艺术大赛, Art Collide（美国）",
    ],
  },
  items: [
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
      id: "global-exhibitions-2017-2025",
      title: { en: "2017–2025 Global Exhibitions", zh: "2017-2025 全球展览" },
      subtitle: { en: "Curation across mediums", zh: "跨媒介策展" },
      categories: ["photo"],
      description: {
        en: "Curated works presented across cities—connecting imaging, interaction, and audience experience.",
        zh: "在多个城市呈现的策展作品：连接影像、交互与观众体验。",
      },
      details: {
        en: ["Multi-city curation", "Audience-focused interaction layer"],
        zh: ["多城市策展", "面向观众的交互层"],
      },
    },
    {
      id: "neobody",
      title: { en: "Neobody", zh: "Neobody" },
      subtitle: { en: "AIGC Sci‑Fi Short Film (2026)", zh: "AIGC 科幻短片" },
      categories: ["video"],
      description: {
        zh: "本片由科幻世界 IP 小说《2039 脑机接口》改编，系 2026「感映未来」· AIGC 单元参赛作品。故事设定在 2039 年的近未来，讲述生物科技巨头 Neobody CEO 埃端（Ethan）通过植入脑芯片控制数字义肢，试图超越人类极限却引发意识共享副作用的历程。影片深入探讨技术进步背后的自我意识与道德边界冲突。本作由 Midjourney、Runway Gen-2、Pika 等 AI 工具协同制作，探索了 AIGC 在科幻叙事中的视觉表现力。",
        en: "Adapted from the Science Fiction World IP novel “2039: Brain‑Computer Interface,” this film is a featured entry for the 2026 “Sensory Future” AIGC category. Set in 2039, it follows Ethan, the CEO of biotech giant NeoBody, as he pushes human limits through BCI technology—only to trigger unintended collective consciousness. Produced with a collaborative AI workflow (Midjourney, Runway Gen‑2, Pika), it explores self‑identity and technological ethics through sci‑fi cinema.",
      },
      details: {
        zh: [
          "改编自《2039 脑机接口》",
          "AI 协同制作：Midjourney / Runway Gen‑2 / Pika",
          "主题：自我意识 × 技术伦理边界",
        ],
        en: [
          "Adapted from “2039: Brain‑Computer Interface”",
          "AI workflow: Midjourney / Runway Gen‑2 / Pika",
          "Themes: identity × techno‑ethics",
        ],
      },
      coverImage: "/gallery/video/neobody_cover.png",
      media: [
        {
          type: "bilibili",
          embedSrc:
            "https://player.bilibili.com/player.html?isOutside=true&aid=116338584457517&bvid=BV1ZQ9PBrEz4&cid=37195352471&p=1",
        },
      ],
      links: [],
    },
    {
      id: "the-girl-and-fish",
      title: { zh: "少女与鱼", en: "Fish Can't Live Without Water" },
      subtitle: { zh: "AI 辅助动画制作管线实验短片", en: "Experimental short film (AI-driven pipeline)" },
      categories: ["video"],
      description: {
        zh: "本作品是一部AIGC实验性短片, 创作于2023年，旨在探索AI赋能下的动画制作流程，以及探讨现代人的多重面具（Persona）与虚拟生存场域。本作构建了一套全流程 AI 自动化管线：利用 Isaac AI 生成剧本与分镜脚本，通过 Stable Diffusion (LoRA) 进行角色一致性训练与美术风格定制，并结合 Runway Gen-2 及多种集成式 AI 视频生成工具完成分层式动态创作。这种AI赋能下的非线性实证创作，打破了传统的线性制作流程，极大地优化了传统动画的制作成本与周期。同时，在立意层面，该影片通过少女与鱼的双视角切换，反思了数字化时代下个体对于“家”与“身份”的定义。该研究过程及实证结果已于2024年发表于Moving Image & Technology 期刊（\"Animation production pipeline using AI research.\" Moving Image & Technology (MINT) 4, no. 2 (2024): 6-13. ）。",
        en: "This experimental AIGC short film explores an AI-empowered animation production pipeline while examining the \"Persona\" and virtual habitats of modern individuals. The project establishes a full-process automated AI pipeline: utilizing Isaac AI for screenplay and storyboard generation, Stable Diffusion (LoRA) for character consistency and artistic style customization, and Runway Gen-2 alongside integrated AI video synthesis tools for layered dynamic creation. This non-linear empirical approach breaks traditional linear workflows, significantly optimizing production costs and cycles. Conceptually, the film reflects on the definitions of \"home\" and \"identity\" in the digital age through alternating perspectives between a girl and a fish. This research and its empirical findings were published in the journal Moving Image & Technology (MINT), Vol. 4, No. 2, 2024.",
      },
      details: {
        zh: [
          "研究驱动（KCI）× 制作管线实验",
          "Isaac AI / Stable Diffusion (LoRA) / Runway Gen‑2",
          "主题：Persona、虚拟栖居与身份",
        ],
        en: [
          "Research-backed (KCI) pipeline experiment",
          "Isaac AI / Stable Diffusion (LoRA) / Runway Gen‑2",
          "Themes: persona, virtual habitat, identity",
        ],
      },
      coverImage: "/gallery/video/girl_fish_concept.png",
      media: [
        {
          type: "bilibili",
          embedSrc:
            "https://player.bilibili.com/player.html?isOutside=true&aid=116338567813245&bvid=BV1HW9NBDES4&cid=37195350923&p=1",
        },
      ],
      links: [],
    },
    {
      id: "here-there-i",
      title: { zh: "此地，彼地-I", en: "Here, There-I" },
      subtitle: { zh: "城市身份与地理数据视觉重建", en: "Urban identity and geographic data reconstruction" },
      categories: ["video"],
      description: {
        zh: "2023 年，我作为代表参与了首尔市冠岳区的“寻找关熙氏”艺术家团体展。本作品作为“寻找关熙氏”团体展的参展作品之一，获得了冠岳文化财团的优秀文化内容支援。作品聚焦于城市身份的探索与地理数据的多模态数字化视觉重建。通过爬取 Google Earth 的地理数据，并结合 GIS（地理信息系统）与 3D 建模工具，将枯燥的公共地理数据转译为具有油画质感的 3D 视觉景观。这不仅是一次艺术实践，更是一次关于城市公共数据数字化转录与叙事的深度尝试。",
        en: "Presented as part of the 2023 \"Looking for Ms. Gwanhee\" group exhibition in Gwanak-gu, Seoul, this project was recognized and supported by the Gwanak Cultural Foundation as outstanding cultural content. The work focuses on exploring urban identity and the multimodal digital reconstruction of geographic data. By integrating Google Earth data with GIS and 3D modeling tools, public datasets are transformed into 3D visual representations with an oil-painting texture. This project serves as both an artistic practice and a digital transcription of urban public data, redefining the intersection of technology and city narratives.",
      },
      details: {
        zh: [
          "冠岳文化财团优秀文化内容支援",
          "Google Earth 数据 × GIS × 3D 建模",
          "主题：城市身份与公共数据叙事",
        ],
        en: [
          "Supported by Gwanak Cultural Foundation",
          "Google Earth data × GIS × 3D modeling",
          "Theme: urban identity and public-data narrative",
        ],
      },
      coverImage: "/gallery/video/Map%20Cover.png",
      media: [
        {
          type: "bilibili",
          embedSrc:
            "https://player.bilibili.com/player.html?isOutside=true&aid=116338584457487&bvid=BV1ZQ9PBrEBQ&cid=37195550095&p=1",
        },
      ],
      links: [],
    },
    {
      id: "digital-paper-cutting",
      title: { zh: "中国数字剪纸", en: "Digital Chinese Paper Cutting" },
      subtitle: { zh: "生成式艺术中的传统文化再生", en: "Regenerating traditional symbols with generative art" },
      categories: ["video"],
      description: {
        zh: "该作品于 2023 年在韩国全州国际摄影节展出。在生成式艺术的视阈下，作品将剪纸与京剧这两项中国传统文化符号进行了深层融合与再生。通过将京剧脸谱作为原始输入，并根据戏曲声腔的实时动态变化进行算法推演，自动化生成具有全新文化语境的 2D 剪纸图像。作品利用新媒体艺术范式，拓展传统文化在数字空间的维度与影响力。",
        en: "Exhibited at the 2023 Jeonju International Photo Festival in Korea, this work explores the deep fusion and regeneration of traditional Chinese symbols—Paper Cutting and Peking Opera—within the framework of generative art. Using Peking Opera facial masks as initial inputs, the project employs algorithms that respond to the real-time dynamic changes of operatic vocalizations to automatically generate 2D paper-cutting imagery in a new cultural context. This work utilizes new media art paradigms to expand the dimension and influence of traditional heritage within the digital realm.",
      },
      details: {
        zh: [
          "2023 全州国际摄影节展出",
          "京剧脸谱输入 × 声腔驱动算法",
          "2D 数字剪纸图像自动生成",
        ],
        en: [
          "Exhibited at Jeonju International Photo Festival 2023",
          "Peking Opera masks as inputs with voice-driven algorithms",
          "Automated 2D digital paper-cut generation",
        ],
      },
      coverImage: "/gallery/video/Digital%20Chinese%20Paper%20Cutting%20Cover.png",
      media: [
        {
          type: "bilibili",
          embedSrc:
            "https://player.bilibili.com/player.html?isOutside=true&aid=116338584589595&bvid=BV1BQ9PBkE7C&cid=37195482716&p=1",
        },
      ],
      links: [],
    },
    {
      id: "meta-voice",
      title: { zh: "元语", en: "Meta-Voice" },
      subtitle: { zh: "数字人+声音可视化实验", en: "Visualizing meta-human dialog sonic signals" },
      categories: ["video"],
      description: {
        zh: "Meta-Voice 是一项旨在将数字人（Meta-human）对话过程中的声音信号进行视觉化呈现的实验作品。作品利用 ChatGPT 结合特定 Prompt 生成两个数字人关于家乡、友谊与爱情的对话脚本，并使用 Midjourney 构建其视觉形象。在展示形式上，通过投影映射（Projection Mapping）将数字人面部投射在实体模特上，并利用 Processing 编程捕捉声音的节奏、振幅与噪声属性，将其转化为如同花朵般不断演变的几何图形，实现了跨媒介的感官转译。",
        en: "Meta-Voice is an experimental work designed to visualize the sound signals generated during conversations between Meta-humans. Utilizing ChatGPT with specific prompts, the project creates dialogue between two virtual entities regarding themes of hometown, friendship, and love, while their visual identities are crafted via Midjourney. The installation employs projection mapping to cast Meta-human faces onto physical mannequins. Simultaneously, custom Processing code captures the rhythm, volume, and noise of the audio, transforming these sonic attributes into evolving flower-like geometric patterns, achieving a seamless cross-modal sensory translation.",
      },
      details: {
        zh: [
          "ChatGPT Prompt 对话脚本生成",
          "Projection Mapping × 实体模特",
          "Processing 实时音画转译",
        ],
        en: [
          "Dialogue scripting with ChatGPT prompts",
          "Projection mapping on physical mannequins",
          "Real-time sonic-to-visual translation in Processing",
        ],
      },
      coverImage: "/gallery/video/Meta-Voice%20Cover.png",
      media: [
        {
          type: "bilibili",
          embedSrc:
            "https://player.bilibili.com/player.html?isOutside=true&aid=116338584525314&bvid=BV17Q9PBkEvf&cid=37195615308&p=1",
        },
      ],
      links: [],
    },
    {
      id: "stick-man",
      title: { zh: "线条人", en: "Stick Man" },
      subtitle: { zh: "视觉与声音双模态生成互动", en: "Dual-modal generative interaction of sight and sound" },
      categories: ["video"],
      description: {
        zh: "线条人（Stick Man）是一项探索视觉与声音双模态转录的生成式互动项目。该作品将体验者的肢体动作数据作为核心输入，通过弦函数的数学变换与重置，将其转化为全新的声音信号。同时，声音的实时波动会直接导致画面中线条的偏移与重组。作品通过这种非线性的交互反馈方式，让体验者在肢体律动、声音生成与视觉变化之间建立起一种即时的、共觉的感官连接。",
        en: "Stick Man is a generative music and visual interaction project that explores the dual-modal transcription of sight and sound. The project captures the participant's body movements as input data, which is then transformed into new audio signals through string function transformations and resets. Simultaneously, the fluctuations in sound drive the displacement and reorganization of lines within the visual frame. This project creates an immediate, synesthetic connection between physical movement, sound generation, and visual dynamics through non-linear interactive feedback.",
      },
      details: {
        zh: [
          "肢体动作数据驱动声音生成",
          "弦函数变换与重置机制",
          "声音波动实时驱动画面线条重组",
        ],
        en: [
          "Body-motion data drives sound generation",
          "String-function transformations and resets",
          "Sound fluctuations reorganize line visuals in real time",
        ],
      },
      coverImage: "/gallery/video/Stick%20Man%20Cover.png",
      media: [
        {
          type: "bilibili",
          embedSrc:
            "https://player.bilibili.com/player.html?isOutside=true&aid=116338567745939&bvid=BV1AW9NBDEFq&cid=37195680791&p=1",
        },
      ],
      links: [],
    },
    {
      id: "online-ink",
      title: { zh: "灵动山水，实时交互", en: "Online Ink Painting: Real-time Generative Brushwork" },
      subtitle: { zh: "p5.js 网页端交互山水", en: "Web generative ink with p5.js" },
      categories: ["interaction"],
      description: {
        zh: "本项目是一个基于 p5.js 开发的网页端交互式山水转绘项目。作品通过算法模拟画笔在宣纸上的流转、渗透与浓淡变化，用户可以通过鼠标或触控在数字画布上进行实时创作。系统捕捉笔触的速度与压力，赋予数字线条以东方书法特有的韵律感。这不仅是一次对传统美学的数字化转译，更是在网页环境下对生成式艺术（Generative Art）交互边界的探索。",
        en: "This project is a web-based interactive ink painting system developed using p5.js. The work algorithmically simulates the diffusion, osmosis, and shading effects of traditional Chinese ink on rice paper, allowing users to create in real-time via mouse or touch input. By capturing the speed and pressure of strokes, the system imbues digital lines with the unique rhythm of Eastern calligraphy. It serves as both a digital translation of traditional aesthetics and an exploration of the interactive boundaries of Generative Art within a web environment.",
      },
      details: {
        zh: ["p5.js 实时笔触", "速度/压力驱动的线条韵律", "网页端生成式交互"],
        en: ["Real-time strokes in p5.js", "Speed/pressure-driven rhythm", "Generative interaction on the web"],
      },
      coverImage: "/gallery/video/online%20ink%20cover.jpg",
      links: [],
      interactionDemo: {
        url: "https://huang2-22.github.io/online-ink-painting/",
        linkZh: "因页面限制，点击可跳转体验互动界面。",
        linkEn:
          "Due to page constraints, please click to jump to the interactive display interface.",
        extras: { layout: "single", src: "/gallery/video/00.png" },
      },
    },
    {
      id: "cloud-museum",
      title: { zh: "3D 点云博物展陈系统", en: "3D Cloud Museum: Automated Virtual Exhibition" },
      subtitle: { zh: "Three.js 可交互文物虚拟展陈", en: "Interactive 3D cultural heritage space" },
      categories: ["interaction"],
      description: {
        zh: "本项目利用 Three.js 技术构建了一个可交互的中国文物 3D 虚拟展览空间。作品的核心在于其“自动化展陈”逻辑，能够根据输入的手势或鼠标来动态切换三维点云模型并进行多角度观赏。用户可以以第一人称视角在云端展厅中自由穿梭，体验沉浸式的观展过程。该项目探索数字孪生时代下，艺术展览从实体向虚拟场域迁移的叙事可能性与技术管线。",
        en: "Built with Three.js, this project features an interactive 3D virtual exhibition space. The core innovation lies in its \"automated curation\" logic, which dynamically generates 3D architectural environments and arranges artworks based on input datasets. Users can navigate the cloud-based gallery through a first-person perspective, experiencing an immersive viewing process. The project explores the narrative possibilities and technical pipelines for migrating art exhibitions from physical to virtual domains in the age of Digital Twins.",
      },
      details: {
        zh: ["Three.js 3D 空间", "自动化展陈逻辑", "第一人称观展体验"],
        en: ["Three.js environment", "Automated curation logic", "First-person navigation"],
      },
      coverImage: "/gallery/video/cloud_museum_cover.jpg",
      links: [],
      interactionDemo: {
        url: "https://huang2-22.github.io/3D-Cloud-Museum-Auto/",
        linkZh: "因页面限制，点击可跳转体验互动界面。",
        linkEn:
          "Due to page constraints, please click to jump to the interactive display interface.",
        extras: { layout: "gif", src: "/gallery/video/1.gif" },
      },
    },
    {
      id: "dulong-tattoo",
      title: { zh: "消失的图腾：独龙族纹面文化", en: "Vanishing Marks: Facial Tattoo Reconstruction via Face Mesh" },
      subtitle: { zh: "MediaPipe Face Mesh × AR 纹面映射", en: "AR facial tattoo mapping with MediaPipe" },
      categories: ["interaction"],
      description: {
        zh: "本项目是一项结合了文化遗产保护与前沿计算机视觉技术的交互作品，来将正在消失的独龙族纹面图腾进行数字化转录和重建。利用 MediaPipe Face Mesh 技术，作品实现了对中国独龙族濒危纹面图案的实时增强现实（AR）映射。通过精准捕捉人脸的 468 个特征点，将数字化的纹面贴图无缝融合于用户面部，使用户能通过实时交互感知这一古老民族的视觉遗产。作品通过数字媒介考古的方式，旨在引起社会对少数民族濒危文化传统保护的关注。",
        en: "This project is an interactive study combining cultural heritage preservation with cutting-edge computer vision. Utilizing MediaPipe Face Mesh, the work achieves real-time Augmented Reality (AR) mapping of endangered facial tattoo patterns from the Dulong people of China. By precisely tracking 468 facial landmarks, digital tattoo textures are seamlessly integrated onto the user's face, allowing them to perceive this ancient visual heritage through live interaction. Through the lens of digital media archaeology, this project aims to raise awareness for the protection of endangered minority traditions.",
      },
      details: {
        zh: ["MediaPipe Face Mesh", "468 特征点追踪", "实时 AR 纹面映射"],
        en: ["MediaPipe Face Mesh", "468 landmark tracking", "Live AR tattoo overlay"],
      },
      coverImage: "/gallery/video/dulong_tattoo_cover.jpg",
      links: [],
      interactionDemo: {
        url: "https://huang2-22.github.io/Facial-tatoo-Dulong-lface-mesh-texture/",
        linkZh: "因页面限制，点击可跳转体验互动界面。",
        linkEn:
          "Due to page constraints, please click to jump to the interactive display interface.",
        extras: {
          layout: "row3",
          srcs: ["/gallery/video/2.jpg", "/gallery/video/3.GIF", "/gallery/video/4.jpg"],
          lightSurface: true,
        },
      },
    },
    {
      id: "memoji-flat",
      title: { zh: "表情包镜像", en: "Emoji Project" },
      subtitle: { zh: "Emoji 作为独立视觉语言", en: "Emoji as visual language" },
      categories: ["interaction"],
      description: {
        zh: "这是一个探索数字时代下表情符号（Emoji）与人类世界映射关系的互动项目。作品将表情包从单纯的即时通讯工具中剥离，转化为一种独立的视觉语言与交互媒介。通过网页端的实时交互，用户可以以非线性、扁平化的方式重新排列和触发这些高度浓缩的情感符号，观察数字语言如何重构我们的沟通语境。该项目旨在反思在高度数字化的社交环境中，标准化符号对个体细腻情感的捕捉与消解。",
        en: "This interactive project explores the mapping relationship between Emojis and human emotions in the digital age. By stripping Emojis of their role as simple IM tools and transforming them into independent visual languages and interactive media, the work allows users to rearrange and trigger these condensed emotional symbols in a non-linear, flat interface. The project aims to reflect on how standardized digital symbols both capture and dissolve nuanced individual emotions within a highly digitized social environment, examining the reconstruction of communication through the lens of symbolic interaction.",
      },
      details: {
        zh: ["网页端实时交互", "非线性扁平界面", "符号与情感映射"],
        en: ["Live web interaction", "Non-linear flat UI", "Symbol–emotion mapping"],
      },
      coverImage: "/gallery/video/memoji_project_cover.png",
      links: [],
      interactionDemo: {
        url: "https://huang2-22.github.io/MEMOJI-PROJECT-FLAT/",
        linkZh: "因页面限制，点击可跳转体验互动界面。",
        linkEn:
          "Due to page constraints, please click to jump to the interactive display interface.",
        extras: {
          layout: "pair",
          srcs: ["/gallery/video/5.jpg", "/gallery/video/6.png"],
          lightSurface: true,
        },
      },
    },
  ] satisfies GalleryItem[],
};

