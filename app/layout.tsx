import type { Metadata } from "next";
import "./globals.css";
import SideBar from "./ui/sidebar";
import { lusitana } from "./ui/fonts";

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
      <body className={`${lusitana.className} antialiased bg-neutral-50 bg-stone-800 text-stone-100`}>
        <div className={"flex h-screen flex-col md:flex-row md:overflow-hidden"}>
            <div className={"w-full flex-none  md:w-5/12"}>
                <SideBar/> 
            </div>
            <div className={"flex-grow p-6 md:overflow-y-auto md:p-12"}>
                {children}
            </div>
        </div>
      </body>
    </html>
  );
}
