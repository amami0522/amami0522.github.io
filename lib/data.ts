export const portfolioData = {
  name: "Your Name",
  role: "Backend Engineer",
  tagline: "スケーラブルで保守性の高いシステムを\n作ることに情熱を持つエンジニア。",
  about:
    "主にGo / Pythonを用いたAPIサーバーの設計・実装を行っています。マイクロサービスアーキテクチャやクラウドインフラ (AWS / GCP) の経験もあります。コードの品質と可読性を重視し、チームでの開発においてもレビューや技術共有を積極的に行っています。",
  stats: { experience: "3+", tools: "15+" },
  skills: {
    Languages: ["Python", "Go", "TypeScript", "SQL"],
    Frameworks: ["FastAPI", "Django", "Gin", "gRPC"],
    Infra: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
    Database: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  },
  experience: [
    {
      period: "2023 — Present",
      role: "Backend Engineer",
      company: "株式会社〇〇",
      desc: "マイクロサービス基盤の設計・構築。Go + gRPC を用いた高スループットAPIの開発。",
    },
    {
      period: "2021 — 2023",
      role: "Software Engineer",
      company: "株式会社△△",
      desc: "Python / FastAPI を用いたRESTful APIの開発。PostgreSQLのパフォーマンスチューニング。",
    },
    {
      period: "2017 — 2021",
      role: "情報工学部 卒業",
      company: "〇〇大学",
      desc: "分散システムと並列処理を専攻。卒業論文：分散キャッシュの一貫性保証手法。",
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "Twitter", href: "https://twitter.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { label: "Mail", href: "mailto:yourname@example.com" },
  ],
};

export const skillColors: Record<
  string,
  { bg: string; accent: string; border: string }
> = {
  Languages: {
    bg: "bg-[#f0ede8]",
    accent: "text-[#a89880]",
    border: "border-[#a89880]/30",
  },
  Frameworks: {
    bg: "bg-[#e8edf5]",
    accent: "text-[#7a94b8]",
    border: "border-[#7a94b8]/30",
  },
  Infra: {
    bg: "bg-[#ede8f5]",
    accent: "text-[#9a80c0]",
    border: "border-[#9a80c0]/30",
  },
  Database: {
    bg: "bg-[#e8f5ee]",
    accent: "text-[#70a88a]",
    border: "border-[#70a88a]/30",
  },
};
