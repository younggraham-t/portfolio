import { GradientBorder } from "../gradient-border";

const skillCol1 = [
    {name: "NextJS", icon: ""},
    {name: "ReactJS", icon: ""},
    {name: "Java", icon: ""},
    {name: "Python", icon: ""}, 
]
const skillCol2 = [
    {name: "JavaScript", icon: ""},
    {name: "TypeScript", icon: ""},
    {name: "HTML", icon: ""},
    {name: "CSS", icon: ""},
    {name: "MySQL", icon: ""},
]
const skillCol3 = [
    {name: "Git", icon: ""},
    {name: "NodeJS", icon: ""},
    {name: "PHP", icon: ""},
    {name: "Rust", icon: ""},
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
                                      {skill.icon != "" && skill.icon}
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
