import React from 'react';
import AppHeader from '../app-header/AppHeader';
import BurgerConstructor from '../burger-consctructor/BurgerConstructor';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';

import appStyles from './app.module.css';
import indexStyles from '../../index.module.css'

class App extends React.Component {
  render() {
    return (
      <>
        <AppHeader></AppHeader>
        <main className={`${indexStyles.container} ${appStyles.main}`}>
          <BurgerIngredients></BurgerIngredients>
          <BurgerConstructor></BurgerConstructor>
        </main>
      </>
    );
  }
}

export default App;