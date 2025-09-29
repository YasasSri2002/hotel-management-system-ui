
import HeroSection from "@/components/ui/hero-section/hero";
import NavBar from "../components/ui/nav-bar/navbar";
import AboutSection from "@/components/ui/about-section/about";
import RoomSection from "@/components/ui/rooms-section/rooms";
import AmenitiesSection from "@/components/ui/amenties-section/amenties";
import ContactSection from "@/components/ui/get-In-touch-section/contact";



export default function Home() {
  return (
    <>
   <div className="z-50">
     <NavBar/>
   </div>
     <HeroSection/>
     <AboutSection/>
     <RoomSection/>
     <AmenitiesSection/>
     <ContactSection/>
    </>
  );
}
