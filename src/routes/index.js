import { lazy } from "react";

const HomeLayout = lazy(() => import("../container"))
const RecipeList  = lazy(() => import("../pages/RecipeList"));
//Dashboard Routes
const DASHBOARD_ROUTES = [
    {
        index: true,
        element: <RecipeList />,
    },
];
const MainRoutes = [
    {
        path: "/",
        element: <HomeLayout />,

        children: [
            ...DASHBOARD_ROUTES,
            {
                path: "About",
                element: <RecipeList />,
            },
            {
                path: "*",
                element: <h1>404</h1>,
            },
        ],
    },
];
export default MainRoutes


