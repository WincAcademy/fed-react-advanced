import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Root = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};