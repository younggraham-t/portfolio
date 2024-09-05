import { GradientBorder, GradientBorderHover } from "../gradient-border";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";

export type ProjectLayoutType = {
    screenshot: StaticImageData,
    title: string,
    subtitle: string, 
    liveUrl: string,
    githubUrl?: string,
    shortDesc?: string,
    techStack: string,
}
export interface ProjectLayoutProps {
    props: ProjectLayoutType,
}

export default function ProjectLayout({props}: ProjectLayoutProps) {

    return (
        <GradientBorder className={`grow w-full`}>
            <div className={`grow p-2 justify-between space-y-4`}>
                <div className={`flex space-x-4`}>
                    {/* screenshot with link to live site*/}
                    <Link className={`flex hover:scale-90 w-[65%] justify-center items-center`} href={props.liveUrl}>
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
                        <div className={`flex w-full`}>
                            <form  method="get" action={props.liveUrl} > 
                                <GradientBorderHover> 
                                    <button type="submit">Live App</button>
                                </GradientBorderHover>
                            </form>
                        </div>

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
                    {/* short description */}
                    {props.shortDesc && <p>{props.shortDesc}</p>}
                    {/* tech stack */}
                    <p>Technologies: {props.techStack}</p>
                </div>
            </div>
        </GradientBorder>
    )
}
