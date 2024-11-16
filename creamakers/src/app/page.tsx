import { LogoCircle } from "@/app/(components)";

const avatars = [
  "/assets/team-people/325.jpg",
  "/assets/team-people/AlrginCypress.jpg",
  "/assets/team-people/Dcelysiz.png",
  "/assets/team-people/Hayaizo.jpg",
  "/assets/team-people/isryds.jpg",
  "/assets/team-people/MedivhTirisfal.jpg",
  "/assets/team-people/Sakuranori.jpg",
  "/assets/team-people/Sylvia.jpg",
  "/assets/team-people/Xiayu.jpg",
  "/assets/team-people/yuxialuozi.png",
];

const logo = "/assets/team-logo.png";

export default function Home() {
  return (
    <div>
      <LogoCircle logo={logo} avatars={avatars} />
    </div>
  );
}
