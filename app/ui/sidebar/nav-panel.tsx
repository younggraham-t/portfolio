import NavLinks from "./nav-links"
import SocialIcons from "./social-links"
import { GradientBorderHover } from "../gradient-border"

export default function NavPanel() {
    return (
        <nav className={`w-full flex flex-col gap-2 mt-2 md:grid md:grid-cols-12 ml-1 mr-1`}>
			<div className={`md:col-span-2 text-center font-black text-xl flex items-center justify-center`}>
				<p>Graham Young</p>
			</div>
            <div className={`md:col-span-2 hidden md:flex w-full justify-center space-x-8 items-center`}>
                <form  method="get" action="/api/resume" > 
                    <GradientBorderHover> 
                        <button type="submit">Resume</button>
                    </GradientBorderHover>
                </form>
            </div>
            <div className={`md:col-span-4 flex w-full justify-center space-x-4 items-center`}>
                <SocialIcons /> 
            </div>
            <div className={`md:col-span-4 flex flex-row justify-between space-x-1`}>
                <NavLinks/>
            </div>
        </nav>
    )
}

