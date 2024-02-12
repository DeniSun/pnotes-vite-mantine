import { useLocation } from 'react-router-dom';
import { Group } from '@mantine/core';
import classes from './SiteHeader.module.css';
import { Logo } from '@/components/Logo/Logo';
import { UserSettings } from '@/components/UserSettings/UserSettings';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/links', label: 'Links' },
  { link: '/todo', label: 'TO DO' },
  { link: '/questions', label: 'Questions' },
];

export function SiteHeader() {
  const location = useLocation();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={location.pathname === link.link || undefined}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group visibleFrom="xs">
          <Logo />
        </Group>
        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
        </Group>
        <Group>
          <UserSettings />
        </Group>
      </div>
    </header>
  );
}
