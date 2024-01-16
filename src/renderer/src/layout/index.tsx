import { StrictMode } from 'react';
import {
    RouterProvider,
} from "react-router-dom";
import Menu from './Menu';
import router from '@renderer/routes/router';

function LayOut(): JSX.Element {
    return (
        <StrictMode>
            <div className='flex'>
                <Menu />
                <main className='flex-1 bg-black h-screen' style={{ borderLeft: '1px solid #2A2B2F', borderRight: '1px solid #2A2B2F' }}>
                    <RouterProvider router={router} />
                </main>
            </div>
        </StrictMode>
    )
}

export default LayOut
