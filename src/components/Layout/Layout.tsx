import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { SiteHeader } from '@/components/Header/SiteHeader';

export const Layout: FC = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};
