import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { addIngredient, replaceBun } from '../../services/burger/actions'

import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import burgerConstructorStyles from './burgerConstructor.module.css';
import appStyles from '../app/app.module.css';
import ConstructorItem from './construcrot-item/ConstructorItem';

function BurgerConstructor({ openModal }) {
  const dispatch = useDispatch()
  const burger = useSelector(state => state.burger.burger)

  const [{ isOver }, dropRef] = useDrop({
    accept: 'ingredient',
    drop: (item) => {
      if (item.type === 'bun') {
        dispatch(replaceBun(item));
      } else {
        dispatch(addIngredient(item));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const calculateTotalPrice = (ingredients) => {
    return ingredients.reduce((total, item) => total + item.price, 0);
  }

  const buns = burger.filter(data => data.type === 'bun');
  const otherIngredients = burger.filter(data => data.type !== 'bun');

  const totalPrice = calculateTotalPrice(burger);

  return (
    <div className={`${appStyles['main-block']} ${burgerConstructorStyles['burger-constructor']} p-4`}>
      <ul ref={dropRef} className={`${burgerConstructorStyles['burger-constructor_block']} mt-25 mb-10`}>
        {buns.length > 0 ? (
          <>
            <li key={`${buns._id}-top`} className={`${burgerConstructorStyles['burger-constructor_item']} ml-10`}>
              <ConstructorElement
                type='top'
                isLocked={true}
                text={`${buns[0].name} (верх)`}
                price={buns[0].price}
                thumbnail={buns[0].image}
              />
            </li>
          </>
        ) : (
          <li className={`
            ${burgerConstructorStyles['burger-constructor_item']} 
            ${burgerConstructorStyles['burger-constructor_item--empty']} 
            ${burgerConstructorStyles['burger-constructor_item--empty-top']} 
            ml-10
            ${isOver ? burgerConstructorStyles['burger-constructor_item--empty-active'] : ''}
          `}>
            Выберите булки
          </li>
        )}

        <div className={`${burgerConstructorStyles['burger-constructor_block']} ${burgerConstructorStyles['burger-constructor_scroll']}`}>
          {otherIngredients.length > 0 ? (
              otherIngredients.map((data, index) => (
                <ConstructorItem key={`${data.uniqueId}`} id={data._id} index={index} data={data} />
              ))
            ) : (
              <li className={`
                ${burgerConstructorStyles['burger-constructor_item']} 
                ${burgerConstructorStyles['burger-constructor_item--empty']} 
                ${burgerConstructorStyles['burger-constructor_item--empty-mid']}
                ml-10
                ${isOver ? burgerConstructorStyles['burger-constructor_item--empty-active'] : ''}
              `}>
                Выберите начинку
              </li>
            )}
        </div>

        {buns.length > 0 ? (
          <>
            <li key={`${buns[0]._id}-bottom`} className={`${burgerConstructorStyles['burger-constructor_item']} ml-10`}>
              <ConstructorElement
                type='bottom'
                isLocked={true}
                text={`${buns[0].name} (низ)`}
                price={buns[0].price}
                thumbnail={buns[0].image}                
              />
            </li>
          </>
        ) : (
          <li className={`
            ${burgerConstructorStyles['burger-constructor_item']} 
            ${burgerConstructorStyles['burger-constructor_item--empty']} 
            ${burgerConstructorStyles['burger-constructor_item--empty-bot']} 
            ml-10
            ${isOver ? burgerConstructorStyles['burger-constructor_item--empty-active'] : ''}
          `}>
            Выберите булки
          </li>
        )}
      </ul>
      
      <div className={`${burgerConstructorStyles['burger-constructor_total']} mb-10`}>
        <p className={`${burgerConstructorStyles['burger-constructor_total-price']} text text_type_digits-medium pr-2`}>
          {totalPrice}
        </p>
        <CurrencyIcon type="primary" />

        <Button onClick={() => openModal()} htmlType="button" type="primary" size="medium"
          extraClass={buns.length > 0 && otherIngredients.length > 0 ? 
                      `ml-10` : 
                      `${burgerConstructorStyles['burger-constructor_button--inactive']} ml-10`}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired
}; 

export default BurgerConstructor;
