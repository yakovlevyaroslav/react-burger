import React from 'react';
import { ConstructorElement, CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { dataBurgerStatic } from '../../utils/data';

import burgerConstructorStyles from './burgerConstructor.module.css';

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

    const buns = burgers
      .filter(data => data.type === 'bun')
      .map(data => (
        <li key={data._id} className={`${burgerConstructorStyles.burger_constructor__item} pl-10`}>
          <ConstructorElement
            type={data.type}
            isLocked={true}
            text={data.name}
            price={data.price}
            thumbnail={data.image}
          />
        </li>
      ));

    const otherIngredients = burgers
      .filter(data => data.type !== 'bun')
      .map(data => (
        <li key={data._id} className={`${burgerConstructorStyles.burger_constructor__item}`}>
          <DragIcon />
          <ConstructorElement
            type={data.type}
            isLocked={false}
            text={data.name}
            price={data.price}
            thumbnail={data.image}
          />
        </li>
      ));

    const totalPrice = this.calculateTotalPrice();

    return (
      <div className={`p-4`} style={{display: 'flex', flexDirection: 'column'}}>
        <ul className={`${burgerConstructorStyles.burger_constructor} mt-25 mb-10`}>
          {buns[0]}
          {otherIngredients.length > 0 && (
            <div className={`${burgerConstructorStyles.burger_constructor} ${burgerConstructorStyles.burger_constructor__scroll}`}>
              {otherIngredients}
            </div>
          )}
          {buns.length > 1 && buns[1]}
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
