import Image from "next/image";


function FooterImg() {
  return (
    <div className="flex justify-center items-center w-full mx-w-7xl p-2">
      <Image  src="/border-img.svg" alt="Footer Image"  height={800} width={1300} className="h-full" />
    </div>
  );
}

export default FooterImg;