import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import React from 'react';
import {HomePage} from '@/pages/Home.page';
import {LinksPage} from '@/pages/Links.page';
import {Layout} from '@/components/Layout/Layout';
import {TmpPage} from '@/pages/TmpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    element: <Layout/>,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/links',
        element: <LinksPage />,
      },
      {
        path: '/settings',
        element: <TmpPage title="Settings page">Страница настроек</TmpPage>,
      },
      {
        path: '/admin',
        element: <TmpPage title="Admin page"/>,
      },
      {
        path: '/logout',
        element: <TmpPage title="Logout page"/>,
      },
      {
        path: '*',
        element: <TmpPage title="Error page">Запрашиваемая страница не найдена</TmpPage>,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
