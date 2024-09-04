import { GradientBorder } from "./ui/gradient-border";
import Summary from "./ui/home/summary";
export default function Home() {
  return (
      <div className={`text-center items-center justify-center`}>
          <Summary/>
          <div className={`flex justify-between items-center`}>
              <div className={`block w-full`}>
                  <GradientBorder>
                  </GradientBorder>
              </div> 
              <div className={`block w-full`}>
                  <GradientBorder>
                  </GradientBorder>
              </div>
              <div className={`block w-full`}>
                  <GradientBorder>
                  </GradientBorder>
              </div>
          </div>
      </div>
  );
}
