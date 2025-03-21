import AboutUs from "../components/aboutUs";
import WhyUs from "../components/whyUs"
import Team from "../components/Team.js"
import Experties from "../components/experties"
import Partners from "../components/patners"
import SpecialMachines from "../components/specialMachines" 
import  NavbarWithBanner from "../components/navwithbanner"
import Footer from "../components/footer";
export default function Page(){
  return (
    <>
    <NavbarWithBanner />
    <AboutUs/>
    <WhyUs/>
    <Team/>
    <Partners/>
    <Experties/>
    <SpecialMachines/>
    <Footer />
  
    </>
  )
}