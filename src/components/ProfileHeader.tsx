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
        className="h-28 w-28 rounded-full border border-gray-200 object-cover"
      />
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-gray-500">{bio}</p>
    </header>
  );
}
