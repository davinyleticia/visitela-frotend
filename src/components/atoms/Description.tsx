interface DescriptionProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const Description: React.FC<DescriptionProps> = ({ className, children }) => <p className={className}>{children}</p>;
  