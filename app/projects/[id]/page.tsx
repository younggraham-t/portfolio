import IndividualProjectLayout from "@/app/ui/projects/individual-project-layout";

export default async function Page({ params }: { params: Promise<{id: string}> }) {
	
	
	const { id } = await params
	const idNum = parseInt(id)
	
	
	return (
		<IndividualProjectLayout id={idNum} />
	)
}
