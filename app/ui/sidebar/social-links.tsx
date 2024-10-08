import Link from "next/link";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../icons/social-icons";

const socials = [
    {name: "GitHub", href: "https://github.com/younggraham-t", icon: GitHubIcon},
    {name: "Email", href: "mailto:younggraham.t@gmail.com", icon: EmailIcon},
    {name: "LinkedIn", href: "https://www.linkedin.com/in/graham-t-young", icon: LinkedInIcon},
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
                        <Icon className={`w-full h-full `} 
							hasGradient 
							stops={[
                                {color: '#ef4444', offset: 30},
							{color: '#f97316', offset: 100},
                        	]}
							rotateGradient= {45}
						/>
                    </Link>

                )
            })}
        </>
    ) 
}
