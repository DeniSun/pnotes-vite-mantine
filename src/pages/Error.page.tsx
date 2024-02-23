import {useRouteError} from 'react-router-dom';
import {Center} from '@mantine/core';

export const NotFoundPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <>
            <Center>
                <h1>Oops!</h1>
            </Center>
            <p>Sorry, an unexpected error has occurred.</p>
            {error ? (
                <p>
                    <i>{JSON.stringify(error)}</i>
                </p>
            ) : null}
        </>
    );
};
