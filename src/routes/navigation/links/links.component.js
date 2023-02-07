import { Link } from 'react-router-dom';

const Links = () => {
    return (
        <>
            <Link className='nav-link' to='/Cook-Hub'>
                Home
            </Link>
            <Link className='nav-link' to='/Cook-Hub/shopping_list'>
                My List
            </Link>
            <Link className='nav-link' to='/Cook-Hub/recipes'>
                Recipes
            </Link>
        </>
    )
};

export default Links