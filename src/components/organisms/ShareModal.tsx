// components/organisms/ShareModal.tsx

import { FaTimes, FaCopy, FaEnvelope, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IconWithLabel } from "../atoms/IconWithLabel";
import { CopyButton } from "../atoms/CopyButton";
import { ShareOption } from "../molecules/ShareOption";

interface ShareModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ShareModal = ({ visible, onClose }: ShareModalProps) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-md shadow-lg p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">
          <FaTimes />
        </button>
        <h2 className="text-lg font-semibold mb-4">Compartilhe esse Visite.la</h2>

        <div className="flex items-center justify-between bg-gray-100 p-3 rounded mb-4">
          <div className="flex items-center gap-2">
            <FaCopy className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">visite.la/nomedousuário</span>
          </div>
          <CopyButton text="visite.la/nomedousuário" />
        </div>

        <div className="flex flex-col gap-2">
          <ShareOption icon={<FaWhatsapp className="text-green-500" />} label="WhatsApp" />
          <ShareOption icon={<FaLinkedin className="text-blue-700" />} label="LinkedIn" />
          <ShareOption icon={<FaTwitter className="text-sky-500" />} label="Twitter" />
          <ShareOption icon={<FaFacebook className="text-blue-600" />} label="Facebook" />
          <ShareOption icon={<FaEnvelope className="text-gray-600" />} label="E-mail" />
        </div>
      </div>
    </div>
  );
};
