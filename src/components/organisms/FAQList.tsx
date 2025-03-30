import { FAQItem } from "../molecules/FAQItem";
import data from "@/data/data-faq.json";

export const FAQList: React.FC = () => (
  <div className="max-w-6xl mx-auto p-2 rounded-lg my-7">
    {data.map((item) => (
      <FAQItem key={item.id} {...item} />
    ))}
  </div>
);