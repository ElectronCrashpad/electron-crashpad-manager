import { RouterProvider, createHashRouter } from "react-router-dom";

import CommonLayout from "./layouts/Common.layout";
import LoginPage from './pages/login/Login.page';
import DashboardPage from "./pages/dashboard/Dashboard.page";
import ModelListPage from "./pages/model/ModelList.page";
import CrashpadListPage from "./pages/client/CrashpadList.page";

const router = createHashRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <CommonLayout />,
        children: [{
            path: 'dashboard',
            element: <DashboardPage />
        }, {
            path: 'model',
            children: [{
                path: 'list',
                element: <ModelListPage />
            }]
        }, {
            path: 'client',
            children: [{
                path: 'crashpad',
                element: <CrashpadListPage />
            }]
        }]
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
}

export default AppRouter;