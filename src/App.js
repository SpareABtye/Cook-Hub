import { Route, Routes } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import ShoppingList from './routes/shoppping-list/shopping-list.component';
import RecipesApp from './routes/recipes/recipes-app.component';
import Home from './routes/home/home.component';

import './App.scss';

const App = () => {
  
  return (
    <Routes>
      <Route path='/Cook-Hub' element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path='/Cook-Hub/shopping_list' element={ <ShoppingList /> }/>
        <Route path='/Cook-Hub/recipes/*' element={ <RecipesApp /> } />
      </Route>
    </Routes>
  );
}

export default App;
