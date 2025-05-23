import { SocialIcon } from "../atoms/SocialIcon";
import { EyeOff, Lock } from "lucide-react";

type Props = {
  platform: "instagram" | "tiktok" | "facebook" | "twitter" | "linkedin" | "youtube" | "whatsapp" | "other";
  username: string;
  isLocked: boolean;
};

export const SocialLink = ({ platform, username, isLocked }: Props) => (
  <div className="flex items-center justify-between px-4 py-2 rounded-lg border border-gray-200 shadow-sm bg-white mb-2 cursor-pointer">
    <div className="flex items-center gap-2 ">
      <SocialIcon type={platform} />
      <span className="text-2xl">{username}</span>
    </div>
    {isLocked ? <Lock className="w-4 h-4 text-gray-500" /> : <EyeOff className="w-4 h-4 text-gray-500" />}
  </div>
);