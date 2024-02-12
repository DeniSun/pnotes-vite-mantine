import { Center, Group, Menu } from '@mantine/core';
import { IconChevronsDown } from '@tabler/icons-react';

import classes from './UserSettings.module.css';

export const UserSettings = () => {
  const links = [
    { link: '/about', label: 'Features' },
    {
      link: '#1',
      label: 'User',
      links: [
        { link: '/settings_label', label: 'Settings', type: 'label' }, //<Menu.Label>Settings</Menu.Label>
        { link: '/settings', label: 'Settings' },
        { link: '/admin', label: 'Admin' },
        { link: '/community', label: 'Community', type: 'divider' }, //<Menu.Divider />
        { link: '/logout', label: 'Logout' },
      ],
    },
    { link: '/about', label: 'About' },
  ];

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) =>
      item.type === 'label' ? (
        <Menu.Label key={item.link}>{item.label}</Menu.Label>
      ) : item.type === 'divider' ? (
        <Menu.Divider key={item.link} />
      ) : (
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
      )
    );
    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronsDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        //        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Group gap={5} visibleFrom="sm">
      {items}
    </Group>
  );
};
