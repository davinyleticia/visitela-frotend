import { Icon } from "../atoms/Icon";
import { Title } from "../atoms/Title";
import { Description } from "../atoms/Description";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="p-6 rounded-xl shadow-md bg-white flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow">
    <div className="text-red-500 text-4xl">
      <Icon icon={icon} />
    </div>
    <Title className="text-lg font-bold">{title}</Title>
    <Description className="text-sm text-gray-600">{description}</Description>
  </div>
);
