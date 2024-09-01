"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
                        className={clsx(
                            `grow items-center justify-center text-center gap-2 
                            rounded-md bg-transparent p-1 text-xl font-medium border-2 
                            border-orange-500 
                             hover:text-orange-500 hover:bg-orange-500/30`,
                            {
                                "text-orange-500 bg-orange-500/30": pathName === link.href,
                            },
                        )}
                    >
                        <p>{link.name}</p>
                    </Link>

                )
            })}
        </>
        
    );
}
