import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import React from 'react';
import { HomePage } from '@/pages/Home.page';
import { LinksPage } from '@/pages/Links.page';
import { Layout } from '@/components/Layout/Layout';
import { NotFoundPage } from '@/pages/Page404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/',
    element: <Layout />,
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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
