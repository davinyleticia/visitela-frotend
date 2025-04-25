import { Card } from "../molecules/Card";
import data from "../../data/data-card.json";

export const CardGrid: React.FC = () => (
  <div className="bg-[#FEF3F2] py-10 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  </div>
);
