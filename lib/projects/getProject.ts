import { ProjectLayoutProps } from "@/app/ui/projects/project-layout";
import { getProjects } from "./getProjects";

export function getProject(id: number) {
	const projects = getProjects();
	
	return projects.filter((project) => project.id === id)[0];
	
}
