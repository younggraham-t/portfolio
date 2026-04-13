import { GradientBorderHover } from "../gradient-border";
import Link from "next/link";
import Summary from "../home/summary";
import { UserIcon } from "../icons/hero-icons"
import clsx from "clsx";
import Image from "next/image";
import HeroImage from "../../../public/Young_Graham_792-0268-Retouched.jpg"

			// <UserIcon className={`w-1/4 max-h-48`}
			// 	hasGradient
			// 	stops={[
			// 		{ color: '#8BADD9', offset: 30 },
			// 		{ color: '#739FD9', offset: 100 },
			// 	]}
			// 	rotateGradient={45}
			// />
export default function HeroSection() {
	return (
		<div className={`flex flex-col gap-4 text-center justify-center 
                items-center mb-2 md:h-80 md:flex-row md:max-w-250 md:m-auto`
		}>
			<Image className={`w-48 h-48 rounded-full object-cover`} src={HeroImage} alt="An image of Graham Young" width={2048} height={1638}/>
			<div className={`flex flex-col gap-1 w-full items-center  md:items-baseline`}>
				<Summary />
				<Link
					href={`/contact`}
					className={`w-1/4 items-center justify-center text-center gap-2 text-xl font-medium`}
				>

					<GradientBorderHover>
						<p className={``}>Work With Me</p>

					</GradientBorderHover>
				</Link>


			</div>

		</div>

	)
}
