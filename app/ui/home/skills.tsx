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
    {name: "Git", icon: GitLogo},
    {name: "NextJS", icon: NextLogo},
    {name: "ReactJS", icon: ReactLogo},
    {name: "NodeJS", icon: NodeLogo},
]
const skillCol2 = [
    {name: "JavaScript", icon: JavaScriptLogo},
    {name: "TypeScript", icon: TypeScriptLogo},
    {name: "HTML", icon: HTMLLogo},
    {name: "CSS", icon: CSSLogo},
    {name: "MySQL", icon: MySQLLogo},
]
const skillCol3 = [
    {name: "Java", icon: JavaLogo},
    {name: "Python", icon: PythonLogo}, 
    {name: "PHP", icon: PHPLogo},
    {name: "Rust", icon: RustLogo},
]

const skills = [
    {name: "col1", contents: skillCol1},
    {name: "col2", contents: skillCol2},
    {name: "col3", contents: skillCol3},
]
export default function Skills() {
    return (
          <div className={`flex mt-8 justify-between space-x-2 items-center`}>
              {skills.map((skillCol) => {
                  return (
                      <div key={skillCol.name} className={`block w-full space-y-2`}>
                          {skillCol.contents.map((skill) => {
                              return (
                                  <GradientBorder key={skill.name}>
                                      {skill.icon && 
                                      <div className={`flex w-full bg-bg-color justify-center items-center`}>
                                        <Image className={`w-12 h-12`} src={skill.icon} alt={skill.name + " logo"}/>
                                      </div>}
                                      <p>{skill.name}</p>
                                  </GradientBorder>
                              )
                          })}
                      </div> 
                  )
              })}
          </div>
    )
}
