import { Routes, Route } from "react-router-dom";
import DefaultLayout from "src/layouts/Default";
import Homepage from "src/pages/Homepage";

export default function RoutesList() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Homepage />} />
            </Route>
        </Routes>
    );
}
