import { Card } from "../molecules/Card";
import data from "../../data/data-card.json";

export const CardGrid: React.FC = () => (
    <div className="bg-[#FEF3F2] py-6">
  <div className="grid grid-cols-3 gap-4 mx-auto max-w-7xl p-2">
    {data.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </div>
  </div>
);
