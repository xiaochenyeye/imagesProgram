import { StrictMode, useState } from 'react';
import {
    RouterProvider,
} from "react-router-dom";
import Menu from './Menu';
import router from '@renderer/routes/router';
import { CmmButton } from './OptionGroup';

function LayOut(): JSX.Element {
    const [isMac] = useState<boolean>(
        window.electron.process.platform === "darwin"
    );
    return (
        <StrictMode>
            <div className='flex'>
                <Menu isMac={isMac} />
                <main className='flex-1 bg-black h-screen' style={{ borderLeft: '1px solid #2A2B2F', borderRight: '1px solid #2A2B2F' }}>
                    <RouterProvider router={router} />
                </main>
                <CmmButton isMac={isMac} />
            </div>
        </StrictMode>
    )
}

export default LayOut
