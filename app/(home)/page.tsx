import Summary from "../ui/home/summary";
import Skills from "../ui/home/skills";
import HeroSection from "../ui/sidebar/hero-section";
export default function Home() {
  return (
      <div className={`text-center items-center justify-center`}>
            <HeroSection />
          <Skills/>
		  
      </div>
  );
}
