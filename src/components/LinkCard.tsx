import type { LinkItem } from "@/data/profile";

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/60 bg-white/45 px-6 py-4 text-center text-[15px] font-semibold shadow-[0_4px_24px_-12px_rgba(122,74,44,0.35)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_8px_28px_-12px_rgba(122,74,44,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 active:translate-y-0"
    >
      {title}
    </a>
  );
}
