import React from "react";
import {Preloader} from "../components/Preloader/Preloader";

export const withSuspense = Component => (
    <React.Suspense fallback={<Preloader/>}>
        <Component/>
    </React.Suspense>
);
