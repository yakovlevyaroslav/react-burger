import appStyles from './app.module.css';
import indexStyles from '../../index.module.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


import AppHeader from '../app-header/AppHeader';
import BurgerConstructor from '../burger-consctructor/BurgerConstructor';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';
import LoaderComponent from '../loader-component/LoaderComponent';
import ErrorComponent from '../error-component/ErrorComponent';

import { fetchIngredients } from '../../services/ingredients/actions';
import { postBurgerData } from '../../services/order/actions';
import { ingredientInfo } from '../../services/ingredient/actions';

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.ingredients)
  const burger = useSelector(state => state.burger.burger)
  const ingredient = useSelector(state => state.ingredient.ingredient)

  useEffect(() => {
      dispatch(fetchIngredients());
  }, [dispatch]);

  // Модальные окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (data) => {
    if (!!data) {
      dispatch(ingredientInfo(data))
    } else {
      dispatch(ingredientInfo([]))
      
      const burgerIngredientsId = burger.map(data => data._id)
      const orderIngredientsData = { ingredients: [...burgerIngredientsId, burgerIngredientsId[0]] };

      dispatch(postBurgerData(orderIngredientsData))
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    dispatch(ingredientInfo([]))
    setIsModalOpen(false);
  };

  // Отображение загрузки или ошибки
  if (loading) return (
    <LoaderComponent />
  )
  if (error) return (
    <ErrorComponent>Ошибка: {error.message}</ErrorComponent>
  )

  return (
    <>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={`${indexStyles.container} ${appStyles.main}`}>
          <BurgerIngredients openModal={openModal} />
          <BurgerConstructor openModal={openModal} />
        </main>
      </DndProvider>
      {isModalOpen &&
        <>
          {
            Object.keys(ingredient[0]).length > 0
            ?
            <Modal title={'Детали заказа'} onClose={closeModal}>
              <IngredientDetails />
            </Modal>
            :
            <Modal title={''} onClose={closeModal}>
              <OrderDetails />
            </Modal>
          }
        </>
      }
    </>
  );
}

export default App;