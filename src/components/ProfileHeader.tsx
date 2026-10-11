import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, imageUrl }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_12px_32px_-12px_rgba(122,74,44,0.45)]"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="text-balance mt-2 max-w-xs text-[15px] leading-relaxed text-stone-600">
        {bio}
      </p>
    </header>
  );
}
