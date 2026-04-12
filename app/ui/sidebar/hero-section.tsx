import { GradientBorderHover } from "../gradient-border";
import Link from "next/link";
import Summary from "../home/summary";
import { UserIcon } from "../icons/hero-icons"
import clsx from "clsx";

export default function HeroSection() {
	return (
		<div className={`flex flex-col gap-2 text-center justify-center 
                items-center mb-2 h-35 md:h-80 md:flex-row`
		}>
			<UserIcon className={`w-1/4 max-h-48`}
				hasGradient
				stops={[
					{ color: '#8BADD9', offset: 30 },
					{ color: '#739FD9', offset: 100 },
				]}
				rotateGradient={45}
			/>
			<div className={`flex flex-col gap-1 w-full`}>
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
