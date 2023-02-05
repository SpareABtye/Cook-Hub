import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Spin as Menu } from 'hamburger-react'

import Links from './links/links.component';

import './navigation.styles.scss'

const Navigation = () => {

    const [ open, setOpen ] = useState(false);

    const navControl = () => {
        setOpen(!open);
    }

    const navVisibility = () => {
        if(open){
            return (
                <div className='mobile-menu'>
                    <Links />
                </div>
            )
        }
    }

    return (
        <>
        <div className='navigation'>
            <Links />
        </div>
        <div className='mobile-nav'>
            <Menu onToggle={navControl} size={30} />
            {navVisibility()}
        </div>
        <Outlet /> 
        </>
    )
};

export default Navigation;