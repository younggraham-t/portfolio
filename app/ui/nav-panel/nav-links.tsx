"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";
import GradientBorder from "../gradient-border";

const links = [
    {name: "Home", href: "/"},
    {name: "Projects", href: "/projects"},
    {name: "Contact", href: "/contact"}
];
export default function NavLinks() {
    const pathName = usePathname(); 
    return (
        <>
            {links.map((link) => {
                return (
                        <Link 
                            key={link.name}
                            href={link.href}
                            className={`grow items-center justify-center text-center gap-2 text-xl font-medium`}
                        >

                            <GradientBorder>
                                <p className={clsx(
                                                {
                                                    "text-primary-color": pathName === link.href,
                                                },
                                )}>{link.name}</p>

                            </GradientBorder>
                        </Link>
                    
                )
            })}
        </>
        
    );
}
