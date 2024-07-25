import React from 'react';
import { ConstructorElement, CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { dataBurgerStatic } from '../../utils/data';

import burgerConstructorStyles from './burgerConstructor.module.css';
import appStyles from '../app/app.module.css';

class BurgerConstructor extends React.Component {
  state = {
    burgers: dataBurgerStatic
  }

  calculateTotalPrice = () => {
    const { burgers } = this.state;
    return burgers.reduce((total, item) => total + item.price, 0);
  }

  render() {
    const { burgers } = this.state;

    const buns = burgers.filter(data => data.type === 'bun');
    const otherIngredients = burgers
      .filter(data => data.type !== 'bun')
      .map(data => (
        <li key={data._id} className={`${burgerConstructorStyles.burger_constructor__item}`}>
          <DragIcon />
          <ConstructorElement
            text={data.name}
            price={data.price}
            thumbnail={data.image}
          />
        </li>
      ));

    const totalPrice = this.calculateTotalPrice();

    return (
      <div className={`${appStyles.main_block} ${burgerConstructorStyles.burger_constructor} p-4`}>
        <ul className={`${burgerConstructorStyles.burger_constructor} mt-25 mb-10`}>

          {buns.length > 0 && (
            <li key={`${buns[0]._id}-top`} className={`${burgerConstructorStyles.burger_ingredients__item} pl-8`}>
              <ConstructorElement
                type='top'
                isLocked={true}
                text={`${buns[0].name} (верх)`}
                price={buns[0].price}
                thumbnail={buns[0].image}
              />
            </li>
          )}

          {otherIngredients.length > 0 && (
            <div className={`${burgerConstructorStyles.burger_constructor} ${burgerConstructorStyles.burger_constructor__scroll}`}>
              {otherIngredients}
            </div>
          )}
          
          {buns.length > 0 && (
            <li key={`${buns[0]._id}-bottom`} className={`${burgerConstructorStyles.burger_ingredients__item} pl-8`}>
              <ConstructorElement
                type='bottom'
                isLocked={true}
                text={`${buns[0].name} (низ)`}
                price={buns[0].price}
                thumbnail={buns[0].image}
              />
            </li>
          )}

        </ul>
        <div className={`${burgerConstructorStyles.burger_constructor__total} mb-10`}>
          <p className={`${burgerConstructorStyles['burger_constructor__total-price']} text text_type_digits-medium pr-2`}>
            {totalPrice}
          </p>
          <CurrencyIcon type="primary" />
          <Button htmlType="button" type="primary" size="medium" extraClass="ml-10">
            Оформить заказ
          </Button>
        </div>
      </div>
    );
  }
}

export default BurgerConstructor;
