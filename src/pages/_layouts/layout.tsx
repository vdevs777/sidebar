import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="bg-slate-100 w-full">
                    <div className="ml-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}