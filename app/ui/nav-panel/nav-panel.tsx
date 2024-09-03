import NavLinks from "@/app/ui/nav-panel/nav-links"
import SocialIcons from "./social-links"
import { greatVibes } from '../fonts'

export default function NavPanel() {
    return (
        <>
            <div className={`flex flex-row justify-between space-x-1`}>
                <NavLinks/>
            </div>
            <div className={`hidden md:flex w-full justify-center space-x-8 items-center`}>
                <form  method="get" action="/api/resume"> 
                    <button type="submit" className={`p-2 border-2 border-orange-500 hover:bg-orange-500/30 rounded text-orange-500`}>Resume</button>
                </form>
            </div>
            <div className={`flex w-full justify-center space-x-4 items-center`}>
                <SocialIcons /> 
            </div>
            <div className={`${greatVibes.className} text-xl w-full flex text-center justify-center`}>
                <p>Personally Handcrafted by Me.</p>
            </div>
        </>
    )
}

