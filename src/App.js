import { Route, Routes } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import ShoppingList from './routes/shoppping-list/shopping-list.component';
import RecipesHomepage from './routes/recipes/recipes-homepage.component';
import Home from './routes/home/home.component';

import './App.scss';

const App = () => {
  
  return (
    <Routes>
      <Route path='/Cook-Hub' element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path='/Cook-Hub/shopping_list' element={ <ShoppingList /> }/>
        <Route path='/Cook-Hub/recipes/homepage' element={ <RecipesHomepage /> } />
      </Route>
    </Routes>
  );
}

export default App;
