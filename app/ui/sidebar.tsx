import MainTitle from "./main-title/main-title";
import NavPanel from "./nav-panel/nav-panel";

export default function SideBar() {
    return (
        <div className={"flex h-full flex-col space-y-4 px-2 py-2 md:px-1"}>
            <MainTitle />
            <NavPanel />
        </div>
    )
}
