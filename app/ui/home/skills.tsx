import { GradientBorder } from "../gradient-border";
import Image from "next/image";
import GitLogo from "@/public/assets/logos/git-logo.svg";
import NextLogo from "@/public/assets/logos/next-js-logo.svg";
import ReactLogo from "@/public/assets/logos/react-logo.svg";
import NodeLogo from "@/public/assets/logos/node-js-logo.svg";
import JavaScriptLogo from "@/public/assets/logos/javascript-logo.svg";
import TypeScriptLogo from "@/public/assets/logos/typescript-logo.svg";
import HTMLLogo from "@/public/assets/logos/html-logo.svg";
import CSSLogo from "@/public/assets/logos/css-logo.svg";
import MySQLLogo from "@/public/assets/logos/mysql-logo.svg";
import JavaLogo from "@/public/assets/logos/java-logo.svg";
import PythonLogo from "@/public/assets/logos/python-logo.svg";
import PHPLogo from "@/public/assets/logos/php-logo.svg";
import RustLogo from "@/public/assets/logos/rust-logo.svg";


const skillCol1 = [
	{ name: "Git", icon: GitLogo },
	{ name: "TypeScript", icon: TypeScriptLogo },
	{ name: "NodeJS", icon: NodeLogo },
	{ name: "Java", icon: JavaLogo },
	{ name: "Python", icon: PythonLogo },
	{ name: "MySQL", icon: MySQLLogo },
	{ name: "PHP", icon: PHPLogo },
	{ name: "Rust", icon: RustLogo },
	{ name: "NextJS", icon: NextLogo },
]
// const skillCol2 = [
//     {name: "NodeJS", icon: NodeLogo},
//     {name: "TypeScript", icon: TypeScriptLogo},
//     {name: "MySQL", icon: MySQLLogo},
//     {name: "HTML", icon: HTMLLogo},
//     {name: "CSS", icon: CSSLogo},
// ]
// const skillCol3 = [
//     {name: "Java", icon: JavaLogo},
//     {name: "PHP", icon: PHPLogo},
//     {name: "Rust", icon: RustLogo},
//     {name: "ReactJS", icon: ReactLogo},
// ]

const skills = [
	{ name: "col1", contents: skillCol1 },
	// {name: "col2", contents: skillCol2},
	// {name: "col3", contents: skillCol3},
]

const otherSkills = [

	{ name: "ReactJS", icon: ReactLogo },
	{ name: "CSS", icon: CSSLogo },
	{ name: "HTML", icon: HTMLLogo },
	{ name: "JavaScript", icon: JavaScriptLogo },
]
export default function Skills() {
	return (
		<div className={`mt-8`}>
			<h3 className={`text-left text-lg font-bold`}>Skills</h3>
			<div className={`flex flex-row flex-wrap justify-between space-x-2 items-center`}>

				{skills.map((skillCol) => {
					return (
						<div key={skillCol.name} className={`flex flex-row w-full space-x-2`}>
							{skillCol.contents.map((skill) => {
								return (
									<GradientBorder key={skill.name}>
										{skill.icon &&
											<div className={`flex w-full bg-bg-color justify-center items-center`}>
												<Image className={`w-32 h-32`} src={skill.icon} alt={skill.name + " logo"} />
											</div>}
										<p>{skill.name}</p>
									</GradientBorder>
								)
							})}
						</div>
					)
				})}
			</div>
		</div>
	)
}
