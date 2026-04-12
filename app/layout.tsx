import type { Metadata } from "next";
import "./globals.css";
import SideBar from "./ui/sidebar/sidebar";
import { lusitana } from "./ui/fonts";
import { Analytics } from "@vercel/analytics/react"
import Footer from "./ui/sidebar/footer";

export const metadata: Metadata = {
  title: "Graham Young",
  description: "MSIT Student | Aspiring DevOps & System Administrator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased bg-bg text-text`}>
        <main className={"flex h-screen flex-col m-auto"}>
            <nav className={"w-full max-w-250 m-auto"}>
                <SideBar/> 
            </nav>
            <section className={"grow w-full p-4 m-auto "}>
                {children}
                <Analytics/>
            </section>
			<footer className={`max-w-250 m-auto`}>
			<Footer />
			</footer>
        </main>
      </body>
    </html>
  );
}
