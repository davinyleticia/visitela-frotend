"use client";
import { Avatar } from "../atoms/Avatar";
import { ProfileActions } from "../molecules/ProfileActions";
import { SocialLink } from "../molecules/SocialLink";
import { Text } from "../atoms/Text";
import { QrCode, CircleUserRound, HeartPlus } from "lucide-react";
import { useState, useEffect } from "react"; // Importando useState e useEffect
import Image from "next/image";

export const ProfileCard = () => {
  const [showQrCode, setShowQrCode] = useState(false); // Estado para alternar entre os cards

  // Função para alternar o estado
  const toggleCard = () => setShowQrCode((prev) => !prev);

  const handlefavotite = () => {
    window.location.href = "/in/favorite?username=edu_maria"; // Redireciona para a página de favoritos
  }

  const handleDeviceMotion = (event: DeviceMotionEvent) => {
    const { accelerationIncludingGravity } = event;
  
    // Verifica se accelerationIncludingGravity não é null ou undefined
    if (accelerationIncludingGravity) {
      // Checando se o movimento do dispositivo foi suficientemente forte
      if (
        (accelerationIncludingGravity.x && accelerationIncludingGravity.x > 15) ||
        (accelerationIncludingGravity.y && accelerationIncludingGravity.y > 15) ||
        (accelerationIncludingGravity.z && accelerationIncludingGravity.z > 15)
      ) {
        toggleCard(); // Alterna o card baseado no movimento
      }
    }
  };
  
  

  useEffect(() => {
    // Adiciona o listener de movimento
    window.addEventListener("devicemotion", handleDeviceMotion);

    // Limpeza do evento quando o componente for desmontado
    return () => {
      window.removeEventListener("devicemotion", handleDeviceMotion);
    };
  }, []); // O efeito roda apenas uma vez, quando o componente for montado

  return (
    <div className="w-full max-w-200 p-6">
      <div className="p-6 rounded-xl shadow border bg-white">
        <div className="flex justify-between items-start mb-4">
          <button className="text-2xl font-bold" onClick={handlefavotite}>
          <HeartPlus />
          </button>
          <button className="text-2xl font-bold" onClick={toggleCard}>
            {!showQrCode ? <QrCode /> : <CircleUserRound />}
          </button>
        </div>
        <div className="flex justify-center items-start mb-4">
          <Avatar src="../avatarMook.svg" alt="Maria Eduarda" />
        </div>
        <h1 className="text-4xl font-semibold">Maria Eduarda</h1>
        <h2 className="text-2xl">@edu_maria</h2>

        {/* Condicional para alternar entre os cards */}
        {showQrCode ? (
          <div className="flex justify-center items-start my-6 mb-4 border-2 border-dashed border-gray-300 rounded-lg p-4">
            <Image src="/mooke/qcode.png" width={400} height={400} alt="QR Code" />
          </div>
        ) : (
          <>
            <h3 className="text-2xl mt-4 mb-2">Sobre mim</h3>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Eu sed vitae nisi
              sollicitudin sit massa adipiscing. Ut volutpat molestie sed
              egestas penatibus enim.
            </Text>
            <ProfileActions />

            <h3 className="text-2xl font-medium mt-4 mb-2">Meus Links</h3>
            <SocialLink
              platform="other"
              username="Minhas Viagens"
              isLocked={false}
            />
            <SocialLink
              platform="instagram"
              username="@edu_maria"
              isLocked={false}
            />
            <SocialLink
              platform="tiktok"
              username="@edu_maria"
              isLocked={true}
            />
            <SocialLink
              platform="youtube"
              username="@edu_maria"
              isLocked={true}
            />
            <SocialLink
              platform="twitter"
              username="@edu_maria"
              isLocked={false}
            />
            <SocialLink
              platform="whatsapp"
              username="@edu_maria"
              isLocked={true}
            />
            <SocialLink
              platform="facebook"
              username="@edu_maria"
              isLocked={false}
            />
          </>
        )}
      </div>
      <div className="flex justify-center items-center my-8">
        <a href="./in/denuciar" className="text-1xl">
          Denunciar
        </a>
      </div>
    </div>
  );
};
