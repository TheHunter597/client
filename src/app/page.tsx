import Footer from "./components/footer";
import Hero from "./components/Hero";
import SectionFive from "./components/sectionFive";
import SectionFour from "./components/sectionFour";
import SectionOne from "./components/sectionOne";
import SectionSix from "./components/sectionSix";
import SectionThree from "./components/sectionThree";
import SectionTwo from "./components/sectionTwo";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
}
