import { useState } from 'react';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import burgerIngredientsStyles from './burgerIngredients.module.css';
import appStyles from '../app/app.module.css';

function Tabs() {
  const [current, setCurrent] = useState('one')

  return (
    <div className={`${burgerIngredientsStyles['burger-ingredients_tabs']}`}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

function BurgerIngredients({propIngredients, openModal}) {
  const buns = propIngredients
    .filter(data => data.type === 'bun')
    .map(data => (
      <li key={data._id} 
          className={`${burgerIngredientsStyles['burger-ingredients_item']} p-4`}
          onClick={() => openModal(data)}>
          <Counter count={1} size="default" extraClass="m-1" />
        <img src={data.image} alt={data.name} />
        <div className={`${burgerIngredientsStyles['burger-ingredients_price']} p-1 text text_type_digits-default`}>
          <p className={`pr-2 text text_type_digits-default`}>
            {data.price}
          </p>
          <CurrencyIcon classExtra='ml-2'/>
        </div>
        <p className={`${burgerIngredientsStyles['burger-ingredients_name']} pb-8 text text_type_main-default`}>
          {data.name}
        </p>
      </li>
    ));

  const sauces = propIngredients
    .filter(data => data.type === 'sauce')
    .map(data => (
      <li key={data._id} 
          className={`${burgerIngredientsStyles['burger-ingredients_item']} p-4`}
          onClick={() => openModal(data)}>
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={data.image} alt={data.name} />
        <div className={`${burgerIngredientsStyles['burger-ingredients_price']} p-1 text text_type_digits-default`}>
          <p className={`pr-2 text text_type_digits-default`}>
            {data.price}
          </p>
          <CurrencyIcon classExtra='ml-2'/>
        </div>
        <p className={`${burgerIngredientsStyles['burger-ingredients_name']} pb-8 text text_type_main-default`}>
          {data.name}
        </p>
      </li>
    ));

  const mains = propIngredients
    .filter(data => data.type === 'main')
    .map(data => (
      <li key={data._id} 
          className={`${burgerIngredientsStyles['burger-ingredients_item']} p-4`}
          onClick={() => openModal(data)}>
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={data.image} alt={data.name} />
        <div className={`${burgerIngredientsStyles['burger-ingredients_price']} p-1 text text_type_digits-default`}>
          <p className={`pr-2 text text_type_digits-default`}>
            {data.price}
          </p>
          <CurrencyIcon classExtra='ml-2'/>
        </div>
        <p className={`${burgerIngredientsStyles['burger-ingredients_name']} pb-8 text text_type_main-default`}>
          {data.name}
        </p>
      </li>
    ));

  return (
    <div className={`${appStyles['main-block']} mr-10`}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h1>
      <Tabs />
      <div className={`${burgerIngredientsStyles['burger-ingredients']} mt-10`}>
        {buns.length > 0 && (
          <div className={`${burgerIngredientsStyles['burger-ingredients_wrapper']}`}>
            <p className='text text_type_main-medium'>
              Булки
            </p>
            <ul className={`${burgerIngredientsStyles['burger-ingredients_list']}`}>
              {buns}
            </ul>
          </div>
        )}
        {sauces.length > 0 && (
          <div className={`${burgerIngredientsStyles['burger-ingredients_wrapper']}`}>
            <p className='text text_type_main-medium'>
              Соусы
            </p>
            <ul className={`${burgerIngredientsStyles['burger-ingredients']}`}>
              {sauces}
            </ul>
          </div>
        )}
        {mains.length > 0 && (
          <div className={`${burgerIngredientsStyles['burger-ingredients_wrapper']}`}>
            <p className='text text_type_main-medium'>
              Начинки
            </p>
            <ul className={`${burgerIngredientsStyles['burger-ingredients']}`}>
              {mains}
            </ul>
          </div>
        )}
      </div>
      
    </div>
  )
}

BurgerIngredients.propTypes = {
  propIngredients: PropTypes.array,
  openModal: PropTypes.func
}; 

export default BurgerIngredients;