import { ProLayout } from '@ant-design/pro-components';
import {
    DesktopOutlined,
    SmileFilled,
} from '@ant-design/icons';

import { Link, Outlet, useLocation } from 'react-router-dom';

const commonRoutes = [
    {
        path: '/dashboard',
        name: '仪表板',
        icon: <SmileFilled />,
    },
    {
        name: '客户端管理',
        icon: <DesktopOutlined />,
        path: '/client',
        routes: [
            {
                path: '/client/crashpad',
                name: '崩溃记录',
            },
            {
                path: '/client/version',
                name: '客户端版本',
            },
        ],
    }
];

export default () => {
    const location = useLocation();

    return (
        <div
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                route={{
                    path: '/',
                    routes: commonRoutes,
                }}
                location={{
                    pathname: location.pathname,
                }}
                menuItemRender={(menuItemProps, defaultDom) => {
                    return <Link to={{ pathname: menuItemProps.path }}>{defaultDom}</Link>;
                }}
            >
                <Outlet />
            </ProLayout>
        </div>
    );
};