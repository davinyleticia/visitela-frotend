import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const SocialIcon = ({ type }: { type: "instagram" | "tiktok" }) => {
  const map = {
    instagram: <FaInstagram className="text-pink-500 w-5 h-5" />,
    tiktok: <FaTiktok className="text-black w-5 h-5" />,
    facebook: <FaFacebook className="text-blue-500 w-5 h-5" />,
    twitter: <FaTwitter className="text-blue-400 w-5 h-5" />,
    linkedin: <FaLinkedin className="text-blue-600 w-5 h-5" />,
    youtube: <FaYoutube className="text-red-600 w-5 h-5" />,
    whatsapp: <FaWhatsapp className="text-green-500 w-5 h-5" />,
  };
  return map[type] ?? null;
};