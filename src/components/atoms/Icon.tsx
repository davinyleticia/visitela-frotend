interface IconProps {
    icon: string;
  }
  
  export const Icon: React.FC<IconProps> = ({ icon }) => <span className="text-xl"><img src={icon} /></span>;
  