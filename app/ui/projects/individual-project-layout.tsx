import { GradientBorder, GradientBorderHover } from "../gradient-border";
import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/projects/getProject";
import { ProjectLayoutType } from "./project-layout";

export interface IndividualProjectLayoutProps {
	id: number
} 

export default function IndividualProjectLayout({id}: IndividualProjectLayoutProps) {
	const props: ProjectLayoutType = getProject(id)

	let imageUrl = "";
	if (props?.liveUrl) {
		imageUrl = props.liveUrl;
	}
	else if (props?.githubUrl) {
		imageUrl = props.githubUrl;
	}
	else {
		imageUrl = "";
	}


    return (
        <GradientBorder className={`grow w-full`}>
            <div className={`grow p-2 justify-between space-y-4`}>
                <div className={`flex space-x-4`}>
                    {/* screenshot with link to live site*/}
					{}
                    <Link className={`flex hover:scale-90 w-[65%] justify-center items-center`} href={imageUrl}>
                        <GradientBorder className={`flex justify-center`}>
                            <Image className={`w-[92.5%]`} src={props.screenshot} alt={props.title + " screenshot"} width={1362} height={601}/>
                        </GradientBorder>

                    </Link>
                    {/* div with title, subtitle, live app button, github button*/}
                    <div className={`block space-y-1 max-w-[25%]`}>
                        {/* title */}
                        <h2 className={`text-xl`}>{props.title}</h2>
                        {/* subtitle */}
                        <h3 className={`text-md`}>{props.subtitle}</h3>
                        {/* live app button */}
						{props.liveUrl &&
							
                        <div className={`flex w-full`}>
                            <form  method="get" action={props.liveUrl} > 
                                <GradientBorderHover> 
                                    <button type="submit">Live App</button>
                                </GradientBorderHover>
                            </form>
                        </div>
						}

                        {/* github button */}
                        {props.githubUrl &&
                        <div className={`flex w-full`}>
                            <form  method="get" action={props.githubUrl} > 
                                <GradientBorderHover> 
                                    <button type="submit">GitHub</button>
                                </GradientBorderHover>
                            </form>
                        </div>
                        }

                    </div>
                </div>
                <div className={``}>
                    {/* tech stack */}
                    <p>Technologies: {props.techStack}</p>
					<br/>
                    {/* long description */}
                    {props.longDesc && <p className="whitespace-pre-wrap">{props.longDesc}</p>}
                </div>
            </div>
        </GradientBorder>
    )
	
}
