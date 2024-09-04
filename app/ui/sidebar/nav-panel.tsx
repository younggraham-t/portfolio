import NavLinks from "./nav-links"
import SocialIcons from "./social-links"
import { greatVibes } from '../fonts'
import { GradientBorderHover } from "../gradient-border"

export default function NavPanel() {
    return (
        <>
            <div className={`flex flex-row justify-between space-x-1`}>
                <NavLinks/>
            </div>
            <div className={`hidden md:flex w-full justify-center space-x-8 items-center`}>
                <form  method="get" action="/api/resume" > 
                    <GradientBorderHover> 
                        <button type="submit">Resume</button>
                    </GradientBorderHover>
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

