import { DivProps } from "react-html-props"
export default function GradientBorder({children, className, ...divProps}: DivProps) {
    return (
        <div className={`p-1 bg-gradient-to-r from-red-500 to-orange-500 rounded *:p-1 *:hover:bg-transparent *:hover:text-bg-color *:rounded *:bg-bg-color ${className?? ""}`}>
            {children}
        </div>
    )
    
}
