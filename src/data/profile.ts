// 보여주기용 더미 데이터 — 실제 내용으로 교체 예정

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "홍길동",
  bio: "한 줄 소개가 들어갈 자리입니다",
  imageUrl: "/profile-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "blog", title: "블로그", url: "https://example.com" },
];
