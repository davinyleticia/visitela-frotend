import { FaInstagram, FaTiktok } from "react-icons/fa";

export const SocialIcon = ({ type }: { type: "instagram" | "tiktok" }) => {
  const map = {
    instagram: <FaInstagram className="text-pink-500 w-5 h-5" />,
    tiktok: <FaTiktok className="text-black w-5 h-5" />
  };
  return map[type] ?? null;
};