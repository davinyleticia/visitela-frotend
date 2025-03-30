interface IconProps {
    isOpen: boolean;
  }
  
  export const IconRotate: React.FC<IconProps> = ({ isOpen }) => (
    <span className="text-xl transition-transform" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
      ➕
    </span>
  );