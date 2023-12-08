import { lazy } from "react";

const HomeLayout = lazy(() => import("../container"))
const RecipeList  = lazy(() => import("../pages/RecipeList"));
const Favorites = lazy(() => import("../pages/FavRecipelist"));
const RecipeDetail  = lazy(() => import("../pages/RecipeDetail"));
// Routes
const HOME_ROUTES = [
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
            ...HOME_ROUTES,
            {
                path: "About",
                element: <RecipeList />,
            },
            {
                path: "favorites",
                element: <Favorites />,
              },
            {
                path: "recipe-detail",
                element: <RecipeDetail />,
            },
            {
                path: "*",
                element: <h1>404</h1>,
            },
        ],
    },
];
export default MainRoutes


