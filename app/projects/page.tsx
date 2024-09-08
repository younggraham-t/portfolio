import ProjectLayout, { ProjectLayoutType } from "../ui/projects/project-layout"
import ScottAYoungScreenShot from "@/public/scottayoungwebsite.png";
import PortfolioScreenShot from "@/public/portfolio-website.png";

const projects: Array<ProjectLayoutType> = [
    {
        screenshot: ScottAYoungScreenShot,
        title: "Scott A. Young Author",
        subtitle: "Full-Stack Web App",
        liveUrl: "https://scottayoungauthor.com",
        techStack: "React, PHP, MySQL, Mailchimp API, Bluehost" 
    },
    {
        screenshot: PortfolioScreenShot,
        title: "My Portfolio",
        subtitle: "This website",
        liveUrl: "https://portfolio-graham-youngs-projects.vercel.app/",
		githubUrl: "https://github.com/younggraham-t/portfolio",
        techStack: "NextJS, TypeScript, TailwindCSS, Vercel"
    }
]
export default function Page() {
    return (
        <div className={`items-center justify-center mt-8 space-y-4`}>
            {projects.map((project) =>{
                return (
                    <ProjectLayout key={project.title} props={project}/>
                )
            })}
        </div>
    )
}
