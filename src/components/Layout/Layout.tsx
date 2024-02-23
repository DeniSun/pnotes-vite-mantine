import {FC} from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '@/components/Layout/Header/Header';

export const Layout: FC = () => (
  <>
      <Header/>
    <main>
      <Outlet />
    </main>
  </>
);
