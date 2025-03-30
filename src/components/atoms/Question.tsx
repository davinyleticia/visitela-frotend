interface QuestionProps {
    children: React.ReactNode;
  }
  
  export const Question: React.FC<QuestionProps> = ({ children }) => (
    <h3 className="text-lg font-semibold cursor-pointer">{children}</h3>
  );