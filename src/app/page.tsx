
import Image from "next/image";
import HeroSection from "@/components/ui/hero";
import NavBar from "../components/ui/navbar";
import AboutSection from "@/components/ui/about";
import RoomSection from "@/components/ui/rooms";
import DropdownMenu from "@/components/ui/dropdown";



export default function Home() {
  return (
    <>
   <div className="z-50">
     <NavBar/>
   </div>
     <HeroSection/>
     <AboutSection/>
     <RoomSection/>
    </>
  );
}
