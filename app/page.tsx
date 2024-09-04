import { UserIcon } from "./ui/icons/hero-icons";
export default function Home() {
  return (
      <div className={`text-center items-center justify-center`}>
        <UserIcon className={`w-full max-h-48`} 							
                    hasGradient 
					stops={[
                        {color: '#ef4444', offset: 30},
						{color: '#f97316', offset: 100},
                    ]}
                    rotateGradient= {45}
          />
        <p className={`text-xl flex text-center items-center justify-center w-full`}> As a Full-Stack Developer, I have a passion for coding and building responsive web applications. My unique ability to combine strong problem solving, logic, and creativity motivates me to be always learning and growing. When I&apos;m not at my computer, I spend my time reading, fishing, or playing my mandolin. </p>
      </div>
  );
}
