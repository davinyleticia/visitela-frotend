import { Icon } from "../atoms/Icon";
import { Title } from "../atoms/Title";
import { Description } from "../atoms/Description";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className=" p-4 rounded-lg shadow">
    <div className="flex justify-center"><Icon icon={icon} /></div>
    <Title className="text-center text-lg font-bold">{title}</Title>
    <Description className="text-center text-sm text-gray-600">{description}</Description>
  </div>
);