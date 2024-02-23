import { Group } from '@mantine/core';
import { Logo } from '@/components/Logo/Logo';
import { UserSettings } from '@/components/UserSettings/UserSettings';

import classes from './Header.module.css';
import { NavBar } from '@/components/Layout/Header/NavBar';

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group visibleFrom="xs">
          <Logo />
        </Group>
        <Group>
          <NavBar />
        </Group>
        <Group>
          <UserSettings />
        </Group>
      </div>
    </header>
  );
}
