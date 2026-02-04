import { ProjectLayoutType } from '@/app/ui/projects/project-layout';
import fs from 'fs';
import path from 'path';

export function getProjects() {

	const projectsFilePath = path.join(process.cwd(), "src/projects.json");
	const projectsFileContents = fs.readFileSync(projectsFilePath, 'utf-8');
	const projects: Array<ProjectLayoutType> = JSON.parse(projectsFileContents);
	
	return projects;
}
