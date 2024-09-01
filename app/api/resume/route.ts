import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
	const buffer = await readFile(path.join(process.cwd(), "public/assets/resume.pdf"));
	
    return new Response(buffer, {
        status: 200,
        headers: {
		  'Content-Disposition': `attachment; filename="resume.pdf"`,
		  'Content-Type': 'application/pdf'
    	},
    })
}
