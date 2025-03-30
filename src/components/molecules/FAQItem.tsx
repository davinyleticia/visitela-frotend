import { useState } from "react";
import { Question } from "../atoms/Question";
import { IconRotate } from "../atoms/IconRotate";

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b p-4" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center">
        <Question>{question}</Question>
        <IconRotate isOpen={isOpen} />
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};