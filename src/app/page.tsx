"use client";
import Headers from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import DescriptionApp from "@/components/organisms/DescrisptionApp";
import { CardGrid } from "@/components/organisms/CardGrid";
import { Tela } from "@/components/organisms/Tela";
import { FAQList } from "@/components/organisms/FAQList";
import FooterImg from "@/components/organisms/FooterImg";

export default function Home() {
  return (
    <>
      {" "}
      <Headers />
      <Hero />
      <DescriptionApp colorBg="bg-[#FEF3F2]" />
      <CardGrid />
      <DescriptionApp />
      <Tela />
      <DescriptionApp />
      <FAQList />
      <FooterImg/>
    </>
  );
}
