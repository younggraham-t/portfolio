import Summary from "./ui/home/summary";
import Skills from "./ui/home/skills";
export default function Home() {
  return (
      <div className={`text-center items-center justify-center`}>
          <Summary/>
          <Skills/>
      </div>
  );
}
