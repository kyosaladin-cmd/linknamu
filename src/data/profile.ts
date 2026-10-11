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
  name: "배성웅",
  bio: "SK 하이닉스 품질관리 엔지니어 | 요즘에는 AI 공부에 관심이 많아요",
  imageUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/kyosaladin-cmd" },
  { id: "instagram", title: "📸 인스타그램", url: "https://www.instagram.com/bsu0404" },
  { id: "email", title: "📧 이메일", url: "mailto:kyosaladin@naver.com" },
];
