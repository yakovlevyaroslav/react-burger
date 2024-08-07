import burgerIngredientsStyles from '../burgerIngredients.module.css'

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd'
import { useSelector } from 'react-redux';

const IngredientItem = ({ data, openModal }) => {
  const burger = useSelector(state=> state.burger.burger)


  const getIngredientCount = (ingredientId) => {
    return burger.filter(item => item._id === ingredientId).length;
  };

  const ingredientCount = getIngredientCount(data._id);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'ingredient',
    item: data,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <li
      ref={dragRef}
      className={ isDragging ? 
                  `${burgerIngredientsStyles['burger-ingredients_item']} p-4` :
                  `${burgerIngredientsStyles['burger-ingredients_item']} ${burgerIngredientsStyles['burger-ingredients_item--dragging']} p-4`}
      onClick={() => openModal(data)}
    >
      <Counter count={ingredientCount} size="default" extraClass="m-1" />
      <img src={data.image} alt={data.name} />
      <div className={`${burgerIngredientsStyles['burger-ingredients_price']} p-1 text text_type_digits-default`}>
        <p className={`pr-2 text text_type_digits-default`}>{data.price}</p>
        <CurrencyIcon classExtra="ml-2" />
      </div>
      <p className={`${burgerIngredientsStyles['burger-ingredients_name']} pb-8 text text_type_main-default`}>
        {data.name}
      </p>
    </li>
  );
};

IngredientItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}; 

export default IngredientItem;

