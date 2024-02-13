import { Center, Group, Menu, UnstyledButton } from '@mantine/core';
import { IconChevronsDown } from '@tabler/icons-react';

import classes from './UserSettings.module.css';

export const UserSettings = () => (
  <Group gap={5} visibleFrom="sm">
    <a href="/reminder" className={classes.link}>
      Reminder
    </a>
    <a href="/about" className={classes.link}>
      About
    </a>
    <Menu trigger="click-hover" withinPortal>
      <Menu.Target>
        <Center>
          <UnstyledButton className={classes.linkLabel}>User</UnstyledButton>
          <IconChevronsDown size="0.9rem" stroke={1.5} />
        </Center>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Settings</Menu.Label>
        <Menu.Item component="a" href="/settings">
          Settings
        </Menu.Item>
        <Menu.Item component="a" href="/admin">
          Admin
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item component="a" href="/logout">
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  </Group>
);
