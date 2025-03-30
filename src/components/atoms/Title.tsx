interface TitleProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const Title: React.FC<TitleProps> = ({ className, children }) => <h3 className={className}>{children}</h3>;
  