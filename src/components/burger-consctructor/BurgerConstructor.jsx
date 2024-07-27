import { ConstructorElement, CurrencyIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import burgerConstructorStyles from './burgerConstructor.module.css';
import appStyles from '../app/app.module.css';

function BurgerConstructor({propIngredients, openModal}) {
  const calculateTotalPrice = (ingredients) => {
    return ingredients.reduce((total, item) => total + item.price, 0);
  }

  const buns = propIngredients
    .filter(data => data.type === 'bun');

  const otherIngredients = propIngredients
    .filter(data => data.type !== 'bun')
    .map(data => (
      <li key={data._id} className={`${burgerConstructorStyles['burger-constructor_item']}`}>
        <DragIcon />
        <ConstructorElement
          text={data.name}
          price={data.price}
          thumbnail={data.image}
        />
      </li>
    ));

  const totalPrice = calculateTotalPrice(propIngredients);

  return (
    <div className={`${appStyles['main-block']} ${burgerConstructorStyles['burger-constructor']} p-4`}>
      <ul className={`${burgerConstructorStyles['burger-constructor']} mt-25 mb-10`}>

        {buns.length > 0 && (
          <li key={`${buns[0]._id}-top`} className={`${burgerConstructorStyles['burger-constructor_item']} pl-8`}>
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
          <div className={`${burgerConstructorStyles['burger-constructor']} ${burgerConstructorStyles['burger-constructor_scroll']}`}>
            {otherIngredients}
          </div>
        )}
        
        {buns.length > 0 && (
          <li key={`${buns[0]._id}-bottom`} className={`${burgerConstructorStyles['burger-constructor_item']} pl-8`}>
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
      <div className={`${burgerConstructorStyles['burger-constructor_total']} mb-10`}>
        <p className={`${burgerConstructorStyles['burger-constructor_total-price']} text text_type_digits-medium pr-2`}>
          {totalPrice}
        </p>
        <CurrencyIcon type="primary" />
        <Button onClick={() => openModal('order')} htmlType="button" type="primary" size="medium" extraClass="ml-10">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
