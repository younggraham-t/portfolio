import { DivProps } from "react-html-props"
export function GradientBorder({children, className, ...divProps}: DivProps) {
    return (
        <div className={`p-1 bg-linear-to-r from-primary to-secondary rounded first:p-1 first:rounded *:bg-bg ${className?? ""}`}>
            {children}
        </div>
    )
    

}


export function GradientBorderHover({children, className, ...divProps}: DivProps) {
    return (
        <div className={`p-1 bg-linear-to-r from-primary to-secondary rounded *:p-1 *:hover:bg-transparent *:hover:text-accent first:rounded *:bg-bg ${className?? ""}`}>
            {children}
        </div>
    )
    
}
