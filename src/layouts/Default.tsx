import { Outlet } from "react-router-dom";

import Header from "src/components/shared/Header";
import Sidebar from "src/components/shared/Sidebar";

export default function DefaultLayout() {
    return (
        <div className="w-full h-screen">
            <Header className="fixed top-0 left-0 w-full h-12 bg-blue-600"></Header>
            <div className="flex h-full pt-12">
                <Sidebar className="w-80 h-full overflow-auto bg-blue-400"></Sidebar>
                <main className="h-full overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
