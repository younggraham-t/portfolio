import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "../icons/social-icons";

const socials = [
    {name: "GitHub", href: "https://github.com/younggraham-t", icon: GitHubIcon},
    {name: "LinkedIn", href: "https://www.linkedin.com/in/graham-t-young", icon: LinkedInIcon}
]
export default function SocialIcons() {
    return (
        <>
            {socials.map((social) => {
                const Icon = social.icon;
                return (
                    <Link 
                        href={social.href}
                        key={social.name}
                       className={`w-12 h-12 hover:scale-110`} 
                        target="_blank"
                    >
                        {/* <Image className={`fill-orange-500`} src={social.icon} alt={social.name + " link"} width={48} height={48}/> */}
                        <Icon className={`w-full h-full fill-orange-500`}/>
                    </Link>

                )
            })}
        </>
    ) 
}
