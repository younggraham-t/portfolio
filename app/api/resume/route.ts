import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), "public", "assets", "resume.pdf");
        const buffer = await readFile(filePath);

        return new NextResponse(buffer, {
            status: 200,
            headers: {
                'Content-Disposition': 'attachment; filename="resume.pdf"',
                'Content-Type': 'application/pdf',
                'Content-Length': buffer.length.toString(),
            },
        });
    } catch (error) {
        console.error("Error serving resume:", error);
        return new NextResponse("Resume not found", { status: 404 });
    }
}
