import React, { Suspense } from "react";
import "./styles/index.scss";
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "../shared/lib/classNames/classNames";
import {Navbar} from "../widgets/NavBar";
import {Sidebar} from "../widgets/Sidebar";
import {AppRouter} from "./providers/router";

function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
