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
                        className={`grow items-center justify-center text-center gap-2 rounded-md p-1 text-xl font-medium bg-gradient-to-r from-red-500 to-orange-500`}
                    >
                        <p className={clsx(`bg-bg-color rounded-md hover:text-bg-color hover:bg-transparent`,
                                        {
                                            "text-primary-color": pathName === link.href,
                                        },
                        )}>{link.name}</p>
                    </Link>

                )
            })}
        </>
        
    );
}
