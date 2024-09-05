import type { Metadata } from "next";
import "./globals.css";
import SideBar from "./ui/sidebar/sidebar";
import { lusitana } from "./ui/fonts";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Graham Young",
  description: "Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased bg-bg-color text-text-color`}>
        <main className={"flex h-screen flex-col md:flex-row md:overflow-hidden"}>
            <nav className={"w-full flex-none  md:w-5/12"}>
                <SideBar/> 
            </nav>
            <section className={"flex-grow p-4 md:overflow-y-auto"}>
                {children}
                <Analytics/>
            </section>
        </main>
      </body>
    </html>
  );
}
