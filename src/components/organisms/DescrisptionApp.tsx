import TagFeature from "../atoms/TagFeature";

interface DescriptionAppProps {
  colorBg?: string;
}

export default function DescriptionApp({ colorBg }: DescriptionAppProps) {
  return (
    <div className={colorBg ? colorBg : "bg-white"}>
      <div className="flex flex-col items-center justify-center max-w-7xl py-10 px-4 mx-auto text-center">
        
        <TagFeature text="Feature" />

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-base sm:text-lg mb-8 text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Nascetur nisl et sodales non aliquet vel blandit. In eu blandit eu commodo. Ut aliquam id in porta amet. Eget egestas.
          </p>
        </div>

      </div>
    </div>
  );
}
