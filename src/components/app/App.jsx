import {useState, useEffect} from 'react';

import AppHeader from '../app-header/AppHeader';
import BurgerConstructor from '../burger-consctructor/BurgerConstructor';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import Modal from '../modal/Modal';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import LoaderComponent from '../loader-component/LoaderComponent';
import ErrorComponent from '../error-component/ErrorComponent';

import appStyles from './app.module.css';
import indexStyles from '../../index.module.css';

function App() {
  // Полученные данных об ингридиентах
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL_INGREDIENTS = 'https://norma.nomoreparties.space/api/ingredients'

  useEffect(() => {
    const fetchBurgerIngredients = async () => {
      try {
        const response = await fetch(URL_INGREDIENTS);
        if (!response.ok) {
          throw new Error(`Ошибка! статус: ${response.status}`);
        }
        const data = await response.json();
        setIngredients(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBurgerIngredients();
  }, []);


  // Модальные окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [typeModal, setTypeModal] = useState('')

  const openModal = (data) => {
    if (data !== 'order') {
      setTypeModal('ingredient')
      setSelectedIngredient(data);
    } else {
      setTypeModal('order')
      setSelectedIngredient([]);
    }
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIngredient(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
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
      <main className={`${indexStyles.container} ${appStyles.main}`}>
        <BurgerIngredients openModal={openModal} propIngredients={ingredients} />
        <BurgerConstructor openModal={openModal} propIngredients={ingredients} />
      </main>
      {isModalOpen && 
        <>
          <Modal type={typeModal} onClose={closeModal} propIngredient={selectedIngredient} />
          <ModalOverlay onClose={closeModal}/>
        </>
      }
    </>
  );
}

export default App;