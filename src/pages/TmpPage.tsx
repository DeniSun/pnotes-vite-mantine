import React, {ReactNode} from 'react';
import {Center} from '@mantine/core';
import classes from './TmpPage.module.css';

interface TmpPageProps {
    title: string;
    children?: ReactNode;
}

export const TmpPage = ({title, children}: TmpPageProps) => {
    return (
        <>
            <Center>
                <h1>{title}</h1>
            </Center>
            <div className={classes.description}>{children}</div>
        </>
    );
};
