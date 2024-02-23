import React from 'react';
import {Group} from '@mantine/core';
import {Link, useLocation} from 'react-router-dom';
import classes from '@/components/Layout/Header/NavBar.module.css';

export const NavBar = () => {
    const {pathname} = useLocation();
    return (
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            <Link to="/home" className={classes.link} data-active={pathname === '/home' || undefined}>
                Home
            </Link>
            <Link to="/links" className={classes.link} data-active={pathname === '/links' || undefined}>
                Links
            </Link>
            <Link to="/todo" className={classes.link} data-active={pathname === '/todo' || undefined}>
                TO DO
            </Link>
            <Link to="/questions" className={classes.link} data-active={pathname === '/questions' || undefined}>
                Questions
            </Link>
        </Group>
    );
};
