import {Group, Menu, UnstyledButton} from '@mantine/core';
import {IconChevronsDown} from '@tabler/icons-react';
import {Link} from 'react-router-dom';

import classes from './UserSettings.module.css';

export const UserSettings = () => (
  <Group gap={5} visibleFrom="sm">
      <Link to="/reminder" className={classes.link}>
      Reminder
      </Link>
      <Link to="/about" className={classes.link}>
      About
      </Link>
    <Menu trigger="click-hover" withinPortal>
      <Menu.Target>
          <UnstyledButton className={classes.link}>
              User
              <IconChevronsDown size="0.9rem" stroke={1.5} className={classes.linkIcon}/>
          </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Settings</Menu.Label>
          <Menu.Item component={Link} to="/settings">
          Settings
        </Menu.Item>
          <Menu.Item component={Link} to="/admin">
          Admin
        </Menu.Item>
        <Menu.Divider />
          <Menu.Item component={Link} to="/logout">
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  </Group>
);
