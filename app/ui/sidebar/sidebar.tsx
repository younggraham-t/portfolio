import MainTitle from "./main-title";
import NavPanel from "./nav-panel";

export default function SideBar() {
    return (
        <div className={"flex h-full flex-row md:justify-between px-2 py-2 md:px-1 md:ml-1"}>
            <NavPanel />
        </div>
    )
}
