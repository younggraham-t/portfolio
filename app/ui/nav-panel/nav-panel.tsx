import NavLinks from "@/app/ui/nav-panel/nav-links"
export default function NavPanel() {
    return (
        <>
            <div className={`flex flex-row justify-between space-x-1`}>
                <NavLinks/>
            </div>
        </>
    )
}
