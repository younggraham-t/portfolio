import ProjectLayout, { ProjectLayoutType } from "../ui/projects/project-layout"
import { getProjects } from "@/lib/projects/getProjects";

export default async function Page() {
	
	const projects1: Array<ProjectLayoutType> = getProjects() 
	
    return (
        <div className={`items-center justify-center mt-8 space-y-4`}>
            {projects1.map((project) =>{
                return (
                    <ProjectLayout key={project.title} props={project}/>
                )
            })}
        </div>
    )
}
