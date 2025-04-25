import { Avatar } from "../atoms/Avatar";
import { ProfileActions } from "../molecules/ProfileActions";
import { SocialLink } from "../molecules/SocialLink";
import { Text } from "../atoms/Text";

export const ProfileCard = () => (
  <div className="w-full max-w-200 mx-auto p-6 rounded-xl shadow border bg-white">
    <div className="flex justify-end items-start mb-4">
     
      <button className="text-2xl font-bold">⋯</button>
    </div>
    <div className="flex justify-center items-start mb-4">
      <Avatar src="../avatarMook.svg" alt="Maria Eduarda" />
     
   </div>

    <h1 className="text-4xl font-semibold">Maria Eduarda</h1>
    <h2 className="text-2xl">@edu_maria</h2>
    <h3 className="text-2xl mt-4 mb-2">Sobre mim</h3>
    <Text>
      Lorem ipsum dolor sit amet consectetur. Eu sed vitae nisi sollicitudin sit massa adipiscing.
      Ut volutpat molestie sed egestas penatibus enim.
    </Text>
    <ProfileActions />


    <h3 className="text-2xl font-medium mt-4 mb-2">Minhas redes</h3>
    <SocialLink platform="instagram" username="edu_maria" isLocked={false} />
    <SocialLink platform="tiktok" username="edu_maria" isLocked={true} />
  </div>
);