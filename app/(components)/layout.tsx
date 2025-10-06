"use client"

import React, { Fragment, useEffect, useState, useContext, } from 'react'
import { LocalStorageBackup } from '@/shared/data/switcherdata/switcherdata';
import { data$, getState } from '@/shared/layouts-components/services/switcherServices';
import { Initialload } from '@/shared/contextapi';
import { usePathname } from 'next/navigation';
import Landingpagelayout from './(landing-layout)/layout';

const Layout = ({ children }: any) => {
    const pathName = usePathname();

    const [localVariable, setLocalVariable] = useState(getState());

    const customstyles: any = {
        ...(localVariable.colorPrimaryRgb !== '' && { '--primary-rgb': localVariable.colorPrimaryRgb }),
        ...(localVariable.bodyBg !== '' && { '--body-bg-rgb': localVariable.bodyBg }),
        ...(localVariable.bodyBg2 !== '' && { '--body-bg-rgb2': localVariable.bodyBg2 }),
        ...(localVariable.lightRgb !== '' && { '--light-rgb': localVariable.lightRgb }),
        ...(localVariable.formControlBg !== '' && { '--form-control-bg': localVariable.formControlBg }),
        ...(localVariable.gray !== '' && { '--gray-3': localVariable.gray }),
        ...(localVariable.inputBorder !== '' && { '--input-border': localVariable.inputBorder }),
    };

    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            setLocalVariable(e);
        });

        return () => subscription.unsubscribe();
    }, []);

    const theme: any = useContext(Initialload);
    useEffect(() => {
        if (typeof window !== 'undefined' && !theme.pageloading) {
            LocalStorageBackup(theme.setpageloading);
        }
    }, []);

    if (pathName === "/components/landing/") {
        return <Landingpagelayout>{children}</Landingpagelayout>;
    }

    return (
        <Fragment>
            <html
                suppressHydrationWarning={true}
                lang={localVariable.lang || undefined}
                dir={localVariable.dir || undefined}
                data-theme-mode={localVariable.dataThemeMode || undefined}
                data-header-styles={localVariable.dataHeaderStyles || undefined}
                data-vertical-style={localVariable.dataVerticalStyle || undefined}
                data-nav-layout={localVariable.dataNavLayout || undefined}
                data-menu-styles={localVariable.dataMenuStyles || undefined}
                data-toggled={localVariable.toggled || undefined}
                data-nav-style={localVariable.dataNavStyle || undefined}
                hor-style={localVariable.horStyle || undefined}
                data-page-style={localVariable.dataPageStyle || undefined}
                data-width={localVariable.dataWidth || undefined}
                data-menu-position={localVariable.dataMenuPosition || undefined}
                data-header-position={localVariable.dataHeaderPosition || undefined}
                data-icon-overlay={undefined}
                data-bg-img={''}
                icon-text={localVariable.iconText || undefined}
                style={customstyles}
            >
                <head>
                    <title>Hello CRM</title>
                </head>
                <body suppressHydrationWarning className="" >
                    {theme.pageloading && children}
                </body>
            </html>
        </Fragment>
    );
}

export default Layout;
