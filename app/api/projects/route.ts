import { getProjects } from "@/lib/projects/getProjects";

export async function GET() {
	
	const projects = getProjects()	
	
	return new Response(JSON.stringify(projects), {
		status: 200,
		headers: { 'Content-Type': 'application/json'},
	});
}
