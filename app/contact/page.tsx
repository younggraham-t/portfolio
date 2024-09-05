import Contact from "../ui/contact/contact"
import {GradientBorder} from "../ui/gradient-border"
export default function Page() {
    return (
        <div className={`flex justify-center items-center w-full h-full`}>
            <div className={`block`}>
                <div className={`flex text-center items-center justify-center`}>
                    <p className={`w-[75%] mb-5`}>Have any questions or want to work together? Leave your details and I&apos;ll get back to you as soon as I can.</p>
                </div>
                <div className={`w-full flex justify-center items-center`}>
                    <Contact />
                </div>
            </div>
        </div>
    )
}
