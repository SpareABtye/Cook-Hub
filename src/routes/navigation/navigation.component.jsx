import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <>
        <div className='navigation'>
            <Link className='nav-link' to='/Cook-Hub'>
                Home
            </Link>
            <Link className='nav-link' to='/Cook-Hub/shopping_list'>
                My List
            </Link>
            <Link className='nav-link' to='/Cook-Hub/recipes/homepage'>
                Recipes
            </Link>
        </div>
        <Outlet /> 
        </>
    )
};

export default Navigation;